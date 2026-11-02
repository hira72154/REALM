
import {
  Clock3,
  Mail,
  MessageCircle,
  ClipboardList,
  ShieldCheck,
  Headphones,
} from "lucide-react";

import {
  PageIntro,
  CTA,
  FeatureCard,
} from "./Shared";

import usePageMeta from "../usePageMeta";

export default function Support() {
  usePageMeta({
    title: "Support & Project Inquiries | THE REALM",
    description:
      "Contact THE REALM for project questions, requirements and follow-up inquiries. Submit your message through our online contact form at any time.",
  });

  return (
    <>
      <PageIntro
        eyebrow="24/7 SERVICES"
        title="Reach Out Whenever Inspiration Strikes."
        description="Submit a project inquiry at any time. Our online contact form is available around the clock; personal replies depend on team availability."
      />

      <section className="section">
        <div className="container">
          <div className="realm-support-banner realm-reveal">
            <div className="realm-support-icon">
              <Clock3 size={38} />
            </div>

            <div>
              <span className="eyebrow">
                ALWAYS-AVAILABLE INQUIRIES
              </span>

              <h2>
                Our contact form is open 24/7.
              </h2>

              <p>
                Send your requirements, project brief
                or question whenever convenient. We
                will respond as availability allows;
                immediate live support is not
                currently promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              HOW WE CAN HELP
            </span>

            <h2>Support for Your Next Step.</h2>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={MessageCircle}
              title="Project Questions"
              description="Ask about a service, approach or possible collaboration."
            />

            <FeatureCard
              icon={ClipboardList}
              title="Requirement Review"
              description="Share a brief outlining what you want to build."
              delay={130}
            />

            <FeatureCard
              icon={Mail}
              title="Email Inquiries"
              description="Write to therealm.international@gmail.com."
              delay={260}
            />

            <FeatureCard
              icon={Headphones}
              title="Follow-up Requests"
              description="Send updates or additional details about an inquiry."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Clear Expectations"
              description="Discuss scope, timing and next steps before work begins."
              delay={130}
            />

            <FeatureCard
              icon={Clock3}
              title="Flexible Submission"
              description="Send an inquiry any day, at any hour."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA
        title="Have a Question or a Project Brief?"
        description="Send it through our contact page and we will get back to you when available."
      />
    </>
  );
}
