import React, { useState } from "react";
import "./projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "web" | "app";
  technologies: string[];
  image: string;
  liveLink?: string;
  githubLink?: string;
}

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "web" | "app">("all");

  const projectsData: Project[] = [
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website showcasing projects and skills with modern design principles.",
      category: "web",
      technologies: ["React", "TypeScript", "CSS3"],
      image: "/project-images/portfolio.jpg",
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Food Delivery App",
      description: "Mobile application for ordering food with real-time tracking.",
      category: "app",
      technologies: ["React Native", "Firebase", "Google Maps API"],
      image: "/project-images/food-delivery.jpg",
      liveLink: "#",
      githubLink: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
  ] as const;

  const filtered =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section__title u-underline">My Projects</h2>
        <span className="section__subtitle">
          Here are some of the projects I've worked on
        </span>

        <div className="projects__filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`chip ${
                activeCategory === cat.id ? "is-active" : ""
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project) => (
            <article key={project.id} className="card">
              <div className="card__media">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="card__overlay">
                  {project.liveLink && (
                    <a
                      className="button"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      className="button button--ghost"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </div>
              <div className="card__body">
                <h3 className="card__title">{project.title}</h3>
                <p className="card__desc">{project.description}</p>
                <div className="card__tags">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
