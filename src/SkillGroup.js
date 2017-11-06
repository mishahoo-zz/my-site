import React from 'react';
import './SkillGroup.css';
import Skill from './Skill.js';

const SkillGroup = ({type, skills}) => {
  return (
    <div>
      <h3 className="skills-title">{type}</h3>
      { skills.map(({skillName, imageUrl}) => {
        return <Skill key={skillName} skill={skillName} imageUrl={imageUrl}/>
      }) }
    </div>
  )
}

export default SkillGroup;
