import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Button.css'
import'./Hero.css';
import resume from '../files/Resume-Christopher Lee.docx.pdf';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <h1>Hello, my name is</h1>
        <h2>Chris Lee.</h2>
        <h3>I'm an Application Developer based in Dallas, TX.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates delectus dicta culpa officia praesentium tempora sit, eaque quas mollitia dolorem, rem repellat qui quos nisi dolores aut, non minima.</p>
      </div>
      <button className='btn--outline btn--large btn--resume'>
        <a href={resume} style={{ textDecoration: 'none', color: 'rgb(204,122,0)'}} target="_blank">Resume</a>
      </button>
      {/* without e.preventDefault, website loads into href link */}
      <button type="button" onClick={(e) => {
        e.preventDefault();
        window.location.href='https://github.com/chrisl0411';
        }}>
        <i class="fab fa-github"></i>
      </button>
      
    </div>
  )
}

export default Hero
