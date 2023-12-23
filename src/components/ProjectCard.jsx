import React from 'react'
import '../styles/Project.css'

const ProjectCard = (props) => {
  return (
    <>

    <div className='top-card'>
      <div className="projectImage">
          <i className={props.classname} alt="ProjectImage" />
      </div>
      <div className='projectcard'>
          <div className="projectContent">
              <h2>{props.tittle}</h2>
              <p>{props.information}</p>
              <div>
                  <a 
                  rel='noopener noreferrer' 
                  href={props.link} >
                    <i id='linkBtn' class="fa-solid fa-link" style={{color: "#fff"}} ></i>
                  </a>
              </div>
          </div>
      </div>
    </div>
    
    </>
  )
}

export default ProjectCard;
