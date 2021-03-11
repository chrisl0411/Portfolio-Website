import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/link1'>Link1</Link>
            <Link to='/link2'>Link 2</Link>
            <Link to='/link3'>Link 3</Link>
            <Link to='/link4'>Link 4</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/link1'>Link1</Link>
            <Link to='/link2'>Link 2</Link>
            <Link to='/link3'>Link 3</Link>
            <Link to='/link4'>Link 4</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/link1'>Link1</Link>
            <Link to='/link2'>Link 2</Link>
            <Link to='/link3'>Link 3</Link>
            <Link to='/link4'>Link 4</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Me</h2>
            <Link to='/link1'>Link1</Link>
            <Link to='/link2'>Link 2</Link>
            <Link to='/link3'>Link 3</Link>
            <Link to='/link4'>Link 4</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              GRIZZ {'\u00A0'}
              <i className="fas fa-campground"></i>
            </Link>
          </div>
          <small className="website-rights">GRIZZ </small>
          <div className="social-icons">
            <Link to='/' target='_blank' aria-label='facebook' className="social-icon-link facebook">
              <i className='fab fa-facebook'></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
