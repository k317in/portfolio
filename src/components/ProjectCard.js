import React from "react";
import "./ProjectCard.css"; // Import styles (optional)

const ProjectCard = ({ title, description, techStack, demoLink, repoLink, image }) => {
  return (
    <div className="project-card">
      {/* <img src={image} alt={`${title} Screenshot`} className="project-card-image" /> */}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        <p className="project-card-tech">
          <strong>Technologies:</strong> {techStack.join(", ")}
        </p>
        <div className="project-card-links">
          {demoLink && (
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
              Live Demo
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="project-card-link">
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;