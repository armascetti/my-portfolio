import React from 'react'
import NavBar from './Navbar'
import '../styles/Projects.css'
import connectFour from '../Images/connect-four.png'
import meme from '../Images/meme.png'
import spacey from '../Images/spacey.png'
import marvel from '../Images/marvel.jpg'

export default function Projects() {
  return (
    <>
      <NavBar />
      <div className='projects-container'>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={connectFour} alt="connect-four" />
            </div>
            <div className="flip-card-back">
              <a href="https://flamboyant-jones-f31ba0.netlify.app/">Connect-Four</a>
              <h5> Javascript | HTML | CSS </h5>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={meme} alt="meme" /></div>
            <div className="flip-card-back">
              <div className="project-title">Meme-Masters</div>
              <a className="repo-link" href="https://github.com/armascetti/Meme-Masters.git">Repo</a>
              <h5> MongoDB | Node.js | Express.js | Meme API </h5>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={spacey} alt="spacey" /></div>
            <div className="flip-card-back">
              <div className="project-title">Spacey</div>
              <a className="repo-link" href="https://github.com/armascetti/Spacey.git">Repo</a>
              <h5>Python | Django | PostgreSQL | NASA APOD API </h5>
            </div>
          </div>
        </div>


        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img className="project-img" src={marvel} alt="spacey" /></div>
            <div className="flip-card-back">
              <div className="project-title">Make Your Marvel</div>
              <a className="repo-link" href="https://github.com/armascetti/make-your-marvel.git">Repo</a>
              <h5>Node.JS | MongoDB | JavaScript | React |Sass |  Marvel API | Express.js </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}