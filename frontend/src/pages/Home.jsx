
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  BrainCircuit,
  Rocket,
  Globe2,
} from "lucide-react";

const Hero3D = lazy(() => import("../components/Hero3D"));

import { CTA, FeatureCard } from "./Shared";
import usePageMeta from "../usePageMeta";

export default function Home() {
  usePageMeta({
    title: "THE REALM | AI Solutions, Automation & Web Development",
    description:
      "THE REALM helps businesses grow worldwide with AI solutions, intelligent automation and professional web development. Explore our digital services.",
  });

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
              AI Solutions, Automation & Web Development
              <br />
              <span>Building the Future Together.</span>
            </h1>

            <p>
              Welcome to THE REALM — your technology partner
              for artificial intelligence, intelligent automation
              and professional web development. We bring creativity
              and technology together to turn ambitious ideas
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
            <Suspense
              fallback={
                <div
                  className="hero-3d-container"
                  aria-label="Loading 3D experience"
                />
              }
            >
              <Hero3D />
            </Suspense>
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
              Technology Solutions Designed for Growth
            </h2>

            <p>
              We combine innovative thinking, practical technology
              and human collaboration to help businesses explore
              new possibilities and solve real digital challenges.
            </p>
          </div>

          <div className="realm-features-grid">
            <FeatureCard
              icon={BrainCircuit}
              title="Intelligent AI Solutions"
              description="Explore AI-powered approaches that help address real business challenges."
            />

            <FeatureCard
              icon={Rocket}
              title="Smart Automation"
              description="Discover automation opportunities that can simplify workflows and support business progress."
              delay={130}
            />

            <FeatureCard
              icon={Globe2}
              title="Professional Web Development"
              description="Build meaningful digital experiences through thoughtful and modern web solutions."
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
        description="Explore what we can create together — from AI solutions and automation to professional web development."
      />
    </>
  );
}
