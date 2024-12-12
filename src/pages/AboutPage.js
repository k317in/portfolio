import React, { useContext } from "react";
import "./AboutPage.css";
import SwipeBackground from "../SwipeBackground";
import { BackgroundContext } from "../BackgroundContext";

const AboutPage = () => {
    const { backgroundInfo } = useContext(BackgroundContext);

  return (
    <SwipeBackground>
      <div className="aboutpage-container">
        <div className="page">
        <h1>{backgroundInfo.title || "Loading..."}</h1>
        <p>{backgroundInfo.about || ""}</p>
        </div>
      </div>
    </SwipeBackground>
  );
};

export default AboutPage;