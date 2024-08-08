import React from 'react';
import styles from './Projects.module.css'
import Project_component from './Project_component/Project_component';
const Projects = ()=>{
    return(
        <>
       <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll',styles['bg']].join(' ')}>
       <div className=''>
        <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base 2xl:text-5xl mb-0 mt-2',styles['ah1']].join(' ')}>Projects</h1>
        <h2 className={['text-base font-bold mb-0 ml-4  max-lg:text-sm 2xl:text-3xl text-[lightgrey] lg:text-sm',styles['ah1']].join(' ')}>Projects completed : 3</h2>
      </div>
      <div className='overflow-scroll mb-4 max-lg:pb-4 max-lg:h-[175px]'>
        <Project_component title="Multiple disease prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/>
        <Project_component title="Insurance Price prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/>
        <Project_component title="Real estate price prediction system" time="Jan 2023 to Apr 2023" tech="Machine Learning"/>
      </div>
       </section>
        </>
    )
}
export default Projects;