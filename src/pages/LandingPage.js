import React, { useState } from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleTouch = () => {
    setFadeOut(true); // Trigger fade-out animation
    setTimeout(() => {
      window.location.href = "/home"; // Navigate to main page after animation
    }, 1000); // Match the duration of the fade-out animation
  };

  return (
    <div
      className={`landing-container ${fadeOut ? "fade-out" : ""}`}
      onClick={handleTouch}
    >
      <div className="landing-content">
        <div className="landing-logo">
            {/* <h1>K</h1><h1 className="landing-logo-3">3</h1><h1 className="landing-logo-1">1</h1><h1 className="landing-logo-7">7</h1><h1>IN</h1> */}
            <h1>K317IN</h1>
            </div>
        <p>The journey into my world.</p>
      </div>

      <div className="landing-content2">
      <p>TOUCH ANYWHERE TO START</p>
      </div>
    </div>
  );
};

export default LandingPage;