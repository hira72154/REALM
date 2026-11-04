
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";

import { PageIntro } from "./Shared";
import usePageMeta from "../usePageMeta";

const CONTACT_EMAIL = "therealm.international@gmail.com";

// Production backend URL
const API_BASE_URL = (
  import.meta.env.VITE_API_BASE_URL ||
  "https://realm-backend.vercel.app"
).replace(/\/+$/, "");

const API_URL = `${API_BASE_URL}/api/contact`;

const emptyForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  usePageMeta({
    title: "Contact THE REALM | AI, Automation & Web Development",
    description:
      "Contact THE REALM for AI solutions, business automation, software development and professional web development services. Share your project requirements and explore worldwide collaboration opportunities.",
  });

  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setStatus("");
    setIsSuccess(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("Sending your message...");
    setIsSuccess(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message."
        );
      }

      setStatus(
        result.message ||
          "Thank you! Your message has been received successfully."
      );

      setIsSuccess(true);
      setForm(emptyForm);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus(
        error.message === "Failed to fetch"
          ? "Could not connect to the server. Please try again later."
          : error.message ||
              "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <PageIntro
        eyebrow="CONTACT THE REALM"
        title="Have an Idea? Let's Build It."
        description="Looking for AI solutions, business automation or professional web development? Tell us about your project, share your requirements or explore a potential collaboration with our team."
      />

      <section
        className="section contact-section"
        aria-label="Contact THE REALM"
      >
        <div className="container contact-grid">
          <div className="contact-content realm-reveal">
            <span className="eyebrow">
              START A CONVERSATION
            </span>

            <h2>
              Let's Make
              <span> Something Meaningful.</span>
            </h2>

            <p>
              Share your business goals, project requirements
              or ideas. Let's explore how artificial intelligence,
              automation and modern technology can help.
            </p>

            {[
              "Tell us about your project",
              "Explore technology solutions",
              "Discuss business opportunities",
            ].map((text) => (
              <div className="contact-feature" key={text}>
                <CheckCircle2 size={21} />
                <span>{text}</span>
              </div>
            ))}

            <div className="contact-email-card">
              <div className="contact-email-icon">
                <Mail size={21} />
              </div>

              <div className="contact-email-details">
                <span>Email Us</span>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT_EMAIL)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email-link"
                  aria-label="Email THE REALM"
                >
                  {CONTACT_EMAIL}
                  <ArrowUpRight size={16} />
                </a>

                <span>Click to write us an email</span>
              </div>
            </div>
          </div>

          <form
            className="contact-form realm-reveal"
            onSubmit={handleSubmit}
          >
            <h2>Send Us a Message</h2>

            <p>
              Tell us what you're working on and how we
              can help.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={254}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Interested In</label>

              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="AI">
                  Artificial Intelligence
                </option>
                <option value="Web">
                  Web Development
                </option>
                <option value="Automation">
                  Business Automation
                </option>
                <option value="Software">
                  Software Development
                </option>
                <option value="Other">
                  Other / Collaboration
                </option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project and requirements..."
                value={form.message}
                onChange={handleChange}
                maxLength={3000}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>

            {status && (
              <p
                className="form-status"
                role="status"
                aria-live="polite"
                style={{
                  color: isSuccess ? "#22c55e" : undefined,
                }}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
