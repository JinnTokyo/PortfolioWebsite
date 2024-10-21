import React from 'react';
import '../App.css'; // Adjust this import as needed
import metaCertificateImage from '../assets/metaCertificateImage.png'; // Image for the Meta certificate
import osloTouristAppImage from '../assets/osloTouristAppImage.png'; // Image for the Oslo Tourist App

const experiencesData = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    details: "Coursera, Online",
    date: "September 2024",
    description: "Gained expertise in front-end development using HTML, CSS, JavaScript, React, and Git. Built responsive websites and interactive web apps, applied UX principles to create user-centered designs, and collaborated via GitHub for version control and project management.",
    imageUrl: metaCertificateImage, // Image URL for the certificate
    liveUrl: "https://www.coursera.org/account/accomplishments/certificate/YOUR_CERTIFICATE_LINK", // Your certificate link
    techStack: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Oslo Tourist App",
    details: "Collaborative Team Project",
    date: "Discontinued",
    description: "Worked with a team of 6 to develop an app that offers users a comprehensive guide to Oslo’s attractions. The app featured three ways to explore points of interest: browsing categories, navigating through a map, or searching directly for activities.",
    imageUrl: osloTouristAppImage, // Image URL for the Oslo Tourist App
    liveUrl: "https://ahmettu.com", // Project link
    techStack: ["JavaScript", "Google Maps API", "React", "Team Collaboration"]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="Experience">
      <div className="ExperienceContainer1">
        <h2 className="experience">Experience</h2>
        <div className="experience-content">
          {experiencesData.map((experience, index) => (
            <div className="ProjectCard" key={index}>
              <a href={experience.liveUrl} target="_blank" rel="noopener noreferrer">
                <img src={experience.imageUrl} alt={`${experience.title} Screenshot`} className="ProjectImage" />
              </a>
              <div className="ProjectInfo">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-details">{experience.details} <br /> {experience.date}</p>
                <div className="experience-description">{experience.description}</div>
                <div className="TechStack">
                  {experience.techStack.map((tech, i) => (
                    <span key={i} className="TechTag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

