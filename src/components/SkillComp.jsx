import React from 'react'
import './SkillComp.css'


const SkillComp = (props) => {
  return (
    <div className='skill-card'>
        <div id='skill-icon'>
            <i class={props.icon}></i>
        </div>
        <div className='skill-content'>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    </div>
  )
}

export default SkillComp
