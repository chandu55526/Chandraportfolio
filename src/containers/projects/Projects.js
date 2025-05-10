import "./Projects.scss";
import {projectsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Projects() {
  if (!projectsSection.display) {
    return null;
  }
  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="projects">
          <div className="projects-main-div">
            <div className="projects-header">
              <h1 className="heading projects-heading">
                {projectsSection.title}
              </h1>
              <p className="subTitle projects-subtitle">
                {projectsSection.subtitle}
              </p>
            </div>
            <div className="projects-cards-div">
              {projectsSection.projects.map((project, i) => {
                return (
                  <div key={i} className="project-card">
                    <div className="project-img-div">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-img"
                      />
                    </div>
                    <div className="project-text-div">
                      <h5 className="project-text-heading">
                        {project.projectName}
                      </h5>
                      <p className="project-text-subtitle">
                        {project.projectDesc}
                      </p>
                      {project.footerLinks && (
                        <div className="project-links">
                          {project.footerLinks.map((link, i) => {
                            return (
                              <a
                                key={i}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {link.name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
} 