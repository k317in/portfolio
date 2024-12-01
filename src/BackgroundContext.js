import React, { createContext, useState } from "react";

export const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <BackgroundContext.Provider value={{ currentIndex, setCurrentIndex }}>
      {children}
    </BackgroundContext.Provider>
  );
};