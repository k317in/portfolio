import React, { useState, useEffect } from "react";

const AboutSection = () => {
  const [personalInfo, setPersonalInfo] = useState(null);

  useEffect(() => {
    // Fetch JSON from public folder
    fetch("/personalInfo.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch personal info");
        }
        return response.json();
      })
      .then((data) => setPersonalInfo(data))
      .catch((error) => console.error(error));
  }, []);

  if (!personalInfo) return <p>Loading...</p>;

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>{personalInfo.about}</p>
      <ul>
        <li>
          <strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
        </li>
        <li>
          <strong>Address:</strong> {personalInfo.address}
        </li>
        <li>
          <strong>LinkedIn:</strong> <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">{personalInfo.linkedin}</a>
        </li>
        <li>
          <strong>GitHub:</strong> <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">{personalInfo.github}</a>
        </li>
      </ul>
    </section>
  );
};

export default AboutSection;