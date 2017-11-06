import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';

import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';

import icons from './data/iconData.js';
import skills from './data/skillData.js';

class App extends Component {
  render() {
    return (
      <div>
        <About icons={icons}/>
        <Skills skills={skills}/>
        <Projects />
        <Contact icons={icons}/>

        <Parallax bgImage="./assets/tropicalprint.jpg" strength={400}>
          <div id="footer">Misha Hoo © 2017</div>
        </Parallax>
      </div>
    )
  }
}

export default App;
