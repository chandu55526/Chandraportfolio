import "./SystemDesign.scss";
import {projectsSection} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Projects() {
  if (!projectsSection.display) {
    return null;
  }
  return (
    <div id="projects">
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id="achievements">
          <div className="achievement-main-div">
            <div className="achievement-header">
              <h1 className="heading achievement-heading">
                {projectsSection.title}
              </h1>
              <p className="subTitle achievement-subtitle">
                {projectsSection.subtitle}
              </p>
            </div>
            <div className="achievement-cards-div">
              {projectsSection.projects.map((project, i) => {
                return (
                  <div key={i} className="achievement-card">
                    <div className="achievement-img-div">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="achievement-img"
                      />
                    </div>
                    <div className="achievement-text-div">
                      <h5 className="achievement-text-heading">
                        {project.projectName}
                      </h5>
                      <p className="achievement-text-subtitle">
                        {project.projectDesc}
                      </p>
                      {project.footerLinks && (
                        <div className="achievement-links">
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