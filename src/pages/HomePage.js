import React, { useContext } from "react";
import "./HomePage.css";
import SwipeBackground from "../SwipeBackground";
import { BackgroundContext } from "../BackgroundContext";

const HomePage = () => {
  const { backgroundInfo } = useContext(BackgroundContext);

  return (
    <SwipeBackground>
      <div className="homepage-container">
        <div className="page">
          <h1>{backgroundInfo.title || "Loading..."}</h1>
          <p>{backgroundInfo.description || ""}</p>
        </div>
      </div>
    </SwipeBackground>
  );
};

export default HomePage;