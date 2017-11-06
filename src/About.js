import React from 'react';
import './About.css'
import Icon from './Icon.js';

const About = ({icons}) => {
  return (
    <div>
      <div className="top-icons">
        {icons.map((icon) => {
          return <Icon key={icon.url} href={icon.href} url={icon.url} className={"overlay-two small-icons"}/>
        })}
      </div>
      <div id="top-main">
        <h1 id="name">misha hoo</h1>
        <img id="self-photo" src="./assets/self.png" alt="portrait"></img>
        <div className="about-info">
          <h1 id="title" className="animated animatedFadeUp fadeUp">
            <span className="title-line full-stack">full-stack</span>
            <span className="title-line">software engineer</span>
          </h1>
          <p id="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default About;
