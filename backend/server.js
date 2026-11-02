
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { rateLimit } = require("express-rate-limit");
const { createClient } = require("@supabase/supabase-js");
const { Resend } = require("resend");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");

const allowedOrigins = (
  process.env.FRONTEND_URL || "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin not allowed"));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json({ limit: "20kb" }));

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  next();
});

// Initialize services only when their environment variables exist.
const supabase =
  process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
    ? createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY,
        {
          auth: {
            persistSession: false,
            autoRefreshToken: false,
          },
        }
      )
    : null;

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const CONTACT_EMAIL =
  process.env.CONTACT_NOTIFICATION_EMAIL ||
  "therealm.international@gmail.com";

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests. Please try again later.",
  },
  skip: () => process.env.NODE_ENV === "test",
});

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "THE REALM backend is running!",
  });
});

app.post("/api/contact", contactLimiter, async (req, res, next) => {
  try {
    const { name, email, service, message } = req.body || {};

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof service !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all fields correctly.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanService = service.trim();
    const cleanMessage = message.trim();

    const allowedServices = [
      "AI",
      "Web",
      "Automation",
      "Software",
      "Other",
    ];

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      !cleanName ||
      cleanName.length > 100 ||
      !emailPattern.test(cleanEmail) ||
      cleanEmail.length > 254 ||
      !allowedServices.includes(cleanService) ||
      !cleanMessage ||
      cleanMessage.length > 3000
    ) {
      return res.status(400).json({
        success: false,
        message: "Please enter valid contact details.",
      });
    }

    if (!supabase) {
      return res.status(503).json({
        success: false,
        message: "Contact service is not configured yet.",
      });
    }

    // 1. Save the visitor's message in Supabase.
    const { data, error } = await supabase
      .from("contact_messages")
      .insert({
        name: cleanName,
        email: cleanEmail,
        service: cleanService,
        message: cleanMessage,
      })
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Contact database operation failed.");
      return res.status(500).json({
        success: false,
        message: "Unable to save your message. Please try again.",
      });
    }

    // 2. Send an email notification after the database save.
    let emailSent = false;

    if (resend && process.env.RESEND_FROM_EMAIL) {
      try {
        const result = await resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL,
          to: [CONTACT_EMAIL],
          replyTo: cleanEmail,
          subject: `New THE REALM enquiry: ${cleanService}`,
          text: [
            "A new contact form submission was received.",
            "",
            `Name: ${cleanName}`,
            `Email: ${cleanEmail}`,
            `Service: ${cleanService}`,
            "",
            "Message:",
            cleanMessage,
            "",
            `Submission ID: ${data.id}`,
          ].join("\n"),
        });

        if (result.error) {
          throw new Error("Email provider rejected the request.");
        }

        emailSent = true;
      } catch {
        // The message is already safely saved in Supabase.
        console.error("Contact notification email could not be sent.");
      }
    }

    return res.status(201).json({
      success: true,
      message: "Your message has been received successfully!",
      emailNotificationSent: emailSent,
    });
  } catch (error) {
    return next(error);
  }
});

// Handle malformed JSON and other errors.
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  if (
    error instanceof SyntaxError &&
    error.status === 400 &&
    "body" in error
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON request body.",
    });
  }

  if (error.message === "Origin not allowed") {
    return res.status(403).json({
      success: false,
      message: "This origin is not allowed.",
    });
  }

  console.error("Backend request failed.");

  return res.status(500).json({
    success: false,
    message: "An unexpected server error occurred.",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`THE REALM backend running on port ${PORT}`);
  });
}

module.exports = app;
