
import { useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Send,
} from "lucide-react";

import { PageIntro } from "./shared";

const CONTACT_EMAIL =
  "therealm.international@gmail.com";

const API_URL =
  "http://localhost:5000/api/contact";

const emptyForm = {
  name: "",
  email: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [isSuccess, setIsSuccess] =
    useState(false);

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
          result.message ||
            "Unable to send your message."
        );
      }

      setStatus(
        result.message ||
          "Thank you! Your message has been received successfully."
      );

      setIsSuccess(true);
      setForm(emptyForm);
    } catch (error) {
      console.error(
        "Contact form error:",
        error
      );

      setStatus(
        error.message === "Failed to fetch"
          ? "Could not connect to the server. Make sure the backend is running."
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
        eyebrow="GET IN TOUCH"
        title="Have an Idea? Let's Build It."
        description="Tell us about your project or ask about a collaboration. We'd love to hear what you're working on."
      />

      <section className="section contact-section">
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
              Share your goals and we'll explore
              how technology can help.
            </p>

            {[
              "Tell us about your project",
              "Explore technology solutions",
              "Start a meaningful collaboration",
            ].map((text) => (
              <div
                className="contact-feature"
                key={text}
              >
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
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-email-link"
                >
                  {CONTACT_EMAIL}
                  <ArrowUpRight size={16} />
                </a>

                <span>
                  Click to write us an email
                </span>
              </div>
            </div>
          </div>

          <form
            className="contact-form realm-reveal"
            onSubmit={handleSubmit}
          >
            <h3>Send Us a Message</h3>

            <p>
              We'd love to hear what you're
              working on.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Your Name
                </label>

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
                <label htmlFor="email">
                  Email Address
                </label>

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
              <label htmlFor="service">
                Interested In
              </label>

              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">
                  Select a service
                </option>

                <option value="AI">
                  Artificial Intelligence
                </option>

                <option value="Web">
                  Web Development
                </option>

                <option value="Automation">
                  Automation
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
              <label htmlFor="message">
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
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
              {isSubmitting
                ? "Sending..."
                : "Send Message"}

              <Send size={18} />
            </button>

            {status && (
              <p
                className="form-status"
                role="status"
                aria-live="polite"
                style={{
                  color: isSuccess
                    ? "#22c55e"
                    : undefined,
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
