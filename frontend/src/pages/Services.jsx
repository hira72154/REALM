
import { Link } from "react-router-dom";
import {
  BrainCircuit,
  Code2,
  Database,
  Layers3,
  Globe2,
  ShieldCheck,
  ArrowUpRight,
  Search,
  Wrench,
  Rocket,
} from "lucide-react";

import {
  PageIntro,
  CTA,
  FeatureCard,
} from "./shared";

export const services = [
  {
    icon: BrainCircuit,
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Intelligent solutions designed to automate workflows and solve real-world challenges.",
    detail:
      "AI assistants, practical machine-learning prototypes and AI-enabled business workflows.",
  },
  {
    icon: Code2,
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive and scalable websites built for seamless digital experiences.",
    detail:
      "Business websites, portfolios, interactive interfaces and responsive frontends.",
  },
  {
    icon: Database,
    number: "03",
    title: "Automation Solutions",
    description:
      "Smart workflow automation that reduces repetitive tasks and improves productivity.",
    detail:
      "Data-processing pipelines, workflow integrations and routine task automation.",
  },
  {
    icon: Layers3,
    number: "04",
    title: "Software Solutions",
    description:
      "Custom digital tools and applications designed around business requirements.",
    detail:
      "Small business tools, prototypes and tailored software interfaces.",
  },
  {
    icon: Globe2,
    number: "05",
    title: "Digital Experiences",
    description:
      "Interactive interfaces combining thoughtful design and modern technology.",
    detail:
      "Creative landing pages, 3D experiences and user-focused digital presentation.",
  },
  {
    icon: ShieldCheck,
    number: "06",
    title: "Technical Consulting",
    description:
      "Helping organizations explore practical technology and AI opportunities.",
    detail:
      "Technology discovery, feasibility conversations and solution planning.",
  },
];

export default function Services() {
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
