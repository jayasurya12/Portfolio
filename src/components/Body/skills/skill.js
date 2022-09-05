import React from 'react'
import Separator from '../../common/social-contact/separator/separator'
import { SkillsData } from '../../data/Skills'
import SkillCard from './skill-card/skill-card'
import './skill.css'

const Skill = () => {
  const data = SkillsData;
  return (
    <div className='skills'>
        <Separator/>
        <lable className='section-title'>
         Skills 
        </lable>
        <div className='skill-container'>
          {data.map(item=>{
            return(
              <div className='skills-section'>
                <lable className='skills-section-title'>
                  {item.type}
                </lable>
                <div className='skills-list'>
                  {item.list.map(skills=>{
                    return (
                      <SkillCard skill={skills}/>
                  )
                  })}
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Skill