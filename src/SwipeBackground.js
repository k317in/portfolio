import React, { useContext } from "react";
import { useSwipeable } from "react-swipeable";
import { BackgroundContext } from "./BackgroundContext";
import { getContrastColor } from "./utils"; 

const SwipeBackground = ({ children }) => {
  const { currentIndex, setBackground, backgroundInfo } = useContext(BackgroundContext);

  const handleSwipe = (direction) => {
    const newIndex =
      direction === "left"
        ? (currentIndex + 1) % 4
        : (currentIndex - 1 + 4) % 4;
    setBackground(newIndex);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  const fontColor = backgroundInfo.fontColor || getContrastColor(backgroundInfo.color || "#FFFFFF");

  return (
    <div
      {...swipeHandlers}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backgroundInfo.color,
        backgroundImage: `url(${backgroundInfo.backgroundImage})`,
        backgroundSize: "cover", // Adjust to "contain" if needed
        backgroundPosition: "left",
        color: fontColor,
        transition: "background-color 0.5s ease",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
        {backgroundInfo.video && (
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            objectFit: "cover",
            zIndex: -1
          }}
          src={backgroundInfo.video}
        ></video>
      )}
      {children}
    </div>
  );
};

export default SwipeBackground;