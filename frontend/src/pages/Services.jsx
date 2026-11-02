
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
    title: "AI, Automation & Web Development Services | THE REALM",
    description:
      "Explore THE REALM's technology services, including artificial intelligence, workflow automation and responsive web development for practical digital needs.",
  });

  return (
    <>
      <PageIntro
        eyebrow="WHAT WE DO"
        title="Solutions Built for Tomorrow."
        description="Explore our technology services and discover how the right tools can support your next idea."
      />

      <section className="section services-section">
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

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <p className="realm-service-detail">
                    {service.detail}
                  </p>

                  <Link to="/contact">
                    Enquire About This Service
                    <ArrowUpRight size={17} />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2>From Concept to Creation.</h2>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={Search}
              title="01 · Discover"
              description="Understand your goals, audience and challenges."
            />

            <FeatureCard
              icon={Wrench}
              title="02 · Build"
              description="Design and develop the right practical solution."
              delay={130}
            />

            <FeatureCard
              icon={Rocket}
              title="03 · Improve"
              description="Test, refine and prepare for real use."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
