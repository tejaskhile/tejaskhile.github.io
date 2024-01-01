import React from 'react'
import '../styles/Project.css'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    
    <div className='projectContainer'>

      <h2 className='proheader'>Projects</h2>

      <ProjectCard
        tittle = "Codepen Clone"
        classname = "fa-brands fa-codepen"
        information = 'CodePen Clone is a web application developed using React JS that allows users to create their HTML, CSS, and JavaScript code snippets. This project aims to provide an alternative to the official CodePen platform while enhancing the user experience.'
        link = 'https://tejaskhile.github.io/codepen-clone'
        />
        <ProjectCard
        classname = "fa-solid fa-gamepad"
        tittle = "Tic Tac Toe"
        information = "In this Tic Tac Toe project, React Hooks and Context API are used to manage game states and data sharing, while React Router ensures efficient client-side navigation. This application effectively demonstrates React's capabilities and offers an interactive, responsive user experience."
        link = 'https://tic-tac-toe-one-delta.vercel.app/'
        />
        <ProjectCard
        classname = "fa-solid fa-music"
        tittle = "Music Player"
        information = 'This music player was created using HTML, CSS and JavaScript. The music player features a modern design, with a user-friendly interface that allows users to easily control their music.'
        link = 'https://music-player-gray-seven.vercel.app/'
        />
        <ProjectCard
        classname="fa-solid fa-lock"
        tittle = "Random Password Generator"
        information = 'The Random Password Generator was developed using HTML, CSS, and JavaScript. It features a user-friendly interface that allows users to create random passwords of specified length and types of characters in their password.'
        link = 'https://random-password-generator-cyan.vercel.app/'
        />
        <ProjectCard
        classname="fa-solid fa-list"
        tittle = "To-Do List"
        information = 'The To-Do List App offers a convenient and functional approach to task management. It presents a clear, user-friendly interface that enables hassle-free task manipulation, including adding and removing tasks.'
        link = 'https://to-do-app-murex-beta.vercel.app/'
        />
    </div>
  )
}

export default Projects