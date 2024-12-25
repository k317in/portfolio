import React, { useContext, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BackgroundContext } from "./BackgroundContext";
import { getContrastColor } from "./utils"; 

const SwipeBackground = ({ children }) => {
  const { currentIndex, setBackground, backgroundInfo } = useContext(BackgroundContext);
  const [startX, setStartX] = useState(null);

  const handleSwipe = (direction) => {
    const newIndex =
      direction === "left"
        ? (currentIndex + 1) % 3
        : (currentIndex - 1 + 3) % 3;
    setBackground(newIndex);
  };

  const onMouseDown = (e) => {
    setStartX(e.clientX);
  };

  const onMouseUp = (e) => {
    if (startX === null) return;

    const endX = e.clientX;
    const diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      handleSwipe(diffX > 0 ? "left" : "right");
    }

    setStartX(null);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    preventScrollOnSwipe: true,
    delta: 10,
  });

  const fontColor = backgroundInfo.fontColor || getContrastColor(backgroundInfo.color || "#FFFFFF");

  const backgroundPosition = backgroundInfo.backgroundPosition;

  return (
    <div
      {...swipeHandlers}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: backgroundInfo.color,
        backgroundImage: `url(${backgroundInfo.backgroundImage})`,
        backgroundSize: "cover", // Adjust to "contain" if needed
        backgroundPosition: backgroundPosition,
        color: fontColor,
        transition: "background-color 0.5s ease",
        overflow: "hidden",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
      }}>
        {/* {backgroundInfo.video && (
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
      )} */}
      {children}
    </div>
  );
};

export default SwipeBackground;