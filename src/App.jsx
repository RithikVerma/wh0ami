import './App.css'
import profileImage from './assets/profile.jpeg'
import {
  FaLinkedin,
  FaGithub,
  FaExternalLinkAlt,
  FaTwitter
} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function App() {
  const portfolioData = {
    name: "rithik verma",
    title: "mobile & web app developer",
    bio: "hi, i'm rithik verma. i build things for the web and mobile. i'm a software engineer specializing in building exceptional digital experiences. currently focused on building accessible, human-centered products.",
    location: "indore, india",
    profileImage: profileImage,
    email: "rverma8871@gmail.com",

    workExperience: [
      {
        title: "founding generalist",
        company: "rightfit.so",
        location: "bengaluru, karnataka, india",
        period: "jul 2025 - dec 2025",
        type: "full-time",
        description: "part of the founding team, contributing across product development, marketing, operations, and client management to drive the company’s early growth. managed relationships with candidates and clients, handling hiring coordination, communication, and ensuring a smooth recruitment experience. took ownership of whatever the company needs at this stage, from product testing and content to outreach and process improvement."
      },
      {
        title: "react native developer",
        company: "InfoCentroid Software Solutions Pvt.Ltd.",
        location: "indore, madhya pradesh, india",
        period: "nov 2024 - jul 2025",
        type: "internship",
        description: "developed mobile applications using react native and javascript, gained hands-on experience in cross-platform mobile development."
      },
      {
        title: "freelance web developer",
        company: "self-employed",
        location: "remote",
        period: "nov 2024 - jan 2025",
        type: "freelance",
        description: "developing custom websites and web applications for various clients, including business websites and digital solutions."
      }
    ],

    projects: [
      {
        title: "fundingpe",
        category: "mobile app",
        description: "a comprehensive mobile financial management application built with react native and typescript. features modern ui components, cross-platform compatibility, and robust navigation system.",
        tech: ["react native", "typescript", "firebase"],
        // githubLink: "https://github.com/RithikVerma",
        liveLink: "https://play.google.com/store/apps/details?id=com.fundingpe.masjid&hl=en-US"
      },
      {
        title: "snb business website",
        category: "web app",
        description: "web-based notice board management system for snb. allows administrators to control and manage digital notice boards with an efficient content management solution.",
        tech: ["html5", "css3", "javascript"],
        liveLink: "https://noticeboard-theta.vercel.app/",
        githubLink: "https://github.com/RithikVerma/Notice_Board_"
      },
      {
        title: "portfolio website",
        category: "personal",
        description: "modern, responsive portfolio website using react and vite. features include theme switching, smooth animations, and seo optimization.",
        tech: ["react", "vite", "css3"],
        liveLink: "https://wh0rithik.vercel.app/",
        githubLink: "https://github.com/RithikVerma/wh0ami"
      },

      {
        title: "digital menu",
        category: "web app",
        description: "a responsive digital menu application for restaurants, allowing users to browse food categories and items with a modern user interface.",
        tech: ["react", "javascript", "css3"],
        liveLink: "https://digital-menu-silk.vercel.app/",
        githubLink: "https://github.com/RithikVerma/Digital-Menu"
      }
    ],

    skills: [
      "javascript (es6+)", "react.js", "react native", "typescript", "html5", "css3",
      "tailwind css", "node.js", "express", "mongodb", "mysql", "firebase",
      "git", "github", "vite.js", "responsive design", "rest apis"
    ],

    socialLinks: {
      linkedin: "https://linkedin.com/in/rithik-verma-508b04216",
      github: "https://github.com/RithikVerma",
      email: "rverma8871@gmail.com"
    }
  }

  return (
    <div className="app">
      <div className="main-container">
        {/* Navigation */}
        <nav className="nav">
          <div className="nav-links">
            <a href="#" className="nav-link active">home</a>
            <a href="#projects" className="nav-link">projects</a>
          </div>
          <div className="nav-social">
            <a href={portfolioData.socialLinks.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={portfolioData.socialLinks.github} className="social-icon" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href={`mailto:${portfolioData.email}`} className="social-icon" title="Email">
              <MdEmail />
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>{portfolioData.name}</h1>
            <p className="bio">{portfolioData.bio}</p>
            <div className="hero-buttons">
              <a href={`mailto:${portfolioData.email}`} className="btn btn-primary">
                let's connect
              </a>
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="btn">
                linkedin
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <img
              src={portfolioData.profileImage}
              alt={portfolioData.name}
              className="profile-image"
            />
            <span className="location-badge">{portfolioData.location}</span>
          </div>
        </section>

        {/* Work Experience */}
        <section className="section">
          <h2 className="section-title">work experience</h2>
          <p className="section-subtitle">places where i've worked and things i've learned.</p>

          <div className="work-list">
            {portfolioData.workExperience.map((job, index) => (
              <div key={index} className="work-item">
                <div className="work-info">
                  <h3>{job.title}</h3>
                  <p className="work-company">
                    {job.company} · {job.type}
                  </p>
                  <p className="work-description">{job.description}</p>
                </div>
                <div className="work-period">{job.period}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <h2 className="section-title">projects</h2>
          <p className="section-subtitle">some things i've built recently.</p>

          <div className="projects-grid">
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <span className="project-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      view live <FaExternalLinkAlt style={{ fontSize: '0.75rem', marginLeft: '0.25rem' }} />
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      github <FaGithub style={{ fontSize: '0.875rem', marginLeft: '0.25rem' }} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <h2 className="section-title">skills & technologies</h2>
          <div className="skills-grid">
            {portfolioData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section">
          <h2>let's work together</h2>
          <p className="contact-description">
            i'm open to new opportunities, collaborations, and interesting projects.
            feel free to reach out if you'd like to work together.
          </p>

          <div className="contact-content">
            <div className="contact-social">
              <a href={`mailto:${portfolioData.email}`} className="contact-social-link" title="Email">
                <MdEmail />
              </a>
              <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href={portfolioData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="contact-social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://x.com/_rithik_verma_" target="_blank" rel="noopener noreferrer" className="contact-social-link" title="X">
                <FaTwitter />
              </a>
            </div>
          </div>
        </section>
      </div >
    </div >
  )
}

export default App