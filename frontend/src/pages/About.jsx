
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
} from "./Shared";

import usePageMeta from "../usePageMeta";

export default function About() {
  usePageMeta({
    title: "About THE REALM | AI, Technology & Innovation",
    description:
      "Discover THE REALM, a technology-focused company exploring artificial intelligence, business automation and web development to create practical digital solutions for businesses worldwide.",
  });

  return (
    <>
      <PageIntro
        eyebrow="ABOUT THE REALM"
        title="More Than Technology. A Vision for Growth."
        description="THE REALM brings together artificial intelligence, software development, automation and digital innovation to explore ideas and create meaningful technology solutions for businesses worldwide."
      />

      <section
        className="section about-section"
        aria-label="About THE REALM"
      >
        <div className="container about-grid">
          <div className="about-visual realm-reveal">
            <div className="about-card">
              <div className="about-card-icon">
                <Sparkles size={35} />
              </div>

              <h3>Ideas into Impact.</h3>

              <p>
                Combining artificial intelligence,
                innovation and technology to create
                meaningful digital experiences.
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
              THE REALM is a technology-focused company
              exploring artificial intelligence, software
              development, business automation and digital
              innovation to address practical challenges.
            </p>

            <p>
              We believe meaningful technology begins with
              understanding real needs. Our approach focuses
              on learning, experimentation, collaboration
              and thoughtful development to turn ideas into
              useful digital solutions.
            </p>

            <p>
              From AI-powered applications and automated
              workflows to modern web experiences, we explore
              opportunities where technology can support
              business growth and innovation.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section realm-values"
        aria-label="THE REALM mission, vision and values"
      >
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              OUR DIRECTION
            </span>

            <h2>
              Our Mission, Vision and Values
            </h2>

            <p>
              The principles that guide our approach
              to technology, innovation and collaboration.
            </p>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={Target}
              title="Our Mission"
              description="Explore and develop practical technology solutions that address real challenges and create meaningful value."
            />

            <FeatureCard
              icon={Lightbulb}
              title="Our Vision"
              description="Contribute to a future where artificial intelligence, creativity and technology open new possibilities for growth."
              delay={130}
            />

            <FeatureCard
              icon={Users}
              title="Our Values"
              description="Build on curiosity, responsibility, collaboration, transparency and continuous learning."
              delay={260}
            />

            <FeatureCard
              icon={Rocket}
              title="Innovation"
              description="Explore emerging technologies and practical ideas with a problem-solving mindset."
            />

            <FeatureCard
              icon={Globe2}
              title="Collaboration"
              description="Bring together different perspectives to develop thoughtful digital experiences and solutions."
              delay={130}
            />

            <FeatureCard
              icon={Sparkles}
              title="Quality"
              description="Focus on useful outcomes, careful development and meaningful user experiences."
              delay={260}
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
