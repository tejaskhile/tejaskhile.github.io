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
              <a href="https://www.linkedin.com/in/tejas-khile-b0a45025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>  
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
