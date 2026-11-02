
import { Link } from "react-router-dom";
import usePageMeta from "../usePageMeta";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy | THE REALM",
    description:
      "Read how THE REALM collects, uses, stores and protects information submitted through its website contact form.",
  });

  return (
    <section className="section">
      <div
        className="container realm-page-intro"
        style={{
          textAlign: "left",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <span className="eyebrow">YOUR PRIVACY</span>

        <h1>Privacy Policy</h1>

        <p>
          This policy explains how THE REALM handles
          information when you visit our website or
          contact us about our services.
        </p>

        <p>
          <strong>Last updated:</strong> October 28, 2026
        </p>

        <h2>1. Information We Collect</h2>
        <p>
          When you submit our contact form, we may collect
          your name, email address, selected service and
          message. Please avoid including passwords,
          financial details or other sensitive information
          in your message.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use the information you submit to review your
          inquiry, respond to you and understand which
          services you are interested in.
        </p>

        <h2>3. Storage and Retention</h2>
        <p>
          Contact form submissions are stored by our
          website backend. We aim to protect these records
          and retain them only for as long as reasonably
          necessary for the purposes described in this
          policy, subject to applicable legal requirements.
        </p>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not intend to sell your personal
          information. Information may need to be disclosed
          where required by law or used by service providers
          supporting our website, where applicable.
        </p>

        <h2>5. Cookies and Browser Storage</h2>
        <p>
          Our website stores your selected light or dark
          theme preference in your browser's local storage.
          This helps remember your display preference on
          future visits. This is separate from contact form
          submissions.
        </p>

        <h2>6. Security</h2>
        <p>
          We take reasonable technical steps to protect
          information handled by our website. However, no
          method of transmission or electronic storage can
          be guaranteed to be completely secure.
        </p>

        <h2>7. Your Requests</h2>
        <p>
          You can contact us to ask about your submitted
          information or request its correction or deletion.
          We will review such requests subject to applicable
          legal obligations and legitimate recordkeeping
          needs.
        </p>

        <h2>8. Third-Party Websites</h2>
        <p>
          Our website may link to external websites. Their
          privacy practices are governed by their own
          policies, which we encourage you to review.
        </p>

        <h2>9. Policy Updates</h2>
        <p>
          We may update this policy as our website or
          practices change. Any revised version will be
          published on this page with an updated date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For privacy-related questions, email us at{" "}
          <a href="mailto:therealm.international@gmail.com">
            therealm.international@gmail.com
          </a>.
        </p>

        <p>
          <Link to="/">Return to the REALM homepage</Link>
        </p>
      </div>
    </section>
  );
}
