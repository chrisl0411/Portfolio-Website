import React from 'react';
import '../../App.css';
import '../Hero.css';

export default function About() {
  return (
    <div className="about hero hero-container">
      <h2>About</h2>
      <p>Howdy!</p>
      <p>My name is Chris Lee, born and raised Texan.</p>
      <div className="hero-container inline-text">
        <p>I am currently working as an </p>
        <p style={{color: "#cc7a00"}}>Application Developer </p>
        <p>at </p>
        <p style={{color: "#cc7a00"}}>Allstate.</p>
      </div>

      <p style={{opacity: '0.5'}}>Thanks for checking out my portfolio!</p>
    </div>  
  )
}