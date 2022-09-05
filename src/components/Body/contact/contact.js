import React from 'react'
import Separator from '../../common/social-contact/separator/separator'
import SocialContact from '../../common/social-contact/social-contact'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <Separator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact/>
        </div>
        <div className='download'>
          <a download href={require('../../../assets/resume/Resume.pdf') }>
            <i className='fi fi-rr-cloud-download download-icon'></i>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact