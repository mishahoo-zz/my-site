import React, { Component } from 'react';
import './App.css';

import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Icon from './Icon.js';
import Contact from './Contact.js';

import icons from './data/iconData.js';
import skills from './data/skillData.js';

class App extends Component {
  render() {
    return (
      <div>
        <div className="top-icons">
          {icons.map((icon) => {
            return <Icon key={icon.url} href={icon.href} url={icon.url} className={"overlay-two small-icons"}/>
          })}
        </div>

        <About />
        <Skills skills={skills}/>
        <Projects />
        <Contact icons={icons}/>

        <div id="footer">Misha Hoo © 2017</div>
      </div>
    )
  }
}

export default App;
