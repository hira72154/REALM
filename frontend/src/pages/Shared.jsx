
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export function PageIntro({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="realm-page-intro container realm-reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export function CTA({
  title = "Let's Create Something Extraordinary.",
  description =
    "Great things happen when ideas, people and technology come together.",
}) {
  return (
    <section className="cta-section realm-reveal">
      <div className="container">
        <div className="cta-box">
          <div className="cta-decoration" />

          <span>THE FUTURE STARTS HERE</span>

          <h2>{title}</h2>
          <p>{description}</p>

          <Link
            to="/contact"
            className="btn btn-white"
          >
            Start a Conversation
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <article
      className="realm-feature-card realm-reveal"
      style={{
        "--reveal-delay": `${delay}ms`,
      }}
    >
      <div className="service-icon">
        <Icon size={26} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
