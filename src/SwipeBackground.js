import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const SwipeBackground = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    return parseInt(localStorage.getItem("backgroundIndex"), 10) || 0;
  });

  useEffect(() => {
    localStorage.setItem("backgroundIndex", currentIndex);
  }, [currentIndex]);

  const backgrounds = [
    "#1E90FF", // Blue
    "#FFD700", // Gold
    "#FF6347", // Tomato
    "#32CD32"  // Lime Green
  ];

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + backgrounds.length) % backgrounds.length
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div
      {...swipeHandlers}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backgrounds[currentIndex],
        color: "white",
        transition: "background-color 0.5s ease",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}
    >
      {children}
    </div>
  );
};

export default SwipeBackground;