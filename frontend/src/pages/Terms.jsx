
import { Link } from "react-router-dom";
import usePageMeta from "../usePageMeta";

export default function Terms() {
  usePageMeta({
    title: "Terms & Conditions | THE REALM",
    description:
      "Read the Terms and Conditions governing the use of THE REALM website, services, content and project inquiries.",
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
        <span className="eyebrow">WEBSITE TERMS</span>

        <h1>Terms & Conditions</h1>

        <p>
          Welcome to THE REALM. These Terms and Conditions
          explain the basic rules for accessing and using
          our website. By using this website, you agree
          to these terms.
        </p>

        <p>
          <strong>Last updated:</strong> November 4, 2026
        </p>

        <h2>1. About THE REALM</h2>
        <p>
          THE REALM provides information about technology,
          artificial intelligence, automation, software
          development and related digital services through
          this website.
        </p>

        <h2>2. Use of This Website</h2>
        <p>
          You agree to use this website only for lawful
          purposes. You must not attempt to damage,
          disrupt, misuse or gain unauthorized access to
          the website or its systems.
        </p>

        <h2>3. Services and Project Inquiries</h2>
        <p>
          Information about our services is provided for
          general guidance. Submitting a contact form or
          inquiry does not automatically create a service
          agreement, partnership or contractual obligation.
          Any project engagement will be subject to
          separately agreed terms.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          Unless otherwise stated, the website's text,
          branding, design elements and original content
          belong to THE REALM or their respective owners.
          You may not reproduce, distribute or commercially
          use such material without appropriate permission.
        </p>

        <h2>5. User Submissions</h2>
        <p>
          When submitting information through our contact
          form, you confirm that the information you provide
          is accurate and that you have the right to share
          it. Please do not submit confidential passwords
          or sensitive financial information.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our website may contain links to third-party
          websites and services. We do not control those
          websites and are not responsible for their
          content, availability or policies.
        </p>

        <h2>7. Website Availability</h2>
        <p>
          We aim to keep our website accessible and
          functioning properly. However, we do not guarantee
          uninterrupted availability or error-free operation.
          Maintenance and technical issues may occasionally
          affect access.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          Website content is provided for general
          informational purposes. While we make reasonable
          efforts to keep information accurate, we do not
          guarantee that all content is complete, current
          or suitable for every purpose.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the extent permitted by applicable law,
          THE REALM will not be responsible for losses
          arising from the use of this website or reliance
          on its general informational content.
        </p>

        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms and Conditions when
          our website, services or practices change.
          Updated terms will be published on this page
          with a revised date.
        </p>

        <h2>11. Applicable Law</h2>
        <p>
          These terms are subject to applicable laws.
          Any specific legal rights and obligations will
          be interpreted in accordance with the laws
          applicable to the relevant parties and engagement.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about these terms, contact
          us at{" "}
          <a href="mailto:therealm.international@gmail.com">
            therealm.international@gmail.com
          </a>.
        </p>

        <p>
          <Link to="/">Return to the THE REALM homepage</Link>
        </p>
      </div>
    </section>
  );
}
