import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css';
import logo from './logo/CL_coffee_logo.png'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  //use useEffect react hook
  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* add div so that initials are not affected by smaller window */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item logo'>
            <img className='logo' src={logo} alt="Logo"/>
          </li>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-home"></i> {'\u00A0'} Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-info-circle"></i> {'\u00A0'} About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Projects' className='nav-links' onClick={closeMobileMenu}>
            <i class="fas fa-laptop-code"></i> {'\u00A0'} Projects
            </Link>
          </li>
        </ul>
        {button && <Button buttonStyle='btn--outline' linkName='Contact'>Contact</Button>}
      </div>
    </nav>
    </>
  )
}

export default Navbar
