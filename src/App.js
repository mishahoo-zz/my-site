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

        <Parallax bgImage="https://ucarecdn.com/5c1f79aa-bc61-43fa-8a7f-a15df1b6fc44/tropicalPrintTall.png" strength={400}>
          <div id="footer">Misha Hoo © 2017</div>
        </Parallax>
      </div>
    )
  }
}

export default App;
