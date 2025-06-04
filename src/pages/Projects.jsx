import React from 'react'
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className='projects'>
      <p className='project-header'>Checkout my recent activity:</p>
        <ProjectCard/>
    </div>
  )
}

export default Projects;
