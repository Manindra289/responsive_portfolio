import React from 'react'
import styles from './Project_component.module.css'
const Project_component = (props) => {
  return (
    <div>
        <hr className='mx-3 mt-2 p-0 mb-1'/>
        <h1 className='text-white text-base font-bold  ml-4 max-lg:text-sm 2xl:text-3xl mb-0'>{props.title}</h1>
        <h2 className=' lg:text-sm text-[lightgrey] text-sm font-bold  ml-4  max-lg:text-xs 2xl:text-2xl mb-0'>{props.time}</h2>
        <h2 className='text-[lightgrey]  text-sm font-bold  ml-4 max-lg:text-xs 2xl:text-2xl mb-0'>{props.tech}</h2>
    </div>
  )
}

export default Project_component

// text-white 