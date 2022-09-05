import React from 'react'
import {ProjectData} from '../../data/projects'
import ProjectCard from './project-card/project-card'
import Separator from '../../common/social-contact/separator/separator';
import './project.css';

const Project = () => {
  return (
    <div className='projects'>
        <Separator />
      <label className='section-title'>Projects</label>
      <div className=''>
        {ProjectData.map(project=>{
          return(
            <ProjectCard project={project}/>
          )
        })}
      </div>
    </div>
  )
}

export default Project