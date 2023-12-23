import React from 'react'
import '../App.css'
import '../styles/Home.css'


const Home = () => {
  return (
      <div className="hero">
        <div className='content'>
          <span>
            Hello, I'm
          </span>
          <h2>
            tejas khile
          </h2>
          <h5>
            Frontend web developer
          </h5>
          <p>
            Developer devoted to crafting beautiful web experiences focused on simplicity and purpose.
          </p>

          <div className='media'>
            <div className="social-media">
              <a href="https://github.com/tejaskhile"><i className="fa-brands fa-github"></i></a>
              <a href="/"><i className="fa-brands fa-linkedin"></i></a>  
            </div>

            {/* <button id='resume-btn'>
              resume
            </button> */}
          </div>
          

        </div>
        <div className="sideImages">
          <div className='upperPlate'></div>
          <div className='lowerPlate'></div>
        </div>
      </div>
  )
}

export default Home
