import React, { useState, useEffect } from "react";
import { greeting, splashScreen } from "../portfolio";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Top from "./top/Top";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import SystemDesign from "./systemDesign/SystemDesign";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import SplashScreen from "./splashScreen/SplashScreen";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <main>
              <Top />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <SystemDesign />
              <Achievement />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
