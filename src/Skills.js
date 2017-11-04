import React from 'react';
import Skill from './Skill.js'

class Skills extends React.Component {

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
              { skills.frontEnd.map((skill) => { return <Skill key={skill.skillName} skill={skill.skillName} imageUrl={skill.imageUrl}/>}) }
            </div>
            <div className="back-end-skills">
              <h3 className="skills-title">Back-End</h3>
              { skills.backEnd.map((skill) => { return <Skill key={skill.skillName} skill={skill.skillName} imageUrl={skill.imageUrl}/>}) }
            </div>
            <div className="Experienced">
              <h3 className="skills-title">General</h3>
              { skills.experienced.map((skill) => { return <Skill key={skill.skillName} skill={skill.skillName} imageUrl={skill.imageUrl}/>}) }
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Skills;
