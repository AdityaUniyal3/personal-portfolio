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
        <div className="typing-animation"><h3>I'm a Software Developer!</h3></div>
      </header>
      <main className="App-main">
        <section id="about" className="rightAlign">
          <h2 className="Section-heading">About Me</h2>
          <div class="content-container">
            <div class="image-container">
              <img src={me} alt="me" className="me-lol" />
            </div>
            <div class="text-container">
              <h3>Building Reliable Software</h3>
              <p>Graduating from the University of Western Ontario in February 2026, I'm focused on creating production-ready systems and writing maintainable code. I enjoy the challenge of building software that's not just functional, but reliable, well-tested, and makes a real difference in how people work and interact with technology.</p>
              <h3>Mentorship and Teaching</h3>
              <p>Beyond coding, I've discovered a passion for teaching and mentoring. Whether I'm helping students master Java fundamentals or debugging complex problems together, I find joy in making technical concepts accessible and fostering a collaborative learning environment where everyone can grow.</p>
              <h3>Exploring and Learning</h3>
              <p>When I'm not coding, you'll find me exploring new technologies, watching films, experimenting with photography, or trying out new recipes. Each hobby is a chance to learn something new, see different perspectives, and bring fresh ideas back to my software development work.</p>
              <h3>Let's Connect</h3>
              <p>Whether you want to discuss software architecture, debugging strategies, career advice, or just chat about the latest tech trends, I'm always up for a good conversation. Feel free to reach out—I'd love to hear from you!</p>
            </div>
          </div>
        </section>
        <section id="experience" className="leftAlign">
        <div class="content-container">
          <div class="text-container">
            <h2>Experience</h2>
            
            <h3>Ultimate Coders</h3>
            <h4>Coding Instructor | June 2024 - June 2025 | Scarborough</h4>
            <p>• Developed and delivered comprehensive Java programming curriculum for 20+ students aged 9-16, covering object-oriented programming concepts, data structures, and algorithm design using Java, Python, and JavaScript.</p>
            <p>• Created hands-on coding exercises focused on problem-solving, debugging methodologies, and software development best practices resulting in measurable improvement in students' ability to write maintainable code.</p>
            <p>• Achieved an average lesson satisfaction score of 4.6/5 through clear technical communication and collaborative mentorship, demonstrating ability to explain complex programming concepts to diverse audiences.</p>
            <br></br>
            
            <h3>Lynch Fluid Controls</h3>
            <h4>Application Developer | May 2024 - September 2024 | Mississauga</h4>
            <p>• Developed and maintained database-driven web applications using PHP, MySQL, HTML/CSS, and JavaScript, collaborating with cross-functional teams including QA, operations, and management to deliver reliable, high-performing solutions that improved workflow efficiency by 15%.</p>
            <p>• Built interactive dashboards and reports in Power BI integrated with Microsoft Business Central APIs, utilizing RESTful APIs and third-party integrations to deliver real-time business intelligence solutions.</p>
            <p>• Participated in full software development lifecycle including requirements gathering, design, development, testing, and deployment; collaborated closely with QA team to identify and resolve software defects, reducing system downtime by 20%.</p>
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
              <h3 className="bodyContainer">ClearSpell</h3>
              <p className="bodyContainer">A production-quality desktop application developed as a group project, featuring clean architectural separation and automated testing in Java. Implements spell-checking systems operating on 100,000+ word dictionaries with efficient algorithmic logic to ensure correctness and maintainability. Designed with proper error handling, input validation, and comprehensive test coverage using JUnit.</p>
              <h4 className="bodyContainer">Technologies Used: <i>Java, JavaFX, JUnit</i></h4>
              <a href="https://github.com/AdityaUniyal3/ClearSpell" target="_blank" rel="noopener noreferrer" class="cool-link">Check out ClearSpell!</a>
              <br></br>
              
              <h3 className="bodyContainer">DIY Teachable Machine</h3>
              <p>A fully client-side machine learning web application using TensorFlow.js, applying transfer learning with MobileNet to enable real-time image classification from live webcam input. Demonstrates responsive, user-facing ML functionality with an intuitive interface for training custom models directly in the browser.</p>
              <h4 className="bodyContainer">Technologies Used: <i>JavaScript, TensorFlow.js, HTML/CSS</i></h4>
              <a href="https://github.com/AdityaUniyal3/DIY-Teachable-Machine" target="_blank" rel="noopener noreferrer" class="cool-link">Check out DIY Teachable Machine!</a>
              <br></br>
              
              <h3 className="bodyContainer">CUDA-Accelerated SMOTE</h3>
              <p>A GPU-accelerated implementation of the Synthetic Minority Oversampling Technique (SMOTE) algorithm using C++ and NVIDIA CUDA. Engineered low-level hardware programming to parallelize distance matrix computations and k-nearest neighbor selection for imbalanced datasets, achieving up to 700× speedup on high-dimensional data. Applied object-oriented design principles and conducted comprehensive performance benchmarking to validate reliability and scalability.</p>
              <h4 className="bodyContainer">Technologies Used: <i>C++, CUDA, Python</i></h4>
              <br></br>
              <a href="https://github.com/AdityaUniyal3/CUDA-Accelerated-SMOTE" target="_blank" rel="noopener noreferrer" class="cool-link">CUDA-Accelerated-SMOTE!</a>
              
              <h3 className="bodyContainer">WealthWatch</h3>
              <p>A full-stack web application offering intuitive budgeting, expense tracking, and financial analytics. Features a responsive user interface, automated expense categorization, and robust security with JWT authentication for a seamless user experience. Built with the MERN stack to provide real-time financial insights and data visualization.</p>
              <h4 className="bodyContainer">Technologies Used: <i>MongoDB, Express, React, Node.js</i></h4>
              <a href="https://github.com/AdityaUniyal3/WealthWatch/" target="_blank" rel="noopener noreferrer" class="cool-link">Check out WealthWatch!</a>
              <br></br>
              
              <h3 className="bodyContainer">Movie Fight</h3>
              <p>A web application that compares statistics of two movies selected by the user to determine which is statistically better. Compares award nominations, box office income, Metacritic scores, and IMDb ratings using data fetched from RESTful APIs with clean, responsive design.</p>
              <h4 className="bodyContainer">Technologies Used: <i>HTML, CSS, JavaScript, REST API</i></h4>
              <a href="https://adityauniyal3.github.io/Movie-Fight/" target="_blank" rel="noopener noreferrer" class="cool-link">Check out Movie Fight!</a>
              </div>
          </div>          
        </section>
        <section id="skills" className="leftAlign">
          <h2>Skills</h2>
          <h3 className="bodyContainer">Development:</h3>
          <p>Core Java, Python, Object-Oriented Programming, JUnit</p>
          <h3 className="bodyContainer">Web Technologies:</h3>
          <p>PHP, HTML, CSS, JavaScript, RESTful APIs</p>
          <h3 className="bodyContainer">Databases:</h3>
          <p>MySQL, SQL, Database Design</p>
          <h3 className="bodyContainer">Development Tools:</h3>
          <p>IntelliJ IDEA, Eclipse, Git, GitHub, VS Code</p>
          <h3 className="bodyContainer">Additional Technologies:</h3>
          <p>React, Node.js, Express, MongoDB, Power BI, Microsoft Business Central, C++, CUDA</p>
          <h3 className="bodyContainer">Soft Skills:</h3>
          <p>Problem-Solving, Communication, Critical Thinking, Adaptability, Analytical Thinking</p>
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