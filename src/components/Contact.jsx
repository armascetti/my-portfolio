import React from 'react';
import NavBar from './Navbar';
import Animation from './Animation'
import phone from '../assets/animation/phone.json'
import Pdf from '../Documents/ArmascettiResume.pdf'

export default function Contact() {
  return (
    <>
      <NavBar />
      <h1>Here is Where You Can Reach Me: </h1>
      <div className='phone'>
        <p>Phone: 301-325-0747</p>
      </div>
      <div className='email'>
        <p>Email: armascetti@gmail.com</p>
      </div>
      <div className='github'>
        <a href="https://github.com/armascetti" target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <a href={Pdf} target="_blank" rel="noreferrer">Download Resume</a>
      <Animation animData={phone}></Animation>
    </>
  )
}