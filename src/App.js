import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<><Navbar /><HomePage /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /></>} />
        <Route path="/projects" element={<><Navbar /><ProjectsPage /></>} />
        <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
      </Routes>
    </Router>
  );
};

export default App;