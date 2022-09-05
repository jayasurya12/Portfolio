import React from 'react'
import './web.css';

const web = () => {
  return (
    <div className='web'>
      <div className='web-option'>
        <a href='#project'>
          <i class="fi fi-rr-edit-alt option-icon"></i>
          Project
        </a>
      </div>
      <div className='web-option'>
        <a href='#skills' >
          <i class="fi fi-rr-laptop option-icon"></i>
          Skill
        </a>
      </div>
      <div className='web-option'>
        <a href='#work' >
          <i class="fi fi-rr-briefcase option-icon"></i>
          Work
        </a>
      </div>
      <div className='web-option'>
        <a href='#contact' >
          <i class="fi fi-rr-user option-icon"></i>
          Contact
        </a>
      </div>
    </div>
  )
}

export default web