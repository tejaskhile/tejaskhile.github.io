import React from 'react'
import '../styles/Blog.css'
import BlogPost from '../components/BlogPost'

const Blog = () => {
  return (
    <div className='blog'>
      <BlogPost
      name="My Experience with Front-End Programming"
      date="20 Jan"
      desc1="I was amazed by how websites could transform concepts into interactive experiences when I first began learning to code. I started by making basic static pages using HTML, CSS, and JavaScript, then I progressively added interactivity."
      desc2="My projects reached new heights as I experimented with frameworks like React and Vue.js. I learned how to handle routing, manage state, and create scalable web apps thanks to these technologies."
      desc3="I've had a rewarding and hard experience, and I'm excited to keep developing as a front-end developer."
      />
    </div>
  )
}

export default Blog
