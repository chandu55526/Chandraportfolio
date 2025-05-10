import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          <h1 className="talk-header-title">{talkSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          {talkSection.projects.map((project, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: project.projectName,
                  subtitle: project.projectDesc,
                  slides_url: project.image,
                  event_url: project.footerLink[0].url,
                  image: project.image,
                  isDark
                }}
              />
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
