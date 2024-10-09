import React from 'react'
import styles from './Blog.module.css'
import BlogItem from './BlogItem/BlogItem'
import { Link } from "react-router-dom";
const Blog = () => {
  return (
    <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll',styles['bg']].join(' ')}>
      <div className=''>
        <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base  mb-0 mt-2',styles['ah1']].join(' ')}>Blogs</h1>
        <hr className='mx-3 mt-2 p-0 mb-1'/>
      </div>
      <div className='flex flex-col overflow-scroll max-lg:pb-5'>
        <Link to={'/Blogs'}> <BlogItem title="Psychology"/></Link>
        <Link to={'/Blogs'}><BlogItem title="Philosophy"/></Link>
        <Link to={'/Blogs'}><BlogItem title="See more ... "/></Link>
      </div>


   </section>
    
  )
}

export default Blog