import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import logo from './logo.png'; // Ensure the path to your logo is correct
import github from './github.png';
import email from './email.png';
import linkedin from './linkedin.png';
import me from './me.png'
import headerBackground from './header-background.png'
import resume from './resume.pdf'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth < 1080);

  // Effect for handling scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 400;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Effect for handling resize
  useEffect(() => {
    const handleResize = () => setIsNarrowScreen(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isNarrowScreen) {
    // Return a simplified navbar for narrow screens
    return (
      <nav className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#page-top">
          <img src={logo} alt="Logo" className="Navbar-logo" />
        </a>
        <div className="nav-container">
          {/* Full set of nav items */}
          <a className="navButtons" href="#about">About</a>
          <a className="navButtons" href="#experience">Experience</a>
          <a className="navButtons" href="#projects">Projects</a>
          <a className="navButtons" href="#skills">Skills</a>
          <a className="navButtons" href="#contact">Let's Connect!</a>
        </div>
      </nav>
    );
  } else {
    // Return the full navbar for wider screens
    return (
      <nav className={`Navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#page-top">
          <img src={logo} alt="Logo" className="Navbar-logo" />
        </a>
        <div className="nav-container">
          {/* Full set of nav items */}
          <a className="navButtons" href="#about">About</a>
          <a className="navButtons" href="#experience">Experience</a>
          <a className="navButtons" href="#projects">Projects</a>
          <a className="navButtons" href="#skills">Skills</a>
          <a className="navButtons" href="#contact">Let's Connect!</a>
        </div>
      </nav>
    );
  }
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
              <p className="aboutMe"> Hi, I'm Aditya Uniyal, an aspiring Application Developer and a BSc Specialization in Computer Science student at the University of Western Ontario, aiming to graduate in May 2025. My journey in tech started with a curiosity for how digital solutions can improve everyday tasks and has evolved into a dedicated pursuit of developing robust, user-centered applications.
              Last summer, I made significant strides as an Application Developer at Lynch Fluid Controls, where I spearheaded the development of an order tracking web application. This project not only honed my technical skills in a LAMP technology stack but also instilled a deep appreciation for data integrity and security, resulting in a 20% increase in order tracking efficiency. My experience as a Back-end Developer for a Political Party allowed me to enhance voter engagement through effective data management and dynamic web solutions, improving user engagement by 25%.
              Academically, I am immersed in a curriculum that spans from Data Structures and Algorithms to Software Engineering, each course laying the groundwork for my understanding of complex computing principles. My hands-on projects, like Movie Fight, WealthWatch, and ClearSpell, showcase my proficiency in various technologies from JavaScript and React to MongoDB and Node.js, each solving unique problems with innovative and user-friendly interfaces. Beyond my technical skills, I am a proactive International Peer Guide at my university, dedicating time to assist and mentor international students. This role has been instrumental in refining my leadership, mentorship, and interpersonal skills, essential qualities that I bring to every team and project.
              In every endeavor, from developing applications to volunteering, I strive to combine technical expertise with a deep understanding of user needs, driving solutions that are not only efficient but also intuitive and accessible.Let's connect and explore how we can collaborate on future projects!</p>
            </div>
          </div>
        </section>
        <section id="experience" className="leftAlign">
        <div class="content-container">
          <div class="text-container">
            <h2>Experience</h2>
            <h3>Lynch fluid Controls</h3>
            <h4>May 2023 - Spetember 2023</h4>
            <p>• Designed and developed a robust order tracking web application utilizing a LAMP technology stack, focused on ensuring data integrity, security, and performance optimization. </p>
            <p>• Streamlined the order management process, resulting in improved efficiency and accuracy of order tracking by 20%.</p>
            <p>• Implemented advanced data sanitization techniques to safeguard against SQL injection and cross-site scripting (XSS) attacks.</p>
            <br></br>
            <h3>Political Party</h3>
            <h4>May 2019 - Spetember 2019</h4>
            <p>• Maintained a comprehensive database of voter demographics and voting history using MySQL and InnoDB, handling over 500,000 records. Improved data query performance by 30%, ensuring faster access and higher data integrity.</p>
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