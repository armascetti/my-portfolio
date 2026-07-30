import React from 'react';
import NavBar from './Navbar';
import '../styles/Projects.css';

import weatherDashboard from '../Images/weather-dashboard.png';
import meme from '../Images/meme.png';
import spacey from '../Images/spacey.png';
import marvel from '../Images/marvel.jpg';
import connectFour from '../Images/connect-four.png';

export default function Projects() {
  const projects = [
    {
      title: 'AI Weather Dashboard',
      image: weatherDashboard,
      description:
        'Built a full-stack weather dashboard featuring real-time weather data, 5-period forecasting, and AI-generated weather briefings. Integrated OpenWeather, GeoDB Cities, and OpenAI APIs through a secure Node.js/Express backend.',
      tech: [
        'React',
        'Node.js',
        'Express',
        'OpenAI',
        'OpenWeather API',
        'GeoDB API',
      ],
      repo: 'https://github.com/armascetti/AI-Weather-Dashboard',
    },
    {
      title: 'Make Your Marvel',
      image: marvel,
      description:
        'MERN stack application that allows users to search and explore Marvel characters using the Marvel API and a responsive React frontend.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Marvel API'],
      repo: 'https://github.com/armascetti/make-your-marvel',
    },
    {
      title: 'Spacey',
      image: spacey,
      description:
        'Python and Django application utilizing NASA’s Astronomy Picture of the Day API with PostgreSQL database integration.',
      tech: ['Python', 'Django', 'PostgreSQL', 'NASA API'],
      repo: 'https://github.com/armascetti/Spacey',
    },
    {
      title: 'Meme Masters',
      image: meme,
      description:
        'Full-stack meme application built with MongoDB, Express, and Node.js using a third-party meme API.',
      tech: ['MongoDB', 'Node.js', 'Express', 'API Integration'],
      repo: 'https://github.com/armascetti/Meme-Masters',
    },
    {
      title: 'Connect Four',
      image: connectFour,
      description:
        'Classic Connect Four game built with JavaScript, HTML, and CSS featuring DOM manipulation and game-state logic.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      repo: 'https://github.com/armascetti',
    },
  ];

  return (
    <>
      <NavBar />

      <section className="projects-page">
        <div className="projects-header">
          <p className="eyebrow">Portfolio</p>
          <h1>Featured Projects</h1>

          <p>
            A collection of full-stack, API-driven, and AI-powered applications
            showcasing my growth as a software engineer.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}