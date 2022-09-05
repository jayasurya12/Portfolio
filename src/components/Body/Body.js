import React from 'react'
import About  from './about/about'
import Project from './projects/project';
import Skills from './skills/skill';
import Work from './work/work'
import Contact from './contact/contact'

import './Body.css';

const Body = () => {
  return (
    <div className='body'>
      <section id='about'>
        <About/>
      </section>
      <section id='project'>
        <Project />
      </section>
      <section id='skills'>
        <Skills/>
      </section>
      <section id='work'>
        <Work/>
      </section>
      <section id='contact'>
        <Contact/>
      </section>
    </div>
  )
}

export default Body