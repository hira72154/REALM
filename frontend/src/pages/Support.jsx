
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
    title: "Customer Support & Project Inquiries | THE REALM",
    description:
      "Get in touch with THE REALM for project inquiries, AI solutions, automation services, web development questions and business collaboration. Submit an inquiry online anytime.",
  });

  return (
    <>
      <PageIntro
        eyebrow="CUSTOMER SUPPORT & INQUIRIES"
        title="We're Here to Help You Move Forward."
        description="Have a question about our AI solutions, automation services or web development? Share your project requirements or inquiry through our online contact form whenever convenient."
      />

      <section
        className="section"
        aria-label="Contact and inquiry availability"
      >
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
                Our Online Contact Form Is Open 24/7
              </h2>

              <p>
                Submit your project brief, business requirements
                or questions at any time. Our team reviews
                inquiries and responds according to availability.
                Immediate live support is not currently promised.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-label="Customer support and project inquiry options"
      >
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              HOW WE CAN HELP
            </span>

            <h2>
              Support for Your Projects and Business Needs
            </h2>

            <p>
              Whether you are exploring a technology solution
              or already have a project in mind, share your
              questions and requirements with THE REALM.
            </p>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={MessageCircle}
              title="Project Questions"
              description="Ask about AI services, workflow automation, web development or potential technology collaborations."
            />

            <FeatureCard
              icon={ClipboardList}
              title="Requirement Review"
              description="Share your project brief, business goals and requirements so we can better understand your needs."
              delay={130}
            />

            <FeatureCard
              icon={Mail}
              title="Email Inquiries"
              description="Contact our team directly at therealm.international@gmail.com for project and business inquiries."
              delay={260}
            />

            <FeatureCard
              icon={Headphones}
              title="Follow-up Requests"
              description="Share additional information, updates or questions related to an existing project inquiry."
            />

            <FeatureCard
              icon={ShieldCheck}
              title="Clear Expectations"
              description="Discuss project scope, requirements, timelines and next steps before work begins."
              delay={130}
            />

            <FeatureCard
              icon={Clock3}
              title="Flexible Submission"
              description="Submit your contact form or project inquiry any day and at any time."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA
        title="Have a Question or Project Brief?"
        description="Tell us about your requirements through our contact page. Our team will review your inquiry and respond when available."
      />
    </>
  );
}
