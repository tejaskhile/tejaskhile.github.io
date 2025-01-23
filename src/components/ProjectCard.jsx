import React, { useState } from 'react'
import './ProjectCard.css'
import photo from "../assets/profilelogo.png"

const ProjectCard = (props) => {

  const [likeToggle, setLikeToggle] = useState(false);

  const handleLikeToggle = ()=>{
    setLikeToggle(!likeToggle);
  }

  return (
    <div className='projectCard'>
      <div className='post-header'>
        <div className='header-content'>
          <img src={photo} alt=''/>
          <div>
            <h3>Tejas Khile</h3>
            <p>@tejaskhile</p>
          </div>
        </div>
        <div>
          <i className={!likeToggle ? "likebtn fa-regular fa-heart" : "likebtn red fa-solid fa-heart"} onClick={handleLikeToggle}></i>
        </div>
        
      </div>
      
      <h4>{props.name}</h4>
      <p>{props.caption}</p>
      <br />
      <a href={props.link}><i className="link fa-solid fa-link"></i></a>
      <span className='date'>{props.date}</span>
    </div>
  )
}

export default ProjectCard;
