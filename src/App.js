import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Project';
import Contact from './components/Contact';
import './App.css';
import WorldClock from './WorldClock.js';

export default function App() {
  const scrollToSection = (sectionId) => {
    console.log(sectionId);  // Add this line to debug
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {/* Left Column: About Me */}
      <div className="left-column">
        <div className="BerkanInformation">
          <h1 className="Name">Berkan Tugsuz</h1>
          <p className="QuickDescription">Frontend Developer & Designer</p>
          <p className="QuickExplanation">
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
          </p>
          <div className="Buttons">
            <p>
              <button className="buttons" onClick={() => scrollToSection('AboutName')}>ABOUT</button>
            </p>
            <p>
              <button className="buttons" onClick={() => scrollToSection('experience')}>EXPERIENCE</button>
            </p>
            <p>
              <button className="buttons" onClick={() => scrollToSection('projectsName')}>PROJECTS</button>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="social-icons">
            <a href="https://github.com/jinntokyo" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/berkan-tugsuz-b24b31244/" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/berkantugsuz" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/Reputeai" target="_blank" rel="noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>

          {/* World Clocks */}
          <WorldClock /> {/* Render the World Clock here */}
        </div>
      </div>

      {/* Right Column: Projects, Experience, About */}
      <div className="right-column">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
