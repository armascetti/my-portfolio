import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css'

export default function NavBar() {
  const location = useLocation();

  return (
    <header className="navbar" role="banner">
      <div className="nav-inner">
        <Link to="/" className="brand">Mandy Mascetti</Link>
        <nav className="nav-links" role="navigation" aria-label="Main Navigation">
          <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
          <Link className={`nav-link ${location.pathname === '/projects' ? 'active' : ''}`} to="/projects">Projects</Link>
          {/* <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link> */}
          <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}