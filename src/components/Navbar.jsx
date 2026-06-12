import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export default function NavBar() {
  return (
    <nav className='links'> 
        <Link className='nav-link' to="/projects">Projects</Link>
        <Link className='nav-link' to="/contact">Contact</Link>
        <Link className='nav-link' to="/about">About Me</Link>
    </nav>
  )
}