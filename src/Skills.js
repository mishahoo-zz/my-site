import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import './Skills.css'
import Skill from './Skill.js'

class Skills extends Component {

  render() {
    const skills = this.props.skills;
    // console.log(skills);
    return (
      <div>
        <Parallax className="image-block" bgImage="./assets/tropicalprint.jpg" strength={300}>
        <h1 id="skills-header">skills</h1>
        <div id="skills">

          <div className="front-end-skills">
            <h3 className="skills-title">Front-End</h3>
            { skills.frontEnd.map(({skillName, imageUrl}) => {
              return <Skill key={skillName} skill={skillName} imageUrl={imageUrl}/>
            }) }
          </div>

          <div className="back-end-skills">
            <h3 className="skills-title">Back-End</h3>
            { skills.backEnd.map(({skillName, imageUrl}) => {
              return <Skill key={skillName} skill={skillName} imageUrl={imageUrl}/>
            }) }
          </div>

          <div className="Experienced">
            <h3 className="skills-title">General</h3>
            { skills.experienced.map(({skillName, imageUrl}) => {
              return <Skill key={skillName} skill={skillName} imageUrl={imageUrl}/>
            }) }
          </div>

        </div>
        </Parallax>
      </div>
    )
  }

}

export default Skills;
