
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
      "Automates file-processing workflows to reduce repetitive manual tasks.",
    className: "project-cyan",
    symbol: "⚡",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/n8n-file-automation",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "IQ Web Project",
    description:
      "A web development project showcasing practical website development skills.",
    className: "project-purple",
    symbol: "</>",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Web_Project",
  },
  {
    category: "CYBERSECURITY",
    title: "SOC-Aid",
    description:
      "A cybersecurity-focused project exploring security operations support.",
    className: "project-blue",
    symbol: "SOC",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/SOC-Aid",
  },
  {
    category: "AI/ML",
    title: "AI/ML Internship Projects",
    description:
      "A collection of practical projects related to artificial intelligence and machine learning.",
    className: "project-blue",
    symbol: "AI",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/AI_ML_Internship",
  },
  {
    category: "AI/ML",
    title: "Decode Labs Tasks",
    description:
      "Practical development tasks exploring AI tools and intelligent applications.",
    className: "project-purple",
    symbol: "DL",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/decodelabs_tasks",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "IQ Internship 241",
    description:
      "A collection of internship tasks and development work.",
    className: "project-cyan",
    symbol: "</>",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Intern_241",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Cup and Comfort",
    description:
      "A themed web project focused on presenting a product or brand online.",
    className: "project-purple",
    symbol: "C&C",
    owner: "Noor Alishba Sajid",
    link: "https://github.com/noor-alishba/IQ_Intern_241-cup_and_comfort-",
  },
  {
    category: "WEB DEVELOPMENT",
    title: "Scentoria",
    description:
      "A fragrance-themed website with a dedicated product and brand experience.",
    className: "project-purple",
    symbol: "S",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/scentoriaaaaaa",
  },
  {
    category: "CYBERSECURITY",
    title: "Vulnerability Triage Agent",
    description:
      "An AI-oriented security project focused on organizing and prioritizing vulnerability findings.",
    className: "project-blue",
    symbol: "VT",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Vulnerability_Triage_Agent",
  },
  {
    category: "AUTOMATION",
    title: "Universal CSV Automation",
    description:
      "Processes CSV files, cleans records, removes duplicates and generates structured output.",
    className: "project-cyan",
    symbol: "CSV",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/universal-csv-automation",
  },
  {
    category: "AI/ML",
    title: "Decode Labs",
    description:
      "An AI project collection featuring chatbot, image-generation and content-writing tools.",
    className: "project-purple",
    symbol: "AI",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Decode_labs",
  },
  {
    category: "AI/ML",
    title: "Inquisitors AI",
    description:
      "An AI project collection featuring chatbot and interview-system development.",
    className: "project-blue",
    symbol: "IQ",
    owner: "Hira Nadeem",
    link: "https://github.com/hira72154/Inquisitors_AI",
  },
  {
    category: "AI/ML",
    title: "IQ Internship 260",
    description:
      "An internship repository containing practical development work.",
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
    title: "Projects & Portfolio | THE REALM",
    description:
      "Explore projects across artificial intelligence, machine learning, automation, web development and cybersecurity, with links to their GitHub repositories.",
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
        eyebrow="OUR PORTFOLIO"
        title="Ideas We're Exploring."
        description="Browse projects across AI, automation, web development and cybersecurity."
      />

      <section className="section projects-section">
        <div className="container">
          <div className="projects-filters realm-reveal">
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
                    aria-label={`View ${project.title} on GitHub`}
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
            Explore our work through the linked
            GitHub repositories.
          </p>
        </div>
      </section>
    </>
  );
}
