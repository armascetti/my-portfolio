import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export default function NavBar() {
  return (
    <nav className='links'> 
        <Link style={{ textDecoration: "none", marginLeft: "2%"}}to="/projects">Projects</Link>
        <Link style={{ textDecoration: "none", marginLeft: "2%"}}to="/contact"> Contact</Link>
        <Link style={{ textDecoration: "none", marginLeft: "2%"}}to="/about"> About Me </Link>
    </nav>
  )
}