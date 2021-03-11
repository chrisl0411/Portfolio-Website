import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Photography from './components/pages/Photography';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/photography' component={Photography} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
