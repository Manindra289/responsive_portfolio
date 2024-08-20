import React from 'react'
import Style from './Project.css'
import AboutMe from '../AboutMe/AboutMe'
// import 'bootstrap/dist/css/bootstrap.min.css'; 
import Menu_bar from '../Menu_bar/Menu_bar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Form from '../Form/Form'
import Blog from '../Blog/Blog';
import { useState,useReducer } from 'react';
import webdevImg from '../../assets/Course_1_front_end.png';
import MLImg from '../../assets/ML_Certificate.png';
import myimg from '../../assets/myImg.png'

const Project = () => {
  const [visible,setvisible] = useState(false);
  const [certficate,dispatch] = useReducer(reducer,0);
  function reducer(state,action)
  {
    // console.log(action.name)
    if(action.name === 'profile'){
      state = myimg;
      return state;
    }
    else if(action.name==='Web Development')
      {
        state = webdevImg;
        return state;
      }
    else if(action.name === 'Machine Learning')
      {
        state = MLImg;
        return state;
      }
      else
      {
        state = 0;
        return state;
      }
    
  }
  function handleClick()
  {
    if(visible === true)
      {
        let x = document.body.getElementsByClassName('preview')
        x[0].style.visibility = "hidden"
        setvisible(false)
        dispatch({name:0})
      }
  }
  






  return (
    <>
    <div className='w-[100vw] lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className=' max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 lg:self-center justify-self-center lg:h-[85vh] w-[85vw] smallest_scn' >
        {/* <div className='absolute -top-10 max-lg:invisible'> */}
        <div className='row-span-1 col-span-12'>
          <Menu_bar data = {visible} func = {setvisible} func2 = {dispatch}/>
          </div>
        <div className='flex flex-col lg:grid lg:row-span-12 lg:col-span-12 lg:w-[100%] lg:grid-rows-2 lg:grid-cols-12 p-2'>
          <div className=' col-span-12  lg:col-span-8 lg:justify-self-center '>
            <AboutMe/>
          </div>
          <div className=' lg:col-span-4 '>
            <Projects/>
          </div>
          <div className=' lg:col-span-4'>
            <Skills func={dispatch} visfunc = {setvisible}/>
          </div>
          <div className=' lg:col-span-4'>
            <Blog/>
          </div>
          <div className=' lg:col-span-4'>
            <Form/>
          </div>          
        </div>
      </div>
      
    </div>
    <div className='preview' onClick={handleClick} >
    <img className='imge' src={certficate} alt='This is pic'/>
  </div>
  </>
  )
}
export default Project