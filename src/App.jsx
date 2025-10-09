import './App.css'
import profileImage from './assets/profile.jpeg'
import { useState, useEffect } from 'react'
import { 
  MdLightMode, 
  MdDarkMode, 
  MdDevices, 
  MdKeyboardArrowDown,
  MdEmail,
  MdPhone,
  MdArrowRight
} from 'react-icons/md'
import { 
  FaLinkedin, 
  FaGithub, 
  FaExternalLinkAlt 
} from 'react-icons/fa'

function App() {
  const [theme, setTheme] = useState('device')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // Get system theme preference
  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Apply theme to document
  const applyTheme = (themeValue) => {
    const actualTheme = themeValue === 'device' ? getSystemTheme() : themeValue
    document.documentElement.setAttribute('data-theme', actualTheme)
  }

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'device'
    setTheme(savedTheme)
    applyTheme(savedTheme)

    // Listen for system theme changes when device theme is selected
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      if (savedTheme === 'device') {
        applyTheme('device')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    applyTheme(newTheme)
    setIsDropdownOpen(false)
  }

  // Get theme icon
  const getThemeIcon = () => {
    switch (theme) {
      case 'light': return <MdLightMode />
      case 'dark': return <MdDarkMode />
      case 'device': return <MdDevices />
      default: return <MdDevices />
    }
  }

  // Get theme label
  const getThemeLabel = () => {
    switch (theme) {
      case 'light': return 'Light'
      case 'dark': return 'Dark'
      case 'device': return 'Device'
      default: return 'Device'
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownOpen && !event.target.closest('.theme-dropdown')) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isDropdownOpen])

  const portfolioData = {
    name: "Rithik Verma",
    title: "Mobile & Web App Developer",
    description: `Hi, my name is Rithik Verma. I build things for the web and mobile. I'm a software engineer specializing in building exceptional digital experiences for web and mobile platforms. Currently, I'm focused on building accessible, human-centered products. My journey in programming began in 2024, and since then, I've been constantly learning and growing in the field.`,
    location: "India",
    profileImage: profileImage,
    email: "rverma8871@gmail.com",
    workExperience: [
      {
        title: "Generalist",
        company: "Rightfit",
        location: "Bengaluru, Karnataka, India · On-site",
        period: "Jul 2025 - Present · 3 mos",
        current: true,
        type: "Full-time",
        description: "Working as a Generalist at Rightfit, focusing on diverse technical challenges and product development"
      },
      {
        title: "React Native Developer",
        company: "InfoCentroid Software Solutions Pvt.Ltd.",
        location: "Indore, Madhya Pradesh, India",
        period: "Nov 2024 - Jul 2025 · 9 mos",
        current: false,
        type: "Internship",
        description: "Developed mobile applications using React Native and JavaScript, gaining hands-on experience in cross-platform mobile development",
        skills: ["React Native", "JavaScript", "+2 skills"]
      },
        {
        title: "Freelance Web Developer",
        company: "Self-Employed",
        location: "Remote",
        period: "Nov 2024 - Nov 2024",
        current: true,
        type: "Freelance",
        description: "Developing custom websites and web applications for various clients, including business websites and digital solutions"
      }
    ],
    projects: [
      {
        title: "FundingPe",
        category: "Featured Project",
        role: "Mobile App Developer",
        duration: "2024",
        description: "A comprehensive mobile financial management application built with React Native and TypeScript. Features include modern UI components, cross-platform compatibility, SafeAreaView implementation, and robust navigation system. The app showcases professional purple-themed interface with optimized user experience and scalable architecture.",
        highlights: [
          "Modern Mobile Architecture with React Native and TypeScript",
          "Professional UI Theme with purple (#7B2AC2) interface",
          "Centralized Navigation System with AppNavigator",
          "Scalable Project Structure with modular components",
          "TypeScript Integration for enhanced code reliability"
        ],
        tech: ["React Native", "JavaScript", "TypeScript", "Postman", "Firebase", "React Library"],
        githubLink: "https://github.com/RithikVerma"
      },
      {
        title: "SNB Business Website",
        category: "Freelance Project",
        role: "Web Developer",
        duration: "2024",
        description: "Developed a web-based notice board management system for SNB as a freelance project. The application allows administrators to control and manage digital notice boards, providing an efficient solution for content management and display control. Built with modern web technologies focusing on user-friendly interface and reliable functionality.",
        tech: ["HTML5", "CSS3", "JavaScript", "Web Development", "Content Management", "Admin Panel"],
        liveLink: "http://snb.upsys.in/",
        githubLink: "https://github.com/RithikVerma"
      }
    ],
    skills: [
      "JavaScript (ES6+)", "React.js", "React Native", "Tailwind CSS", "Java", "C/C++", 
      "SQL/MySQL", "Firebase", "HTML5", "CSS3", "TypeScript", "Vite.js", "GitHub", 
      "Node.js", "Express", "MongoDB", "Git", "Responsive Design", "REST APIs", 
      "Frontend Development", "Mobile Development", "Cross-platform Development"
    ],
    socialLinks: {
      twitter: "https://twitter.com/rithikverma",
      linkedin: "https://linkedin.com/in/rithik-verma-508b04216",
      github: "https://github.com/RithikVerma"
    }
  }

  return (
    <div className="app" data-theme={theme}>
      
<nav className="nav">
  <div className="nav-links">
    <a href="#" className="nav-link active" onClick={(e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>home</a>
    <a href="#projects" className="nav-link" onClick={(e) => {
      e.preventDefault();
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    }}>projects</a>
  </div>
  <div className="nav-right">
    <div className="social-links">
      <a href={portfolioData.socialLinks.linkedin} className="social-link" title="LinkedIn">
        <FaLinkedin />
      </a>
      <a href={portfolioData.socialLinks.github} className="social-link" title="GitHub">
        <FaGithub />
      </a>
      <a href={`mailto:${portfolioData.email}`} className="social-link" title="Email">
        <MdEmail />
      </a>
    </div>
    <div className="theme-dropdown">
      <button 
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="theme-toggle"
        aria-label="Theme selector"
      >
        <span className="theme-icon">{getThemeIcon()}</span>
        <span className="theme-label">{getThemeLabel()}</span>
        <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>
          <MdKeyboardArrowDown />
        </span>
      </button>
      
      {isDropdownOpen && (
        <div className="theme-dropdown-menu">
          <button 
            onClick={() => handleThemeChange('light')}
            className={`theme-option ${theme === 'light' ? 'active' : ''}`}
          >
            <span>Light</span>
          </button>
          <button 
            onClick={() => handleThemeChange('dark')}
            className={`theme-option ${theme === 'dark' ? 'active' : ''}`}
          >
            <span>Dark</span>
          </button>
          <button 
            onClick={() => handleThemeChange('device')}
            className={`theme-option ${theme === 'device' ? 'active' : ''}`}
          >
            <span>Device</span>
          </button>
        </div>
      )}
    </div>
  </div>
</nav>


      {/* Main Content */}
      <main className="main">
        <div className="content">
          {/* Profile Section */}
          <section className="hero-section">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-name">{portfolioData.name}</h1>
                <p className="hero-title">{portfolioData.title}</p>
                
                <div className="hero-description">
                  <p>{portfolioData.description}</p>
                </div>

                <div className="hero-buttons">
                  <a href={`mailto:${portfolioData.email}`} className="hero-btn primary">
                    <span>let's connect</span>
                    <MdArrowRight />
                  </a>
                  <a href={portfolioData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hero-btn secondary">
                    <span>connect on linkedin</span>
                    <MdArrowRight />
                  </a>
                </div>
              </div>
              
              <div className="hero-image">
                <img 
                  src={portfolioData.profileImage} 
                  alt="Profile" 
                  className="profile-photo"
                />
                <p className="hero-location">{portfolioData.location}</p>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="work-section">
            <div className="section-divider"></div>
            <h2 className="section-title">work experience</h2>
            <p className="section-subtitle">
              here are some of the places where i've worked and the things i've learned along the way.
            </p>
            
            <div className="work-list">
              {portfolioData.workExperience.map((job, index) => (
                <div key={index} className="work-item">
                  <div className="work-header">
                    <div className="work-info">
                      <h3 className="work-title">{job.title}</h3>
                      <p className="work-company">
                        {job.company} · {job.type} · {job.location}
                      </p>
                      {job.description && (
                        <p className="work-description">{job.description}</p>
                      )}
                      {job.skills && (
                        <div className="work-skills">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="work-skill-tag">{skill}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="work-period">
                      {job.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects-section">
            <div className="section-divider"></div>
            <h2 className="section-title">featured projects</h2>
            <p className="section-subtitle">
              some of the projects i've worked on recently.
            </p>
            
            <div className="projects-list">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="project-item">
                  <div className="work-header">
                    <div className="work-info">
                      <h3 className="work-title">{project.title}</h3>
                      {project.role && (
                        <p className="work-company">
                          {project.role} · {project.category} · {project.duration}
                        </p>
                      )}
                      <p className="work-description">{project.description}</p>
                      
                      {project.tech && (
                        <div className="work-skills">
                          {project.tech.map((tech, techIndex) => (
                            <span key={techIndex} className="work-skill-tag">{tech}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="work-period">
                      {project.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills-section">
            <div className="section-divider"></div>
            <h2 className="section-title">skills & technologies</h2>
            <div className="skills-grid">
              {portfolioData.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact-section">
        <div className="contact-content">
          <h2>connect!</h2>
          <p>open for collaborations, opportunities, and coffee chats!</p>
          <p>you can reach me via email at → <a href="mailto:wh0sumit.work@gmail.com">rverma8871@gmail.com</a></p>
          <p>or you can find me on socials:</p>
          
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">twitter</a>
            <span className="separator"> * </span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin</a>
            <span className="separator"> * </span>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">github</a>
          </div>
          
          {/* <button className="drop-mail-button">
            drop a mail <span className="envelope-icon">✉️</span>
          </button> */}
        </div>
      </section>
        </div>
      </main>
    </div>
  )
}

export default App