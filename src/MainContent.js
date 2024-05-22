import React from 'react';
import { ReactComponent as CSharpIcon } from 'devicon/icons/csharp/csharp-original.svg';
import { ReactComponent as DotNetIcon } from 'devicon/icons/dot-net/dot-net-original.svg';
import { ReactComponent as WordpressIcon } from 'devicon/icons/wordpress/wordpress-original.svg';
import { ReactComponent as GitHubIcon } from 'devicon/icons/github/github-original.svg';
import { ReactComponent as Html5Icon } from 'devicon/icons/html5/html5-original.svg';
import { ReactComponent as Css3Icon } from 'devicon/icons/css3/css3-original.svg';
import { ReactComponent as JavaScriptIcon } from 'devicon/icons/javascript/javascript-original.svg';
import { ReactComponent as PhpIcon } from 'devicon/icons/php/php-original.svg';
import { ReactComponent as ReactIcon } from 'devicon/icons/react/react-original.svg';
import { ReactComponent as AngularIcon } from 'devicon/icons/angularjs/angularjs-original.svg';
import { ReactComponent as MySQLIcon } from 'devicon/icons/mysql/mysql-original.svg';
import { ReactComponent as AzureIcon } from 'devicon/icons/azure/azure-original.svg';
import { ReactComponent as FirebaseIcon } from 'devicon/icons/firebase/firebase-plain.svg';
import { ReactComponent as FastAPIIcon } from 'devicon/icons/fastapi/fastapi-original.svg';
import { ReactComponent as Windows8Icon } from 'devicon/icons/windows8/windows8-original.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode, faHandshake, faComments, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import './MainContent.css';

