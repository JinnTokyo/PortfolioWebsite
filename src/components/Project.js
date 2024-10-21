import React from 'react';
import './Projects.css'; // Your styles for the projects section
import reputeaidevScreenshot from '../assets/Screenshot.png'; // Adjust this path as needed
import ahmettuScreenshot from '../assets/ahmettuScreenshot.png'; // Import your new project image

const projectsData = [
  {
    title: "Reputeaidev",
    description: "A platform that automates the collection and display of authentic customer testimonials. It simplifies feedback gathering and presents reviews in an organized format, making it easy for businesses to showcase their customer experiences.",
    imageUrl: reputeaidevScreenshot,
    liveUrl: "https://reputeaidev.vercel.app",
    techStack: ["React", "CSS", "JavaScript", "Vercel"]
  },
  {
    title: "Ahmettu", // Change to your project's title
    description: "Developed the frontend of a personalized portfolio website for my brother, showcasing his skills and projects. Utilized modern web technologies to create an engaging user interface and ensure a seamless user experience.", // Change to your project's description
    imageUrl: ahmettuScreenshot, // Use the imported image for your new project
    liveUrl: "https://your-new-project-url.com", // Change to your project's live URL
    techStack: ["React", "Node.js", "Express", "MongoDB"], // Change to your project's tech stack
  },
  // Add more projects here if needed
];

export default function Projects() {
  return (
    <section id="projectsName" className="ProjectsSection">
      <h2>Projects</h2>
      <div className="ProjectsGrid">
        {projectsData.map((project, index) => (
          <div className="ProjectCard" key={index}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={`${project.title} Screenshot`} className="ProjectImage" />
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
