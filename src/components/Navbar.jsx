import { Link, Element} from 'react-scroll'
import React, { useState } from 'react'
import '../styles/Navbar.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
// import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [dropdown, setDropdown] = useState(false);
    const [toggleBar, setToggleBar] = useState(false);

    const dropdownMenu = () => {
        setDropdown(!dropdown);
    }

    const toggle = () =>{
        setToggleBar(!toggleBar);
    }

  return (
    <>
    <nav>
      <div className='logo'>
        {/* <img src={logo} alt="Logo"/> */}
        <h1>tk<span>.</span></h1>
      </div>
      <div>
        <ul className={dropdown ? "dropdownMenu": "navItems"}>
            <Link to='home' smooth={true} duration={500}>Home</Link>
            <Link to='about' smooth={true} duration={500}>About</Link>
            {/* <NavLink to='/blogs'>Blogs</NavLink> */}
            <Link to='projects' smooth={true} duration={500}>Projects</Link>
            <Link to='contact' smooth={true} duration={500}>Contact</Link>
        </ul>
      </div>
      <div className='menuIcon'>
        
        <i className= {toggleBar ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
         onClick={()=>{
          toggle();
          dropdownMenu();
         }}
         />

      </div>
    </nav>

    <div className='components'>
      <div>
        <Element name="home"> 
          <Home/>
        </Element>
      </div>

      <div>
        <Element name="about"> 
          <About/>
        </Element>
      </div>

      <div>
        <Element name="projects"> 
          <Projects/>
        </Element>
      </div>

      <div>
        <Element name="contact"> 
          <Contact/>
        </Element>
      </div>
    </div>
    </>
  )
}

export default Navbar
