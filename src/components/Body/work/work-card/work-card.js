import React from 'react'
import './work-card.css';

const WorkCard = ({item}) => {
  return (
    <div className='work-card'>
        <img src={item.companyLogo} className='work-logo'/>
      <div className='work-info'>
        <h5 className='company-name'>{item.company}</h5>
        <div className='work-dates'>
          <lable>{item.dateJoining}</lable>-<label>{item.dateEnd}</label>
        </div>
        <div className='work-desc'>
          <p className='workProjects'>{item.work}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard