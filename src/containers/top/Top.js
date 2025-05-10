import React, { useContext } from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson.json";
import StyleContext from "../../contexts/StyleContext";
import "./Top.scss";

const Top = () => {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              {" "}
              {greeting.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <div className="button-greeting-div">
              <a className="main-button" href="#contact">
                Contact Me
              </a>
              <a className="main-button" href="#skills">
                See my Skills
              </a>
            </div>
          </div>
          <div className="greeting-image-div">
            <DisplayLottie animationData={landingPerson} />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Top; 