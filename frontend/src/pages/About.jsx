
import {
  Rocket,
  Globe2,
  Lightbulb,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

import {
  PageIntro,
  CTA,
  FeatureCard,
} from "./shared";

export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="WHO WE ARE"
        title="More Than Technology. A Vision for Growth."
        description="THE REALM is a technology-focused initiative driven by curiosity, collaboration and a belief in turning ideas into meaningful solutions."
      />

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-visual realm-reveal">
            <div className="about-card">
              <div className="about-card-icon">
                <Sparkles size={35} />
              </div>

              <h3>Ideas into Impact.</h3>

              <p>
                Combining innovation, technology
                and a passion for progress.
              </p>

              <div className="about-decoration">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>

          <div className="about-content realm-reveal">
            <span className="eyebrow">
              OUR STORY
            </span>

            <h2>
              Exploring What
              <span> Comes Next.</span>
            </h2>

            <p>
              We explore artificial intelligence,
              software development, automation and
              digital innovation to solve practical
              challenges.
            </p>

            <p>
              Our approach is rooted in learning,
              experimentation and teamwork. Every
              project is an opportunity to create
              something useful and improve how
              people interact with technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section realm-values">
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              OUR DIRECTION
            </span>

            <h2>What Drives Us.</h2>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="Develop practical technology solutions that create real value."
            />

            <FeatureCard
              icon={Lightbulb}
              title="Our Vision"
              description="A future where creativity and technology make progress accessible."
              delay={130}
            />

            <FeatureCard
              icon={Users}
              title="Our Values"
              description="Curiosity, responsibility, collaboration and continuous learning."
              delay={260}
            />

            <FeatureCard
              icon={Rocket}
              title="Innovation"
              description="Explore emerging possibilities with a problem-solving mindset."
            />

            <FeatureCard
              icon={Globe2}
              title="Collaboration"
              description="Build stronger ideas through diverse perspectives."
              delay={130}
            />

            <FeatureCard
              icon={Sparkles}
              title="Quality"
              description="Care about useful outcomes and thoughtful experiences."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
