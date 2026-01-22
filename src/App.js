import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.png';
import smaller_logo from './smaller_logo.png';
import github from './github.png';
import email from './email.png';
import linkedin from './linkedin.png';
import me from './me.png';
import headerBackground from './header-background.png';
import resume from './resume.pdf';
import './App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsNarrowScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <a href="#page-top">
          <img 
            src={isNarrowScreen ? smaller_logo : logo} 
            alt="Aditya Uniyal Logo" 
            className="Navbar-logo" 
          />
        </a>
      </div>
      
      {isNarrowScreen ? (
        <>
          <div className="navbar-name">
            <strong>Aditya Uniyal</strong>
          </div>
          <button 
            onClick={toggleMenu} 
            className="menu-button"
            aria-label="Toggle navigation menu"
          >
            <strong>Menu &#9776;</strong>
          </button>
        </>
      ) : (
        <div className="nav-container">
          <a className="navButtons" href="#about">About</a>
          <a className="navButtons" href="#experience">Experience</a>
          <a className="navButtons" href="#projects">Projects</a>
          <a className="navButtons" href="#skills">Skills</a>
          <a className="navButtons" href="#contact">Let's Connect!</a>
        </div>
      )}
      
      {isOpen && isNarrowScreen && (
        <div className={`nav-container ${isOpen ? 'open' : ''}`}>
          <a className="nav-item" href="#about" onClick={closeMenu}>About</a>
          <a className="nav-item" href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-item" href="#projects" onClick={closeMenu}>Projects</a>
          <a className="nav-item" href="#skills" onClick={closeMenu}>Skills</a>
          <a className="nav-item" href="#contact" onClick={closeMenu}>Let's Connect!</a>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <div className="App" id="page-top">
      <Navbar />
      
      <header 
        className="App-header" 
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <h1>Hi, my name is Aditya 👋</h1>
        <div className="typing-animation">
          <h3>I'm a Full-Stack Developer!</h3>
        </div>
      </header>
      
      <main className="App-main">
        {/* About Section */}
        <section id="about" className="rightAlign">
          <h2 className="Section-heading">About Me</h2>
          <div className="content-container">
            <div className="image-container">
              <img src={me} alt="Aditya Uniyal" className="me-lol" />
            </div>
            <div className="text-container">
              <h3>Studying and Solving</h3>
              <p>
                On track to graduate from the University of Western Ontario in 2026, 
                I'm deep into deciphering the languages of computers. I relish the 
                challenge of smoothing out the tech tangles that trip people up, 
                striving to create solutions that simplify and enhance everyday experiences.
              </p>
              
              <h3>Mentorship and Community</h3>
              <p>
                Coding is just one part of my world. I've found joy in mentoring, 
                being a companion and guide to fellow students, particularly those 
                venturing away from their home turf for the first time. For me, it's 
                about building a community where everyone feels included, and no story 
                goes unheard.
              </p>
              
              <h3>Discovering and Creating</h3>
              <p>
                My curiosity doesn't power down with my devices. I'm a movie buff, 
                amateur photographer, and an enthusiastic cook. Each hobby is a slice 
                of life where I explore different perspectives, stir up creativity, 
                and savor the world's flavors.
              </p>
              
              <h3>Conversations and Collaborations</h3>
              <p>
                Whether you're wrestling with a coding conundrum, seeking film 
                recommendations, or on the hunt for the next best recipe, I'm here 
                for it. Reach out, and let's exchange ideas, challenges, and maybe 
                even a few laughs along the way.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="leftAlign">
          <div className="content-container">
            <div className="text-container">
              <h2>Experience</h2>
              
              <h3>Lynch Fluid Controls</h3>
              <h4>Application Developer | May 2024 - September 2024</h4>
              <p>
                • Developed and maintained database-driven web applications using PHP, 
                MySQL, HTML/CSS, and JavaScript, improving workflow efficiency by 15%.
              </p>
              <p>
                • Built interactive dashboards and reports in Power BI integrated with 
                Microsoft Business Central APIs for real-time business intelligence.
              </p>
              <p>
                • Participated in full software development lifecycle including 
                requirements gathering, design, development, testing, and deployment, 
                reducing system downtime by 20%.
              </p>
              
              <h3>Ultimate Coders</h3>
              <h4>Coding Instructor | June 2024 - June 2025</h4>
              <p>
                • Developed comprehensive programming curriculum for 20+ students aged 
                9-16, covering object-oriented programming, data structures, and algorithm 
                design.
              </p>
              <p>
                • Achieved 4.6/5 average satisfaction score through clear technical 
                communication and mentorship.
              </p>
              <p>
                • Created hands-on exercises focused on problem-solving, debugging 
                methodologies, and software development best practices.
              </p>
            </div>
            
            <div className="pdf-container">
              <iframe 
                src={resume} 
                title="Aditya Uniyal's Resume" 
                width="600" 
                height="700" 
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="rightAlign">
          <h2>Projects</h2>
          <div className="content-container">
            <div className="text-container">
              
              <h3>WealthWatch</h3>
              <p>
                A full-stack web application offering intuitive budgeting, expense 
                tracking, and financial analytics. Features responsive UI, automated 
                expense categorization, and robust security with JWT authentication.
              </p>
              <h4>Technologies: MongoDB, Express, React, Node.js (MERN Stack)</h4>
              <a 
                href="https://github.com/AdityaUniyal3/WealthWatch/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cool-link"
              >
                Check out WealthWatch! →
              </a>
              
              <h3>Movie Fight</h3>
              <p>
                A web application that compares statistics of two movies and determines 
                which is statistically better based on award nominations, box office 
                income, Metacritic score, and IMDb rating.
              </p>
              <h4>Technologies: HTML, CSS, JavaScript, REST API</h4>
              <a 
                href="https://adityauniyal3.github.io/Movie-Fight/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cool-link"
              >
                Check out Movie Fight! →
              </a>
              
              <h3>ClearSpell</h3>
              <p>
                Desktop application for spell checking text documents by comparing words 
                against standard and user-customized dictionaries. Detects and suggests 
                corrections for misspellings and miscapitalizations.
              </p>
              <h4>Technologies: Java, JavaFX, JUnit</h4>
              <a 
                href="https://github.com/AdityaUniyal3/ClearSpell" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cool-link"
              >
                Check out ClearSpell! →
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="leftAlign">
          <h2>Skills</h2>
          
          <h3>Languages</h3>
          <p>JavaScript, Python, Java, C, HTML5, CSS3, SQL, PHP</p>
          
          <h3>Frontend</h3>
          <p>React, HTML5, CSS3, JavaScript (ES6+), Responsive Design</p>
          
          <h3>Backend</h3>
          <p>Node.js, Express.js, PHP, REST APIs, JWT Authentication</p>
          
          <h3>Database</h3>
          <p>MongoDB, MySQL, Database Design</p>
          
          <h3>Tools & Frameworks</h3>
          <p>Git, GitHub, VS Code, Eclipse, PyCharm, phpMyAdmin, JIRA, Confluence</p>
          
          <h3>Tech Stack</h3>
          <p>
            MERN Stack (MongoDB, Express.js, React, Node.js) | 
            LAMP Stack (Linux, Apache, MySQL, PHP)
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="Section">
          <h2>Let's Connect!</h2>
          <p style={{ color: 'white', marginBottom: '2rem' }}>
            I'm always open to new opportunities and collaborations
          </p>
          <div>
            <a 
              href="https://github.com/AdityaUniyal3" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <img src={github} alt="GitHub" className="social-links" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-uniyal-2950a4252/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <img src={linkedin} alt="LinkedIn" className="social-links" />
            </a>
            <a 
              href="mailto:adityasuniyal@gmail.com"
              aria-label="Email"
            >
              <img src={email} alt="Email" className="social-links" />
            </a>
          </div>
        </section>
      </main>
      
      <footer 
        className="App-footer" 
        style={{ backgroundImage: `url(${headerBackground})` }}
      >
        <p>© 2024 Aditya Uniyal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;