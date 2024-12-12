import React, { createContext, useState, useEffect } from "react";

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const savedIndex = localStorage.getItem("currentIndex");
    return savedIndex ? parseInt(savedIndex, 10) : 0;
  });
  const [backgrounds, setBackgrounds] = useState([]);

  useEffect(() => {
    // Fetch the JSON file
    fetch("/backgrounds.json")
      .then((response) => response.json())
      .then((data) => setBackgrounds(data))
      .catch((error) => console.error("Error loading backgrounds:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  const setBackground = (index) => {
    setCurrentIndex(index);
  };

  const backgroundInfo = backgrounds[currentIndex] || {};

  return (
    <BackgroundContext.Provider value={{ currentIndex, setBackground, backgroundInfo }}>
      {children}
    </BackgroundContext.Provider>
  );
};