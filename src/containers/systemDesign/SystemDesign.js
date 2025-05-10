import React, {useContext} from "react";
import "./SystemDesign.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {systemDesignSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function SystemDesign() {
  const {isDark} = useContext(StyleContext);
  if (!systemDesignSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="system-design">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {systemDesignSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {systemDesignSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {systemDesignSection.projects.map((project, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: project.projectName,
                    description: project.projectDesc,
                    image: project.image,
                    footer: project.footerLinks
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
} 