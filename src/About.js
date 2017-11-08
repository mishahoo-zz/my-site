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
            I am a full-stack software engineer/ designer based in Austin, TX.
            I like to keep things simple and clean, but also fun. Working in web
            development allows me to focus on things I like best: Creating relevant
            solutions for all kinds of ideas, working with people, and learning
            about what’s new out there.
          </p>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default About;
