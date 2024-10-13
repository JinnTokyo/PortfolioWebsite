import React from 'react';
import './Projects.css'; // Your styles for the projects section
import reputeaidevScreenshot from '../assets/Screenshot.png'; // Adjust this path as needed

const projectsData = [
  {
    title: "Reputeaidev",
    description: "A platform that automates the collection and display of authentic customer testimonials. It simplifies feedback gathering and presents reviews in an organized format, making it easy for businesses to showcase their customer experiences.",
    imageUrl: reputeaidevScreenshot, // Use the imported image
    liveUrl: "https://reputeaidev.vercel.app",
    techStack: ["React", "CSS", "JavaScript", "Vercel"]
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section id="projectsName" className="ProjectsSection">
      <h2>Projects</h2>
      <div className="ProjectsGrid">
        {projectsData.map((project, index) => (
          <div className="ProjectCard" key={index}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={`${project.title} Screenshot`} className="ProjectImage"/>
            </a>
            <div className="ProjectInfo">
              <h3>{project.title}</h3>
              <div className='ProjectDescription'> {project.description}</div>
              <div className="TechStack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="TechTag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
