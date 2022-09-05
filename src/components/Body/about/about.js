import React from 'react'
import SocialContact from '../../common/social-contact/social-contact'
import './about.css'
const About = () => {
  return (
    <div className='about'>
      <div className='about-top'>
        <div className='about-info'>
        Hello There 👋 , I am 
        <br/><span className='info-name'>Jayasurya Guy.</span>
        <br/> I love experimenting with the web.
          <div className='about-photo'>
            <img className='picture'
            src={require('../../../assets/png/Coding.png')} />
          </div>
        </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About