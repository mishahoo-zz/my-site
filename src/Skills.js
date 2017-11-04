import React, { Component } from 'react';
import './Skills.css'
import Skill from './Skill.js'

class Skills extends Component {

  render() {
    const skills = this.props.skills;
    // console.log(skills);
    return (
      <div>
        <div className="image-block fixed-background">
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
        </div>
      </div>
    )
  }

}

export default Skills;
