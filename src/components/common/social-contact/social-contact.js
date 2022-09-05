import React from 'react'
import {SocialData} from '../../data/social'
import './social-contact.css'
const SocialContact = () => {
  return (
    <div className='social-contact'>
        {
            SocialData.map(item=>{
                return(
                    <a href={item.link}>
                        <div className='social-icon-div '>
                            <img 
                            className='social-icon'
                            src={item.icon}/>
                        </div>
                    </a>
                )
            })
        }
    </div>
  )
}

export default SocialContact