function MainContent() {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-me');
      if (section) {
        const sectionPosition = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionPosition < windowHeight / 1.5) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    "C#",
    ".NET",
    "Wordpress",
    "GitHub",
    "HTML/CSS",
    "JavaScript",
    "PHP",
    "React",
    "Angular",
    "MySQL",
    "Azure",
    "APIs",
    "Google firebase",
    "Microsoft office packages"
  ];

  const AboutMeSection = () => (
    <div className="about-me-content">
      <div className="about-me-text">
        <div className="about-me-item">
          <div className="icon-paragraph">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" className="about-me-icon code-icon" />
            <div className="paragraph-container">
              <p className="paragraphMain slide-in">I'm a web developer with a passion for helping small businesses thrive in the digital world. My mission is to create beautiful, functional websites that not only reflect the unique identity of your business but also drive growth and success.</p>
            </div>
          </div>
        </div>
        <div className="about-me-item">
          <div className="icon-paragraph">
            <FontAwesomeIcon icon={faHandshake} size="3x" className="about-me-icon handshake-icon" />
            <div className="paragraph-container">
              <p className="paragraphMain slide-in">With a strong foundation in web development and a keen eye for detail, I specialize in crafting custom websites tailored to meet the specific needs of each client. Whether you're looking to establish a new online presence or update an existing site, I bring creativity, technical expertise, and a collaborative spirit to every project.</p>
            </div>
          </div>
        </div>
        <div className="about-me-item">
          <div className="icon-paragraph">
            <FontAwesomeIcon icon={faComments} size="3x" className="about-me-icon comments-icon" />
            <div className="paragraph-container">
              <p className="paragraphMain slide-in">Effective communication is at the heart of my work. Fluent in English and experienced in Agile methodologies, I ensure that our collaboration is smooth, transparent, and responsive. I believe that understanding your business goals and vision is crucial to delivering a website that not only meets but exceeds your expectations.</p>
            </div>
          </div>
        </div>
        <div className="about-me-item">
          <div className="icon-paragraph">
            <FontAwesomeIcon icon={faRocket} size="3x" className="about-me-icon rocket-icon" />
            <div className="paragraph-container">
              <p className="paragraphMain slide-in">Let's connect and discuss how we can elevate your business online. I promise to deliver a website that not only looks great but also performs seamlessly, helping you reach new heights in the digital landscape.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
  
  const getIconForSkill = (skill) => {
    switch (skill.toLowerCase()) {
      case 'c#':
        return <CSharpIcon width="64" height="64" />;
      case '.net':
        return <DotNetIcon width="64" height="64" />;
      case 'wordpress':
        return <WordpressIcon width="64" height="64" />;
      case "github":
        return <GitHubIcon width="64" height="64" />;
      case 'html/css':
        return (
          <>
            <Html5Icon width="64" height="64" />
            <Css3Icon width="64" height="64" />
          </>
        );
      case 'javascript':
        return <JavaScriptIcon width="64" height="64" />;
      case 'php':
        return <PhpIcon width="64" height="64" />;
      case 'react':
        return <ReactIcon width="64" height="64" />;
      case 'angular':
        return <AngularIcon width="64" height="64" />;
      case 'mysql':
        return <MySQLIcon width="64" height="64" />;
      case 'azure':
        return <AzureIcon width="64" height="64" />;
      case 'google firebase':
        return <FirebaseIcon width="64" height="64" />;
      case 'apis':
        return <FastAPIIcon width="64" height="64" />;
      case 'microsoft office packages':
        return <Windows8Icon width="64" height="64" />;
      default:
        return null;
    }
  };

  const SkillsSection = ({ skills }) => (
    <div className="column skills-column">
      <h2 className='skillsHeader'>Skills and Services</h2>
      <p className="services-description">I offer personalized, one-on-one services, collaborating closely with clients to build websites that meet their unique needs. Specializing in small businesses, I excel in designing and developing websites that not only establish an online presence but also drive growth and success.</p>
      <p className="services-description">My services extend beyond initial website creation. I provide ongoing support and maintenance, ensuring that your website remains up-to-date and functional. Additionally, I offer expertise in website deployment, guiding you through the process of launching your website online and providing hosting solutions.</p>
      <p className="services-description">While I have a particular fondness for React, I am proficient in a wide range of web development tools and technologies. Whether it's front-end or back-end development, I bring creativity, technical expertise, and attention to detail to every project.</p>
      <div className="skills-container">
        <div className="skills-wrapper">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              {getIconForSkill(skill)}
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );    

  const EducationSection = () => (
    <div className="column">
      <h2 className='educationHeader2'>Educational Background</h2>
      <div className="education-cards">
        <div className="education-card">
        <FontAwesomeIcon icon={faGraduationCap} size='3x' className="education-icon" />
          <h3 className='educationHeader3'>PBA at Web Development, Zealand Erhvervsakademi</h3>
          <h3 className='educationHeader3'>2022-2023</h3>
          <p className='educationParagraph'>
            My PBA degree equipped me with skills to excel independently in diverse platforms,
            applications, and media.
            It provided a understanding of back-end and front-end programming, coding, databases,
            development environments, XML, content management systems (CMS), web
            communication, and network sociology.
          </p>
        </div>
        <div className="education-card">
          <FontAwesomeIcon icon={faGraduationCap} size='3x' className="education-icon" />
          <h3 className='educationHeader3'>AP at Computer Science, Zealand Erhvervsakademi</h3>
          <h3 className='educationHeader3'>2020-2022</h3>
          <p className='educationParagraph'>
            I was equipped with practical experience and problem-solving skills, as the program
            emphasized hands-on projects and real-world applications. This prepared me for entry-level
            positions such as a software developer, IT support specialist, or system administrator.
          </p>
        </div>
      </div>
    </div>
  );    
  
  return (
    <div className="main-content">
      <div id="about-me" className={`row slide-in ${isVisible ? 'visible' : ''}`}>
        <div className="column">
          <div className="about-me-header">
            <h2 className='aboutMeHeader'>Who am I?</h2>
          </div>
          <AboutMeSection />
        </div>
      </div>
      <div id="skills" className={`row slide-in ${isVisible ? 'visible' : ''}`}>
        <SkillsSection skills={skills} />
      </div>
      <div id="education" className={`row slide-in ${isVisible ? 'visible' : ''}`}>
        <EducationSection />
      </div>
      <div class="connect-container">
        <h2>💬</h2>
        <h2 class="connect-text">
          <a href="mailto:thinlightline88@gmail.com">Let's talk about your project!</a>
        </h2>
      </div>
    </div>
  );  

}

export default MainContent;

