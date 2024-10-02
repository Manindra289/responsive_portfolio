import React from 'react'

const BlogItem = (props) => {
  return (
    <div className='rounded-lg'>
           <div className={[' cursor-pointer hover:text-black hover:bg-white rounded-2xl drop-shadow-2xl mx-2 max-sm:py-2 my-2 bg-black '].join(' ')}>
              <h1  className='2xl:text-3xl text-left hover:text-black text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-lg mx-[1rem] py-1.5  max-sm:py-1 font-bold'>{props.title}</h1>
            </div>
    </div>
  )
}

export default BlogItem