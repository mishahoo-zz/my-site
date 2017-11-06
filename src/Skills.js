import React from 'react';
import { Parallax } from 'react-parallax';
import './Skills.css'
import SkillGroup from './SkillGroup.js'

const Skills = ({skills}) => {

    return (
      <div>
        <Parallax className="image-block" bgImage="./assets/tropicalprint.jpg" strength={300}>
        <h1 id="skills-header">skills</h1>
        <div id="skills">
          {skills.map((skillGroup) => {
            return <SkillGroup key={skillGroup.type} type={skillGroup.type} skills={skillGroup.skills} />
          })}
        </div>
        </Parallax>
      </div>
    )

}

export default Skills;
