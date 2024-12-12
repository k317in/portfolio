import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BackgroundProvider } from "./BackgroundContext";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BackgroundProvider>
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />       
            <Route path="/home" element={<><Navbar /><HomePage /></>} />
            <Route path="/about" element={<><Navbar /><AboutPage /></>} />
            <Route path="/projects" element={<><Navbar /><ProjectsPage /></>} />
            <Route path="/contact" element={<><Navbar /><ContactPage /></>} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
    </Router>
    </BackgroundProvider>
  );
};


export default App;