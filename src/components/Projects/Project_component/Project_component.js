import React from 'react'
import styles from './Project_component.module.css'
const Project_component = (props) => {
  return (
<>
    
    <div className='hover:text-black rounded-md text-white hover:bg-white mx-3'>
        <h1 className='  text-base font-bold  max-lg:text-sm ml-1 pt-1 mt-1 mb-0'>{props.title}</h1>
        <h2 className=' lg:text-sm  text-[lightgrey] text-sm font-bold ml-1 max-lg:text-xs  mb-0'>{props.time}</h2>
        <h2 className='text-[lightgrey]  mt-1  text-sm font-bold pb-1  ml-1 max-lg:text-xs  mb-0'>{props.tech}</h2>
    </div>
    <hr className='mx-3 p-0 mt-1 '/>
    </>
  )
}

export default Project_component

// text-white 