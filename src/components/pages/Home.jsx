import React from 'react'
import '../../App.css';
import Hero from '../Hero';
import Cards from '../Cards'
import Footer from '../Footer';

function Home () {
  return (
    <>
      <div className="home">
        <Hero />
      </div>
      {/* <Cards />
      <Footer /> */}
    </>
  )
}

export default Home