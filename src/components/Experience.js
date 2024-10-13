export default function Experience() {
  return (
    <section id="experience" className="Experience">
      <div className="ExperienceContainer1">
        <h2 className="experience">Experience</h2>
        <div className="experience-content">
          <a
            href="https://www.coursera.org/account/accomplishments/certificate/YOUR_CERTIFICATE_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-card"
          >
            <h3 className="experience-title">
              Meta Front-End Developer Professional Certificate
            </h3>
            <p className="experience-details">
              Coursera, Online <br /> September 2024
            </p>
            <p className="experience-description">
              Gained expertise in front-end development using HTML, CSS,
              JavaScript, React, and Git. Built responsive websites and
              interactive web apps, applied UX principles to create
              user-centered designs, and collaborated via GitHub for version
              control and project management.
            </p>
            <div className="tech-stack">
              <span>HTML</span> <span>CSS</span> <span>JavaScript</span>
              <span>React</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
