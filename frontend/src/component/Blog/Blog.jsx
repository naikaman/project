import React from 'react'
import './Blog.css'
import { assets } from '../../assets/assets'
const Blog = () => {
  return (
    <div className='blog' id='blog'>
        <p>One cake a day, keeps stress away!</p>
        <div className="blog_list">
            <video src={assets.video1}></video>
        </div>
      
    </div>
  )
}

export default Blog
