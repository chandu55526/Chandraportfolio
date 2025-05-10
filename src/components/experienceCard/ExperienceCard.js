import React from "react";
import { Fade } from "react-reveal";
import "./ExperienceCard.scss";

const ExperienceCard = ({ cardInfo, isDark }) => {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "experience-card-dark" : "experience-card"}>
        {cardInfo.companylogo && (
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={cardInfo.companylogo}
              alt={cardInfo.company}
            />
          </div>
        )}
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-head-left">
              <h3
                className={
                  isDark ? "experience-card-title-dark" : "experience-card-title"
                }
              >
                {cardInfo.company}
              </h3>
              <h3
                className={
                  isDark
                    ? "experience-card-subtitle-dark"
                    : "experience-card-subtitle"
                }
              >
                {cardInfo.role}
              </h3>
            </div>
            <div className="experience-card-head-right">
              <h3
                className={
                  isDark
                    ? "experience-card-duration-dark"
                    : "experience-card-duration"
                }
              >
                {cardInfo.date}
              </h3>
            </div>
          </div>
          <p
            className={
              isDark
                ? "experience-card-description-dark"
                : "experience-card-description"
            }
          >
            {cardInfo.desc}
          </p>
          <ul>
            {cardInfo.descBullets
              ? cardInfo.descBullets.map((item, i) => (
                  <li
                    key={i}
                    className={
                      isDark
                        ? "subTitle experience-card-bullet-dark"
                        : "subTitle experience-card-bullet"
                    }
                  >
                    {item}
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </Fade>
  );
};

export default ExperienceCard;
