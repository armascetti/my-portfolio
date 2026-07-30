import './App.css';
import React from 'react';
import About from './components/About';
import NavBar from './components/Navbar';

const App = () => {
  return (
    <div className="app">
      <NavBar />

      <main className="hero">
        <section className="hero-text">
          <p className="eyebrow">Full-Stack Software Engineer</p>
          <h1>
            Building thoughtful web applications with React, APIs, and AI.
          </h1>

          <p className="hero-summary">
            Former educator turned software engineer with a people-first mindset
            and strong problem-solving skills.
          </p>
        </section>

        <section className="hero-about">
          <About />
        </section>

        <section className="hero-image">
          <div className="profile-card">
            <img
              className="profile-headshot"
              src="/headshot.png"
              alt="Mandy Mascetti headshot"
            />
            <h3>Mandy Dufort</h3>
            <p>Full-Stack Software Engineer</p>
            <span>React • APIs • AI Integration</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;