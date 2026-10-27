
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  Rocket,
  Globe2,
} from "lucide-react";

import Hero3D from "../components/Hero3D";
import { CTA, FeatureCard } from "./shared";

export default function Home() {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={15} />
              Technology • Innovation • Growth
            </div>

            <h1>
              Building the
              <br />
              <span>Future Together.</span>
            </h1>

            <p>
              Welcome to THE REALM — where creativity,
              artificial intelligence and technology
              come together to turn ambitious ideas
              into meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <Link
                to="/services"
                className="btn btn-primary"
              >
                Explore Services
                <ArrowUpRight size={19} />
              </Link>

              <Link
                to="/projects"
                className="btn btn-outline"
              >
                View Our Work
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-line" />
              <span>
                Innovate. Collaborate. Grow.
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <Hero3D />
          </div>
        </div>
      </section>

      <section className="section realm-home-highlights">
        <div className="container">
          <div className="section-heading realm-reveal">
            <span className="eyebrow">
              WHY THE REALM
            </span>

            <h2>
              Where Ideas Become Possibilities.
            </h2>

            <p>
              We bring a practical, curious and
              collaborative approach to digital
              challenges.
            </p>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={BrainCircuit}
              title="Intelligent Thinking"
              description="AI-informed ideas focused on real problems."
            />

            <FeatureCard
              icon={Rocket}
              title="Built for Progress"
              description="Thoughtful solutions that can evolve with your needs."
              delay={130}
            />

            <FeatureCard
              icon={Globe2}
              title="Human Collaboration"
              description="Technology works best when people build together."
              delay={260}
            />
          </div>

          <div className="realm-centered-link realm-reveal">
            <Link
              to="/about"
              className="text-link"
            >
              Discover Our Story
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <CTA
        title="Your Next Big Idea Starts Here."
        description="Explore what we can create together — from AI and automation to digital experiences."
      />
    </>
  );
}
