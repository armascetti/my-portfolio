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
          <div className="clearance-badge">
            Active Top Secret Security Clearance
          </div>
          <h1>
            Building thoughtful web applications with React, APIs, and AI.
          </h1>

          <p className="hero-summary">
            Former educator turned software engineer with a people-first mindset,
            strong problem-solving skills, and an Active Top Secret Security Clearance.
          </p>
        </section>
<section className="hero-image">
  <div className="profile-card">
    <div className="profile-initials">MM</div>
    <h3> Mandy Mascetti</h3>
    <p>Full-Stack Software Engineer</p>
    <span>React • APIs • AI Integration</span>
  </div>
</section>
      </main>

      <section className="content-section">
        <About />
      </section>
    </div>
  );
};

export default App;