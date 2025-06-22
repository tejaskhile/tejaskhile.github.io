import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Home.css";
import photo from "../assets/profilelogo.png";
// import bg from '../assets/bg.jpeg'
import { useLocation } from "react-router-dom";
import Animation from "../components/Animation";

const Home = () => {
  const location = useLocation();

  return (
    <div className="home-content">
      <div className="first-section">
        <div id="animation" className="bg-video">
          {/* <img src={bg} alt="img" /> */}
          <Animation />
        </div>
        <div className="photo">
          <img src={photo} alt="" id="photo-div"></img>
          <a className="flw-btn" href="https://www.instagram.com/tejaskhile_">
            Follow<i className="fa-brands fa-instagram"></i>
          </a>
          {/* {clicked && <i className="like-anime fa-solid fa-heart"></i>} */}
        </div>
      </div>

      <div className="second-third-section">
        <div className="second-section">
          <h1>Tejas Khile</h1>
          <h4>
            Crafting seamless digital experiences, one line of code at a time.
          </h4>
          <p>Full Stack Web Developer, Dreamer.</p>
        </div>

        <div className="second-mid-section">
          <div className="info-content">
            <i className="icons fa-solid fa-briefcase"></i>
            <h5>Available</h5>
          </div>
          <div className="info-content">
            <i className="icons fa-solid fa-cake-candles"></i>
            <h5>8th Oct</h5>
          </div>
          <div className="info-content">
            <i className="icons fa-solid fa-calendar-days"></i>
            <h5>Joined Jan 2025</h5>
          </div>
          <div className="info-content">
            <i className="icons fa-solid fa-location-dot"></i>
            <h5>Maharashtra, India</h5>
          </div>
        </div>

        <div className="links">
          <a href="https://www.linkedin.com/in/tejas-khile-b0a45025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/tejaskhile">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="https://t.me/TejasKhile">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>

        {/* Resume */}
        <div className="resume">
          <button className="resume-btn" onClick={() => window.open("/resume1.pdf", "_blank")}>
            View Resume
          </button>
        </div>

        <div className="third-section">
          <div className="sections">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  location.pathname === "/" || isActive ? "active" : ""
                }
                end
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
