import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({project, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className={isDark ? "dark-mode project-card" : "project-card"}>
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} className="card-image" />
        </div>
      )}
      <div className="project-detail">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {project.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {project.description}
        </p>
        {project.footer && (
          <div className="project-card-footer">
            {project.footer.map((link, i) => (
              <span
                key={i}
                className={isDark ? "dark-mode project-tag" : "project-tag"}
                onClick={() => openUrlInNewTab(link.url, link.name)}
              >
                {link.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 