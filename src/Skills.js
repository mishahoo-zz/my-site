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
          {['frontEnd', 'backEnd', 'general'].map((skillType) => {
            return <SkillGroup key={skillType} type={skillType} skills={skills[skillType]} />
          })}
        </div>
        </Parallax>
      </div>
    )

}

export default Skills;
