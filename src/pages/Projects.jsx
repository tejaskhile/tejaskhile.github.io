import React from 'react'
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className='projects'>
      <p className='project-header'>Checkout my recent activity:</p>
      <div>
        <ProjectCard 
        caption="My Portfolio is now live! Explore my work and achievements. Your feedback is most welcome, checkout now!"
        link="/"
        date="Jan 2025"
        />
        <ProjectCard 
        name="Codepen-project"
        caption="Built a CodePen clone with React! Live HTML, CSS, and JS editing with real-time preview. Perfecting the art of interactive coding environments.<br/> #ReactJS #WebDevelopment"
        link="https://tejaskhile.github.io/codepen-clone/"
        date="Dec 2023"
        />

        <ProjectCard 
        name="Tic Tac Toe"
        caption="This application effectively demonstrates React's capabilities and offers an interactive, responsive user experience. #WebDevelopment"
        link="https://tic-tac-toe-one-delta.vercel.app/"
        date="Oct 2023"
        />
        <ProjectCard 
        name="Music Player"
        caption="This music player was created using HTML, CSS and JavaScript. The music player features a modern design, with a user-friendly interface that allows users to easily control their music. #WebDevelopment"
        link="https://music-player-gray-seven.vercel.app/"
        date="Oct 2023"
        />
      </div>
    </div>
  )
}

export default Projects;
