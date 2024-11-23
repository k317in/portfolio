import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Your journey into my world of web development starts here.</p>
        <button
          className="landing-button"
          onClick={() => (window.location.href = "/home")}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default LandingPage;