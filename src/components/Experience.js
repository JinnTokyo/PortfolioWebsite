import React from 'react';
import '../App.css'; // Adjust this import as needed
import metaCertificateImage from '../assets/metaCertificateImage.png'; // Image for the Meta certificate
import osloTouristAppImage from '../assets/osloTouristAppImage.png'; // Image for the Oslo Tourist App
import FremtidensHage from '../assets/fremtidenshage.png';

const experiencesData = [
  {
    title: "Meta Front-End Developer Professional Certificate",
    details: "Coursera, Online",
    date: "September 2024",
    description: "Gained expertise in front-end development using HTML, CSS, JavaScript, React, and Git. Built responsive websites and interactive web apps, applied UX principles to create user-centered designs, and collaborated via GitHub for version control and project management.",
    imageUrl: metaCertificateImage,
    liveUrl: "https://www.coursera.org/account/accomplishments/certificate/YOUR_CERTIFICATE_LINK",
    techStack: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    title: "Oslo Tourist App",
    details: "Collaborative Team Project",
    date: "Discontinued",
    description: "Worked with a team of 6 to develop an app that offers users a comprehensive guide to Oslo’s attractions. The app featured three ways to explore points of interest: browsing categories, navigating through a map, or searching directly for activities.",
    imageUrl: osloTouristAppImage,
    liveUrl: "https://ahmettu.com/projectoslo",
    techStack: ["Kotlin", "Google Maps API", "Team Collaboration"]
  },
  {
  title: "FremtidensHage", // Replace with your new project's title
  date: "2024 - 2025", // Add a valid date for your project
  description: "I designed the UX/UI for Fremtidenshage.no, creating a user-friendly, responsive e-commerce site for pots with grow lights. My work focused on improving navigation, product discovery, and the overall shopping experience.", // Replace with your new project's description
  imageUrl: FremtidensHage, // Replace with the path to your new project's image
  liveUrl: "https://fremtidenshage.no", // Replace with your new project's live URL
  techStack: ["React", "CSS", "Scrum"], 
  },

];

export default function Experience() {
  return (
    <section id="experience" className="ExperienceSection">
      <div className="ExperienceContainer1">
        <h2 className="experience">Experience</h2>
        <div className="ExperienceGrid">
          {experiencesData.map((experience, index) => (
            <div className="ExperienceCard" key={index}>
              <a href={experience.liveUrl} target="_blank" rel="noopener noreferrer">
                <img src={experience.imageUrl} alt={`${experience.title} Screenshot`} className="ExperienceImage" />
              </a>
              <div className="ExperienceInfo">
                <h3 className="experience-title">{experience.title}</h3>
                <p className="experience-details">{experience.details} <br /> {experience.date}</p>
                <p className="ExperienceDescription">{experience.description}</p>
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
