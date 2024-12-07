import React from "react";
import "./AboutPage.css";
import SwipeBackground from "../SwipeBackground";

const AboutPage = () => {
  return (
    <SwipeBackground>
    <div className="aboutpage-container">
    <div className="page">
      <h1>About Me</h1>
      <p>I am a web developer specializing in React and modern web technologies.</p>
    </div>
    </div>
    </SwipeBackground>
  );
};

export default AboutPage;