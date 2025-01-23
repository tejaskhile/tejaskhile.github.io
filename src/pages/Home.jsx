import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Home.css'
import photo from "../assets/profilelogo.png"
// import bg from '../assets/bg.jpeg'
import { useLocation } from 'react-router-dom'
import Animated from '../components/Animated'


const Home = () => {

  const [clicked, Setclicked] = useState(false)
  const location = useLocation();

  const likeToggle =()=>{
    Setclicked(!clicked);
    setTimeout(() => {
      Setclicked(false)
    }, 1000);
  }


  return (
    <div className="home-content">
      <div className="first-section">
        <div id='animation' className='bg-video'>
          {/* <img src={bg} alt="img" /> */}
          <Animated/>
        </div>
        <div className='photo'>
          <img src={photo} alt='' id='photo-div'></img>
          <button className='like-btn' onClick={likeToggle}>Like <i className="fa-regular fa-heart"></i></button>
          {clicked && <i className="like-anime fa-solid fa-heart"></i>}
        </div>
      </div>

      <div className='second-third-section'>
        <div className="second-section">
          <h1>Tejas Khile</h1>
          <h4>Crafting seamless digital experiences, one line of code at a time.</h4>
          <p>Full Stack Web Developer, Dreamer.</p>
        </div>

        <div className='second-mid-section'>
          <div className='info-content'>
            <i className="icons fa-solid fa-briefcase"></i>
            <h5>Available</h5>
          </div>
          <div className='info-content'>
            <i className="icons fa-solid fa-cake-candles"></i>
            <h5>8th Oct</h5>
          </div>
          <div className='info-content'>
           <i className="icons fa-solid fa-calendar-days"></i>
           <h5>Joined Jan 2025</h5>
          </div>
          <div className='info-content'>
            <i className="icons fa-solid fa-location-dot"></i>
            <h5>Maharashtra, India</h5>
          </div>
        </div>

        <div className='links'>
          <a href="https://www.instagram.com/tejaskhile_"><i class="fa-brands fa-instagram"></i></a>
          {/* <a href="/"><i class="fa-brands fa-linkedin"></i></a> */}
          <a href="https://github.com/tejaskhile"><i class="fa-brands fa-github"></i></a>
          <a href="https://t.me/TejasKhile"><i class="fa-brands fa-telegram"></i></a>
        </div>


        {/* Resume */}
       <div></div>
        {/* Send a message */}

        <div className="third-section">
          <div className='sections'>
              <li><NavLink to="/about"  
              className={({isActive}) => location.pathname === '/' || isActive ? 'active' : ''}
              end>About</NavLink></li>
              <li><NavLink to="/skills" >Skills</NavLink></li>
              <li><NavLink to="/projects" >Projects</NavLink></li>
              <li><NavLink to="/blogs" >Blogs</NavLink></li>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
