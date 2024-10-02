import React from 'react'
import styles from './AboutMe.module.css'
import cv_loc from "../../assets/Manindra_Resume_New.pdf";
const AboutMe = () => {
  return (
    <>
    <section className={['lg:grid lg:relative max-lg:pb-2 lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll mb-2',styles['bg']].join(' ')}>
      <div className='lg: h-[50px]'>
        <h1 className={['mb-1 pt-2 align-middle text-white text-xl font-bold  ml-4 mt-2 max-lg:text-lg 2xl:text-5xl max-lg:pt-2',styles['ah1']].join(' ')}>About me</h1>
        <hr className= 'mx-3 mt-2 p-0 mb-1 '/>
      </div>
      <div className='lg:overflow-scroll '>
        <p className={['text-white lg:text-sm ml-6 mr-4 max-lg:text-sm mb-2 text-justify 2xl:text-3xl pt-2'].join(' ')}>
        Hi! I'm Manindra, 
        My journey in web development started with a curiosity for how websites work, 
        which quickly evolved into a full-blown passion for creating seamless and efficient 
        user experiences. This curiosity has since transformed into a deep passion for 
        building seamless and efficient user experiences on the web. I thrive on the excitement 
        of uncovering new knowledge and broadening my horizons with every learning opportunity.
        his curiosity has since transformed into a deep passion for building seamless and efficient user experiences on the web.
        his curiosity has since transformed into a deep passion for building seamless and efficient user experiences on the web.
        </p>
        </div>
        <div className={[' lg:my-2 2xl:bottom-6 lg:text-sm max-lg:pb-4 2xl:text-3xl',styles['l_and_c']].join(' ')}>
          <a rel="noreferrer" className={['max-lg:text-xs',styles['linked']].join(' ')}   href='https://www.linkedin.com/in/manindrakhandyana' target='_blank'>Get in touch</a>
          <a rel="noreferrer" className={['max-lg:text-xs',styles['cv']].join(' ')}  href={cv_loc} download>Download CV</a>
        </div>
    </section>
    </>
  )
}

export default AboutMe



