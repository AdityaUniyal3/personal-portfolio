import React from 'react';
import { useState, useEffect } from 'react';
import logo from './logo.png'; // Ensure the path to your logo is correct
import smaller_logo from './smaller_logo.png';
import github from './github.png';
import email from './email.png';
import linkedin from './linkedin.png';
import me from './me.png'
import headerBackground from './header-background.png'
import resume from './resume.pdf'
import './App.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1080);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
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
    setIsOpen(!isOpen); // Toggle the menu
  };

  return (
    <nav className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand">
        <a href="#page-top">
          <img src={isNarrowScreen ? smaller_logo : logo} alt="Logo" className="Navbar-logo" />
        </a>
      </div>
      {isNarrowScreen ? (
        <>
          <div className="navbar-name"><b>Aditya Uniyal</b></div>
          <button onClick={toggleMenu} className="menu-button"><b>Menu &#9776;</b></button>
        </>
      ) : (
        <>
          {/* This ensures navigation links are always shown on larger screens */}
          <div className={`nav-container ${isOpen ? 'open' : ''}`}>
            <a className="navButtons" href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a className="navButtons" href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
            <a className="navButtons" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a className="navButtons" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a className="navButtons" href="#contact" onClick={() => setIsOpen(false)}>Let's Connect!</a>
          </div>
        </>
      )}
      {isOpen && isNarrowScreen && (
        <div className={`nav-container ${isOpen ? 'open' : ''}`}>
          <a className="nav-item" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="nav-item" href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
          <a className="nav-item" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="nav-item" href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a className="nav-item" href="#contact" onClick={() => setIsOpen(false)}>Let's Connect!</a>
        </div>
      )}
    </nav>
  );
}
  

