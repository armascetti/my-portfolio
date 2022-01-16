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
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img style={{ height: "140px", padding: "8%" }} src={connectFour} alt="connect-four" />
            </div>
            <div class="flip-card-back">
              <a style={{ color: "ivory" }} href="https://flamboyant-jones-f31ba0.netlify.app/"> Connect-Four</a>
              <h5> Javascript | HTML | CSS </h5>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img style={{ height: "140px", padding: "8%" }} src={meme} alt="meme" /></div>
            <div class="flip-card-back">
              <a style={{ color: "ivory" }} href="https://meme-master.herokuapp.com/allMemes"> Meme-Masters! </a>
              <h5> MongoDB | Node.js | Express.js | Meme API </h5>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img style={{ height: "140px", padding: "8%" }} src={spacey} alt="spacey" /></div>
            <div class="flip-card-back">
              <a style={{ color: "ivory" }} href="https://spacey-space.herokuapp.com/">Spacey</a>
              <h5>Python | Django | PostgreSQL | NASA APOD API </h5>
            </div>
          </div>
        </div>


        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img style={{ height: "140px", padding: "8%" }} src={marvel} alt="spacey" /></div>
            <div class="flip-card-back">
              <a style={{ color: "ivory" }} href="https://make-your-marvel.herokuapp.com/"> Make Your Marvel</a>
              <h5>Node.JS | MongoDB | JavaScript | React |Sass |  Marvel API | Express.js </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}