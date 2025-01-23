import React from 'react'
import './BlogPost.css'

const BlogPost = (props) => {
  return (
    <div className='blog-container'>
        <div className='blog-header'>
            <h4>{props.name}</h4>
            <p id='date'>{props.date}</p>
        </div>
            <p>{props.desc1}</p>
            <br/>
            <p>{props.desc2}</p><br/>
            <p>{props.desc3}</p><br/>
    </div>
  )
}

export default BlogPost
