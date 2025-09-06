import React from 'react'
import '../styles/Skills.css'
import SkillComp from '../components/SkillComp'
const Skills = () => {
  return (
    <div className='skills'>
      <h2>Skills That Define Me</h2>
        <SkillComp
        icon="fa-solid fa-code"
        name="Front-End Development"
        description="Proficient in HTML5, CSS3, JavaScript (ES6+), React.js, NextJS and responsive design principles to create user-friendly, mobile-first interfaces."
        />
        <SkillComp
        icon="fa-solid fa-server"
        name="Back-End Development"
        description="Beginner backend developer with basic skills in server-side programming, database management, and API integration."
        />
        <SkillComp
        icon="fa-brands fa-git-alt"
        name="Version Control"
        description="Capable of efficiently managing on projects with Git & Github. Hands-on experience on managing branches, changes, and resolving conflicts with Git."
        />
        <SkillComp
        icon="fa-solid fa-user-tie"
        name="Professional Skills"
        description="Skilled in problem-solving, teamwork, and adapting to new technologies. Strong foundation in attention to detail, with a focus on delivering quality results."
        />
    </div>
  )
}

export default Skills