function App() {
  return (
    <div className="App" section id="page-top">
      <Navbar />
      <header className="App-header" style={{ backgroundImage: `url(${headerBackground})` }}>
        <h1>Hi, my name is Aditya 👋</h1>
        <div className="typing-animation"><h3>I'm a Full-stack Developer!</h3></div>
      </header>
      <main className="App-main">
        <section id="about" className="rightAlign">
          <h2 className="Section-heading">About Me</h2>
          <div class="content-container">
            <div class="image-container">
              <img src={me} alt="me" className="me-lol" />
            </div>
            <div class="text-container">
              <h3>Studying and Solving</h3>
              <p>On track to graduate from the University of Western Ontario in 2025, I'm deep into deciphering the languages of computers. I relish the challenge of smoothing out the tech tangles that trip people up, striving to create solutions that simplify and enhance everyday experiences.</p>
              <h3>Mentorship and Community</h3>
              <p>Coding is just one part of my world. I've found joy in mentoring, being a companion and guide to fellow students, particularly those venturing away from their home turf for the first time. For me, it's about building a community where everyone feels included, and no story goes unheard.</p>
              <h3>Discovering and Creating</h3>
              <p>My curiosity doesn't power down with my devices. I'm a movie buff, amateur photographer, and an enthusiastic cook. Each hobby is a slice of life where I explore different perspectives, stir up creativity, and savor the world's flavors.</p>
              <h3>Conversations and Collaborations</h3>
              <p>Whether you're wrestling with a coding conundrum, seeking film recommendations, or on the hunt for the next best recipe, I'm here for it. Reach out, and let's exchange ideas, challenges, and maybe even a few laughs along the way.</p>
            </div>
          </div>
        </section>
        <section id="experience" className="leftAlign">
        <div class="content-container">
          <div class="text-container">
            <h2>Experience</h2>
            <h3>Lynch fluid Controls</h3>
            <h4>May 2023 - Spetember 2023</h4>
            <p>• Updated and maintained an order tracking web application utilizing a LAMP technology stack, focused on ensuring data integrity, security, and performance optimization.</p>
            <p>• Enhanced inter-departmental communication through streamlined order management, leading to improved production efficiency and workflow synchronization..</p>
            <p>• Implemented advanced data sanitization techniques to safeguard against SQL injection and cross-site scripting (XSS) attacks.</p>
            <br></br>
            <h3>Political Party</h3>
            <h4>May 2019 - Spetember 2019</h4>
            <p>• Maintained a comprehensive database of voter demographics and voting history using MySQL and InnoDB, handling over 500,000 records.</p>
            <p>• Improved data query performance by 30%, ensuring faster access and higher data integrity.</p>
            <p>• Utilized HTML and JavaScript to maintain a dynamic website, leading to a 40% increase in daily visitors and a 25% improvement in user engagement</p>
          </div>
          <div className="pdf-container">
              <iframe src={resume} title="Aditya Uniyal's Resume" width="600" height="700" style={{border: 'none'}}></iframe>
          </div>
        </div>
        </section>
        <section id="projects" className="rightAlign">
          <h2>Projects</h2>
          <div class="content-container">
            <div class="text-container">
              <h3 className="bodyContainer">Movie Fight</h3>
              <p>A web application which compares the stats of two movies picked by the user and determines 
              which movie is statistically better. For this, the program compares award nominations, box office income, 
              Metacritic score and its IMDb rating. </p>
              <h4 className="bodyContainer">Technologies Used: <i>HTML, CSS, JavaScript, Rest API</i> </h4>
              <a href="https://adityauniyal3.github.io/Movie-Fight/" target="_blank" rel="noopener noreferrer" class="cool-link">Check out Movie Fight!</a>
              <br></br>
              <h3 className="bodyContainer">WealthWatch</h3>
              <p>A web application which offers intuitive budgeting, expense tracking, and financial analytics 
              to aid users in informed financial management. It features a responsive user interface, automated expense categorization, and robust security with JWT authentication, ensuring a seamless and secure user 
              experience</p>
              <h4 className="bodyContainer">Technologies Used: <i>MongoDB, Express, React, Node.js</i></h4>
              <a href="https://github.com/AdityaUniyal3/WealthWatch/" target="_blank" rel="noopener noreferrer" class="cool-link">Check out WealthWatch!</a>
              <br></br>
              <h3 className="bodyContainer">ClearSpell</h3>
              <p className="bodyContainer">A desktop application developed as a group project for an Intro to Software Engineering course. 
              It is designed to spell check text documents by comparing words against a standard and a user-customized 
              dictionary. The application detects and suggests corrections for various types of errors, including 
              misspellings and miscapitalizations.</p>
              <h4 className="bodyContainer">Technologies Used: <i>Java, JavaFX, JUnit</i></h4>
              <a href="https://github.com/AdityaUniyal3/ClearSpell" target="_blank" rel="noopener noreferrer" class="cool-link">Check out ClearSpell!</a>
              </div>
          </div>          
        </section>
        <section id="skills" className="leftAlign">
          <h2>Skills</h2>
          <h3 className="bodyContainer">Languages:</h3>
          <p>Python, Java, C, JavaScript, HTML5, CSS3, Git, MySQL, PHP</p>
          <h3 className="bodyContainer">Editors:</h3>
          <p>Visual Studio, Eclipse, PyCharm</p>
          <h3 className="bodyContainer">Tools/Frameworks:</h3>
          <p>phpMyAdmin, REST APIs, REACT, Node.js, Express, MongoDB, Junit, JIRA, Confluence</p>
          <h3 className="bodyContainer">Tech Stack:</h3>
          <p>Linux, Apache, MySQL and PHP (LAMP); MongoDB, Express.js, React, and Node.js (MERN)</p>
          <h3 className="bodyContainer">Software:</h3>
          <p>Microsoft Suite</p>
        </section>
        <section id="contact" className="Section">
          <h2>Let's Connect!</h2>
          <a href="https://github.com/AdityaUniyal3"> 
            <img src={github} alt="github" className="social-links"/> 
          </a>
          <a href="https://www.linkedin.com/in/aditya-uniyal-2950a4252/">
            <img src={linkedin} alt="linkedIn" className="social-links"/>
          </a>
          <a href="mailto:adityasuniyal@gmail.com">
            <img src={email} alt="email" className="social-links" />
          </a>
        </section>
      </main>
      <footer className="App-footer" style={{ backgroundImage: `url(${headerBackground})` }}>
        <p>©2024 Aditya Uniyal. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;