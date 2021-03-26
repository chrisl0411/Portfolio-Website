import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Button.css'
import './Hero.css';
import resume from '../files/Resume-Christopher Lee.docx.pdf';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero hero-container'>
      <h1>Hello, my name is</h1>
      <h2>Chris Lee.</h2>
      <h3>I'm an Application Developer based in Dallas, TX.</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates delectus dicta culpa officia praesentium tempora sit, eaque quas mollitia dolorem, rem repellat qui quos nisi dolores aut, non minima.</p>
      <button className='btn--outline btn--large btn--resume'>
        <a href={resume} style={{ textDecoration: 'none', color: 'rgb(204,122,0)'}} target="_blank">Resume</a>
      </button>
      {/* without e.preventDefault, website loads into href link */}
      <div className='social'>
        <button type="button" className='btn--social' onClick={(e) => {
          e.preventDefault();
          window.location.href='https://github.com/chrisl0411';
          }}>
          <i class="fab fa-github"></i> Github
        </button>
        <button type="button" className='btn--social' onClick={(e) => {
          e.preventDefault();
          window.location.href='https://www.linkedin.com/in/chris-lee-5a952b109/';
          }}>
          <i class="fab fa-linkedin"></i> LinkedIn
        </button>
        <button type="button" className='btn--social' onClick={(e) => {
          e.preventDefault();
          window.location.href='mailto:chrisl0411@gmail.com ';
          }}>
          <i class="far fa-envelope"></i> Email Me
        </button>
      </div>  
    </div>
  )
}

export default Hero
