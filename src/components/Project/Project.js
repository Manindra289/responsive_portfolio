import React from 'react'
import Style from './Project.module.css'
import AboutMe from '../AboutMe/AboutMe'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu_bar from '../Menu_bar/Menu_bar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Form from '../Form/Form'
import Blog from '../Blog/Blog';
const Project = () => {
  return (
    <div className='w-[100vw] lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className={[' max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 lg:self-center justify-self-center lg:h-[85vh] w-[85vw]',Style['smallest_scn']].join(' ')}>
        {/* <div className='absolute -top-10 max-lg:invisible'> */}
        <div className='row-span-1 col-span-12'><Menu_bar/></div>
        <div className='flex flex-col lg:grid lg:row-span-12 lg:col-span-12 lg:w-[100%] lg:grid-rows-12 lg:grid-cols-12 p-2'>
          <div className='row-span-6 col-span-12 lg:row-span-6 lg:col-span-8 lg:justify-self-center '>
            <AboutMe/>
          </div>
          <div className='lg:row-span-6 lg:col-span-4 '>
            <Projects/>
          </div>
          <div className='lg:row-span-6 lg:col-span-4'>
            <Skills/>
          </div>
          <div className='lg:row-span-6 lg:col-span-4'>
            <Blog/>
          </div>
          <div className='lg:row-span-6 lg:col-span-4'>
            <Form/>
          </div>          
        </div>
      </div>
      
    </div>
  )
}
export default Project