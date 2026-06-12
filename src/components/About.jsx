import React from 'react'
import '../styles/About.css'

export default function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-card'>
          <h2>Technical</h2>
          <p>A Software Engineer with a passion to create maintainable, efficient code. Dedicated to problem solving and critical thinking in a collaborative environment. Committed to working through technical problems with an innovative team. Strong communicative and organizational skills with the ability to thrive in a learning environment.</p>
        </div>
        <div className='about-card alt'>
          <h2>Non-Technical</h2>
          <p>I am a mother to 3 children and step mother to twins. Family is everything to me, and I am a proud and dedicated mother. I am also a special education teacher turned software engineer. I've worked in the autism community for over 5 years so the decision to switch careers was difficult, but the autism/special needs community will always be close to me. I enjoy the outdoors, hiking, exercising, and traveling.</p>
        </div>
      </div>
    </>
  )
}