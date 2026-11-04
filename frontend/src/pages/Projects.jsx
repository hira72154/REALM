
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { PageIntro } from "./Shared";
import usePageMeta from "../usePageMeta";

const projects = [
  {
    category: "AUTOMATION",
    title: "N8N File Automation",
    description:
      "An n8n file automation project designed to streamline file-processing workflows and reduce repetitive manual tasks.",
    className: "project-cyan",
    symbol: "⚡",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/n8n-file-automation",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "IQ Web Project",
    description:
      "A web development project showcasing practical website development and digital interface implementation.",
    className: "project-purple",
    symbol: "</>",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Web_Project",
  },
  {
    category: "CYBERSECURITY",
    title: "SOC-Aid",
    description:
      "A cybersecurity project exploring security operations support and approaches to security-related challenges.",
    className: "project-blue",
    symbol: "SOC",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/SOC-Aid",
  },
  {
    category: "AI/ML",
    title: "AI/ML Internship Projects",
    description:
      "A collection of practical artificial intelligence and machine learning projects developed through internship tasks.",
    className: "project-blue",
    symbol: "AI",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/AI_ML_Internship",
  },
  {
    category: "AI/ML",
    title: "Decode Labs Tasks",
    description:
      "Practical AI development tasks exploring intelligent applications and AI-powered tools.",
    className: "project-purple",
    symbol: "DL",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/decodelabs_tasks",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "IQ Internship 241",
    description:
      "A collection of web development and programming tasks completed as part of an internship.",
    className: "project-cyan",
    symbol: "</>",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Intern_241",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Cup and Comfort",
    description:
      "A themed website project focused on presenting a product concept and creating a dedicated online brand experience.",
    className: "project-purple",
    symbol: "C&C",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Intern_241-cup_and_comfort-",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Scentoria",
    description:
      "A fragrance-themed website project featuring a dedicated product presentation and brand-focused digital experience.",
    className: "project-purple",
    symbol: "S",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/scentoriaaaaaa",
  },
  {
    category: "CYBERSECURITY",
    title: "Vulnerability Triage Agent",
    description:
      "An AI-oriented cybersecurity project focused on organizing and prioritizing vulnerability findings.",
    className: "project-blue",
    symbol: "VT",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Vulnerability_Triage_Agent",
  },
  {
    category: "AUTOMATION",
    title: "Universal CSV Automation",
    description:
      "A CSV automation project that processes data files, cleans records, removes duplicates and generates structured output.",
    className: "project-cyan",
    symbol: "CSV",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/universal-csv-automation",
  },
  {
    category: "AI/ML",
    title: "Decode Labs",
    description:
      "An artificial intelligence project collection featuring chatbot, image-generation and content-writing applications.",
    className: "project-purple",
    symbol: "AI",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Decode_labs",
  },
  {
    category: "AI/ML",
    title: "Inquisitors AI",
    description:
      "An AI development project featuring chatbot and interview-system applications.",
    className: "project-blue",
    symbol: "IQ",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Inquisitors_AI",
  },
  {
    category: "AI/ML",
    title: "IQ Internship 260",
    description:
      "An internship repository containing practical programming and technology development work.",
    className: "project-cyan",
    symbol: "260",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/IQ_intern_260",
  },
];

const filters = [
  "ALL",
  "AI/ML",
  "AUTOMATION",
  "WEB DEVELOPMENT",
  "CYBERSECURITY",
];

export default function Projects() {
  usePageMeta({
    title: "AI, Automation & Web Development Projects | THE REALM",
    description:
      "Explore THE REALM's project portfolio featuring artificial intelligence, machine learning, workflow automation, web development and cybersecurity projects with GitHub links.",
  });

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "ALL" ||
      project.category === activeFilter
  );

  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  function changeFilter(filter) {
    setActiveFilter(filter);
    setShowAll(false);
  }

  return (
    <>
      <PageIntro
        eyebrow="OUR PROJECT PORTFOLIO"
        title="Explore Our Technology Projects"
        description="Discover practical projects across artificial intelligence, machine learning, workflow automation, web development and cybersecurity. Explore our work and visit the linked GitHub repositories."
      />

      <section
        className="section projects-section"
        aria-label="Artificial intelligence, automation, web development and cybersecurity projects"
      >
        <div className="container">
          <div
            className="projects-filters realm-reveal"
            aria-label="Filter projects by category"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`project-filter ${
                  filter === activeFilter ? "active" : ""
                }`}
                aria-pressed={filter === activeFilter}
                onClick={() => changeFilter(filter)}
              >
                {filter === "ALL" ? "All Projects" : filter}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <article
                key={project.link}
                className="project-card realm-reveal"
                style={{
                  "--reveal-delay": `${(index % 3) * 120}ms`,
                }}
              >
                <div
                  className={`project-visual ${project.className}`}
                  aria-hidden="true"
                >
                  <div className="project-symbol">
                    {project.symbol}
                  </div>

                  <div className="project-visual-circle" />
                </div>

                <div className="project-info">
                  <span>{project.category}</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <p className="project-owner">
                    By {project.owner}
                  </p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} GitHub repository`}
                  >
                    View on GitHub
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length > 6 && (
            <div className="projects-view-all">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() =>
                  setShowAll((previous) => !previous)
                }
              >
                {showAll
                  ? "Show Featured Projects"
                  : "View All Projects"}

                <ArrowRight size={18} />
              </button>
            </div>
          )}

          <p className="projects-note">
            Explore our work and technical implementations
            through the linked GitHub repositories.
          </p>
        </div>
      </section>
    </>
  );
}
