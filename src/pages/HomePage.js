import React from "react";
import "./HomePage.css";
import SwipeBackground from "../SwipeBackground";

const HomePage = () => {
  return (
    <SwipeBackground>
      <div className="homepage-container">
        <div className="page">
          <h1>Welcome to My Portfolio</h1>
          <p>This is the home page of my portfolio website.</p>
        </div>
      </div>
    </SwipeBackground>
  );
};

export default HomePage;