import React from 'react'
import Menu_bar from '../Menu_bar/Menu_bar'

const BlogPage = () => {
  return (
    <div className=' w-[100vw] lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className=' max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 lg:self-center justify-self-center lg:h-[85vh] w-[85vw] smallest_scn' >
      <div className='lg:row-span-8 lg:col-span-3 border-r-4 p-2 mt-5 '>
        <h1>Blog Section</h1>
        
      </div>
      <div className='lg:row-span-8 lg:col-span-7 mt-5 mb-10 box-border'>
        <h1>Body section</h1>
      </div>

      </div>
    </div>
  )
}

export default BlogPage