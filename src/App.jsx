import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Opener from './components/Opener';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Opener/>
      <Navbar/>
      <div className='app-components'>
      <Home/>
        <Routes>
            <Route path='/' element={<About/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/blogs' element={<Blog/>}/>
        </Routes>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
