import React, { useState } from "react";
import "./ProjectCard.css";
import photo from "../assets/profilelogo.png";
import projects from "../assets/projects";

const ProjectCard = () => {
  const [likeToggles, setLikeToggles] = useState(
    projects.map(() => false)
  );

  const handleLikeToggle = (index) => {
    setLikeToggles((prev) =>
      prev.map((toggle, i) => (i === index ? !toggle : toggle))
    );
  };

  return (
    <div>
      {
        projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="post-header">
              <div className="header-content">
                <img src={photo} alt="" />
                <div>
                  <h3>Tejas Khile</h3>
                  <p>@tejaskhile</p>
                </div>
              </div>
              <div>
                <i
                  className={
                    !likeToggles[index]
                      ? "likebtn fa-regular fa-heart"
                      : "likebtn red fa-solid fa-heart"
                  }
                  onClick={() => handleLikeToggle(index)}
                ></i>
              </div>
            </div>
            <h4>{project.name}</h4>
            <p>{project.caption}</p>
            <br />
            <a href={project.link}>
              <i className="link fa-solid fa-link"></i>
            </a>
            <span className="date">{project.date}</span>
          </div>
        ))
      }
    </div>
  );
};

export default ProjectCard;
