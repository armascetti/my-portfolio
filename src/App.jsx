import './App.css';
import React from 'react';
import family from './Images/family.png'
import About from './components/About'
import NavBar from './components/Navbar';

const App = () => {
  return (
    <><div className='title'>
      <h2>Welcome to My Portfolio</h2>
    </div>
      <NavBar />
      <div className='homepage'>
        <div className='about'>
          <About />
        </div>
        <div className="family">
          <div className="fancy-border">
            <img className="family-img" src={family} alt="the fam" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App 
