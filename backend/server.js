
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.disable("x-powered-by");

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
  })
);

app.use(express.json({ limit: "20kb" }));

const dataFolder = path.join(__dirname, "data");
const messagesFile = path.join(dataFolder, "messages.json");

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder, { recursive: true });
}

if (!fs.existsSync(messagesFile)) {
  fs.writeFileSync(messagesFile, "[]", "utf8");
}

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "THE REALM backend is running!",
  });
});

app.post("/api/contact", (req, res) => {
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

    const messages = JSON.parse(
      fs.readFileSync(messagesFile, "utf8")
    );

    messages.push({
      id: require("crypto").randomUUID(),
      name: cleanName,
      email: cleanEmail,
      service: cleanService,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(
      messagesFile,
      JSON.stringify(messages, null, 2),
      "utf8"
    );

    res.status(201).json({
      success: true,
      message: "Your message has been received successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to save your message. Please try again.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`THE REALM backend running on http://localhost:${PORT}`);
});
