import React from 'react';
import styles from './Projects.module.css'
import Project_component from './Project_component/Project_component';
import { Link } from 'react-router-dom';
const Projects = ()=>{
    return(
        <>
       <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll',styles['bg']].join(' ')}>
       <div className=''>
        <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base  mb-0 mt-2',styles['ah1']].join(' ')}>Projects</h1>
        <h2 className={['text-base font-bold mb-0 ml-4  max-lg:text-sm text-[lightgrey] lg:text-sm',styles['ah1']].join(' ')}>Projects completed : 4</h2>
        <hr className='mx-3 p-0 mt-1 '/>
      </div>
      <div className='overflow-scroll mb-4 max-lg:pb-4 max-lg:h-[175px]'>
      <Link to='/Projects'>  <Project_component title="Multiple disease prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/></Link>
      <Link to='/Projects'>  <Project_component title="Insurance Price prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/></Link>
      <Link to='/Projects'>  <Project_component title="Real estate price prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/></Link>
      <Link to='/Projects'>  <Project_component title="Weather Application using React" time="Jan 2024 to Apr 2024" tech="Machine Learning"/></Link>
      </div>
       </section>
        </>
    )
}
export default Projects;