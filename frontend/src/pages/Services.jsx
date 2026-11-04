
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Search,
  Wrench,
  Rocket,
} from "lucide-react";

import {
  PageIntro,
  CTA,
  FeatureCard,
} from "./Shared";

import usePageMeta from "../usePageMeta";
import { services } from "../data/services";

export default function Services() {
  usePageMeta({
    title: "AI & Automation Services | Web Development | THE REALM",
    description:
      "Discover THE REALM's AI solutions, intelligent workflow automation and professional web development services. Explore practical technology solutions for businesses worldwide.",
  });

  return (
    <>
      <PageIntro
        eyebrow="OUR TECHNOLOGY SERVICES"
        title="AI, Automation & Web Development Solutions"
        description="Explore THE REALM's technology services, from artificial intelligence and business process automation to professional web development. We help turn ideas into practical digital solutions."
      />

      <section
        className="section services-section"
        aria-label="Our technology services"
      >
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  className="service-card realm-reveal"
                  key={service.number}
                  style={{
                    "--reveal-delay": `${
                      (index % 3) * 140
                    }ms`,
                  }}
                >
                  <div className="service-top">
                    <div className="service-icon">
                      <Icon size={27} />
                    </div>

                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <h2>{service.title}</h2>

                  <p>{service.description}</p>

                  <p className="realm-service-detail">
                    {service.detail}
                  </p>

                  <Link
                    to="/contact"
                    aria-label={`Enquire about ${service.title}`}
                  >
                    Enquire About This Service
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-label="Our technology development process"
      >
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2>
              From Concept to Creation
            </h2>

            <p>
              Our approach focuses on understanding your
              requirements, developing practical technology
              solutions and continuously improving the results.
            </p>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={Search}
              title="01 · Discover"
              description="Understand your business goals, target audience, requirements and digital challenges."
            />

            <FeatureCard
              icon={Wrench}
              title="02 · Build"
              description="Plan, design and develop AI, automation or web solutions around your actual needs."
              delay={130}
            />

            <FeatureCard
              icon={Rocket}
              title="03 · Improve"
              description="Test, refine and improve solutions to prepare them for practical business use."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
