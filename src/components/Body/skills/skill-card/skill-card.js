import React from 'react'
import './skill-card.css'
const SkillCard = ({skill}) => {
  return (
    <div className='skill-card'>
      <div className='skill-icon'>
        <img src={skill.img}/>
        {/* {skill.icon} */}
      </div>
      <lable className='skill-name'>{skill.name}</lable>
    </div>
  )
}

export default SkillCard