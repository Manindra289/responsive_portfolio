import React from 'react'
import styles from './Blog.module.css'
const Blog = () => {
  return (
    <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll pb-2',styles['bg']].join(' ')}>
        <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base 2xl:text-5xl mb-0 mt-2',styles['ah1']].join(' ')}>Blogs</h1>
        <hr className='mx-3 mt-2 p-0 mb-1'/>
    </section>
  )
}

export default Blog