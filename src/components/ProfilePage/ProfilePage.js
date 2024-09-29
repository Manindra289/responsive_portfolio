import React from 'react'
import myImg from '../../assets/myImg.png'
import styles from './ProfilePage.module.css'
import { FaInstagram } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import webImgp from '../../assets/web_img2.png'
import mlImg from '../../assets/ml_img.png'
import cmpImg from '../../assets/cp_img.png'
import backendImg from '../../assets/backend_img.png'
import { FaSquareGithub } from "react-icons/fa6";

const ProfilePage = () => {
  
  return (
    <div className=' w-[100vw] max-lg:mb-10 lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className=' max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 lg:self-center justify-self-center lg:h-[85vh] w-[85vw] smallest_scn' >
          <div className='lg:row-span-8 lg:col-span-4 lg:border-r-4 p-2 mt-5 mb-5'>
          <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>Profile Section</h1>
          <hr className='border-white align-middle mx-4'/>
            
            <div className='grid grid-cols-1 mt-4 px-2'>
              <div className='justify-self-center'>
                <img alt='Manindra' src={myImg} className='h-60 w-60 rounded-full border-4 border-green-300 drop-shadow-2xl'/>
              </div>
              <div className={['mt-4 rounded-lg drop-shadow-2xl mx-2 max-sm:py-2 ', styles['bg']].join(' ')}>
              <h1  className='2xl:text-5xl text-green-500 font-bold max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] py-1.5  max-sm:py-1 '>Name</h1>
              <hr className='border-white align-middle mx-5'/>
              <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] py-1.5 max-sm:py-1'>Manindra Khandyana</h1>
              </div>
              <div className={['mt-4 rounded-lg drop-shadow-2xl mx-2 max-sm:py-2 ', styles['bg']].join(' ')}>
              <h1  className='2xl:text-5xl text-green-500 font-bold max-sm:p-0 p-[0.1rem]  pl-0 max-sm:text-base text-xl ml-[1.5rem] py-1.5 max-sm:py-1 '>About</h1>
              <hr className='border-white align-middle mx-5'/>
              <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] py-1.5 max-sm:py-1'>Student</h1>
              </div>
            </div>
          </div>
          <div className='lg:row-span-8 lg:col-span-8 mt-5 mb-10 box-border'>
            <div className={[' h-[100%] w-[1fr] rounded-3xl drop-shadow-2xl mx-6 pt-2 ', styles['bg']].join(' ')}>
              
              <div className='pt-5'>
                <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>Description</h1></div>
              <div>

              <p className={['text-white lg:text-sm ml-6 mr-6 max-lg:text-sm mb-2 text-justify 2xl:text-3xl pt-2'].join(' ')}>
              Hi! I'm Manindra, My journey in web development started with a curiosity for how websites work, which quickly evolved into a full-blown passion for creating seamless and efficient user experiences. This curiosity has since transformed into a deep passion for building seamless and efficient user experiences on the web. I thrive on the excitement of uncovering new knowledge and broadening my horizons with every learning opportunity. his curiosity has since transformed into a deep passion for building seamless and efficient user experiences on the web.
              </p>

              </div>

              
             
             <div className='lg:absolute lg:bottom-0'>

              <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>Interested In</h1>
              <hr className='border-white align-middle mx-4'/>
              <div className= ' mb-4  grid grid-cols-4 grid-rows-1 max-sm:grid-cols-1 max-lg:grid-cols-2 w-[100%] gap-5  max-sm:box-border p-4'>
              <div className=' border-white border-2 justify-self-center rounded-2xl box-border p-2'>
                <div className='flex justify-center'>
                  <img alt='Web development' src={webImgp} className='object-cover  w-32 h-24 rounded-2xl max-lg:w-[100%] max-lg:h-[80%]' />
                </div>
                <h1 className={['mb-1 pt-2 align-middle text-white text-md font-bold  text-center mt-2 max-lg:text-lg 2xl:text-5xl max-lg:pt-2',styles['ah1']].join(' ')}>React development</h1>
              </div>



              <div className=' border-white border-2 justify-self-center rounded-2xl box-border p-2'>
                <div className='flex justify-center'>
                  <img alt='Machine Learning' src={mlImg} className='object-cover  w-32 h-24 rounded-2xl max-lg:w-[100%] max-lg:h-[80%]' />
                </div>
                <h1 className={['mb-1 pt-2 align-middle text-white text-md font-bold  text-center mt-2 max-lg:text-lg 2xl:text-5xl max-lg:pt-2',styles['ah1']].join(' ')}>Machine Learning</h1>
              </div>

              <div className=' border-white border-2 justify-self-center rounded-2xl box-border p-2 flex flex-col max-lg:justify-between ' >
                <div className='flex justify-center'>
                  <img alt='Backend' src={backendImg} className='object-cover  w-32 h-24 rounded-2xl max-lg:w-[100%] max-lg:h-[80%]' />
                </div>
                <h1 className={['mb-1 pt-2 align-middle text-white text-md font-bold  text-center mt-2 max-lg:text-lg 2xl:text-5xl max-lg:pt-2',styles['ah1']].join(' ')}>Backend development</h1>
              </div>


              <div className=' border-white border-2 justify-self-center rounded-2xl box-border p-2 '>
              <div className='flex justify-center '>
                <img alt='Comp' className='object-cover  w-32 h-24 rounded-2xl max-lg:w-[100%] max-lg:h-[80%]' src={cmpImg} />
                </div>
                <h1 className={['mb-1 pt-2 align-middle text-white text-md font-bold  text-center mt-2 max-lg:text-lg 2xl:text-5xl max-lg:pt-2',styles['ah1']].join(' ')}>Compitative Programming</h1>
              </div>

              <div className='flex col-span-full justify-center 2xl:text-5xl  text-pink-500 max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-3xl ml-[1.5rem] font-bold '>
                  <div className='mr-4 '><a rel="noreferrer" className={['max-lg:text-2xl',styles['linked']].join(' ')}   href='https://www.linkedin.com/in/manindrakhandyana' target='_blank'> <FaLinkedin className='hover:bg-white cursor-pointer rounded-sm'/> </a></div>
                  <div className='mr-4'><a rel="noreferrer" className={['max-lg:text-2xl',styles['linked']].join(' ')}   href='https://github.com/Manindra289' target='_blank'> <FaSquareGithub className='hover:bg-white cursor-pointer rounded-sm' /> </a></div>
                  <div className='mr-4'><a rel="noreferrer" className={['max-lg:text-2xl',styles['linked']].join(' ')}   href='https://www.instagram.com/manindra_khandyana' target='_blank'> <FaInstagram className='hover:bg-white cursor-pointer rounded-sm' /> </a></div>
                  <div className='mr-4'><a rel="noreferrer" className={['max-lg:text-2xl',styles['linked']].join(' ')}   href='https://t.me/manindra2003' target='_blank'> <FaTelegramPlane className='hover:bg-white cursor-pointer rounded-sm' /></a></div>
              </div>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProfilePage
