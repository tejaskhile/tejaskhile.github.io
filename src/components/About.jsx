import React from 'react'
import '../styles/About.css'
import Card from './Card';

const About = () => {
  return (
    <div className='aboutPage'>
      <div className="about-me">
        
          <h2>About me</h2>
          <p>
            Hii, I'm Tejas Khile, a fresher and self-taught passionate Frontend web developer, with a fresh and enthusiastic approach to the field.
            I am a 2nd year Btech student with a set of skills and a strong passion for web development.
            I have experience working with various programming languages and frameworks, including HTML, CSS, JavaScript, and React.
            My skills have been developed through hands-on learning and a focus on creating user-friendly and visually appealing websites. <br />
            Thank you for visiting my portfolio website, and I hope you enjoyed learning more about me and my work.
          </p>
        
      </div>
      <div>
        <h2 className='aboutHeader'>
          What I Know
        </h2>
      </div>
      <div className="cards">
        <Card 
        image = "fa-solid fa-code"
        name = "Frontend Development"
        para = "My skills include proficiency in HTML, CSS and JavaScript, as well as familiarity with frontend frameworks and libraries like React js."
        />
        <Card
        image = "fa-solid fa-pen"
        name = "Responsive Web Design"
        para = "I have expertise in RWD design, flexible images, and media queries. This ensures optimal user experience across various devices and platforms."
        />
      </div>
    </div>
  )
}

export default About
