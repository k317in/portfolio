import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./ProjectsPage.css"
// import project1Image from "../assets/project1.jpg"; // Replace with actual images
// import project2Image from "../assets/project2.jpg";
// import project3Image from "../assets/project3.jpg";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Membership Manager with QR Code Check-In",
      description: "A web app to manage memberships and events with QR code check-in functionality.",
      techStack: ["React", "Node.js", "QR Code API"],
      demoLink: "https://example.com/membership-app",
      repoLink: "https://github.com/username/membership-app",
      // image: project1Image,
    },
    {
      title: "Dynamic Restaurant Website",
      description: "A restaurant website with dynamic menu management using Google Sheets.",
      techStack: ["React", "Google Sheets API", "CSS"],
      demoLink: "https://example.com/restaurant-site",
      repoLink: "https://github.com/username/restaurant-site",
      // image: project2Image,
    },
    {
      title: "Basketball Organization Website",
      description: "A site with event management and a real-time multi-device scoreboard.",
      techStack: ["React", "WebSocket", "Responsive Design"],
      demoLink: "https://example.com/basketball-site",
      repoLink: "https://github.com/username/basketball-site",
      // image: project3Image,
    },
  ];

  return (
    <div className="projectpage-container">
    <section id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default ProjectsPage;