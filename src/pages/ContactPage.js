import React, { useState, useEffect } from "react";
import "./ContactPage.css";
import SubmitForm from "../components/SubmitForm";
const ContactPage = () => {
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
    <div className="contactpage-container">
    <section id="contact">
    <div className="contactCard">
      <h2 className="contactCard_title">Contact Me</h2>
      <SubmitForm></SubmitForm>
      </div>
      {/* <div className="contact-info">
        <p><strong>Email:</strong> <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a></p>
        <p><strong>Address:</strong> {personalInfo.address}</p>
      </div> */}
    </section>
    </div>
  );
};

export default ContactPage;