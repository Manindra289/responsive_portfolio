import React, { useState,useEffect } from 'react'
import styles from './CategoryItem.module.css'
import axios from 'axios';
const CategoryItem = (props) => {

    // useEffect(()=>{
        
    // },[])

   
    function Changeblg()
    {
        console.log(props.title);
        props.setcoln(props.title);
        props.setblog_visible(false);
        // console.log(props.blogs)
        let x = props.title;
        axios.get(`http://localhost:3001/Blogs/${x}`)
        .then( (res)=>{
            props.setblog(res.data);
            console.log("DATA in change blg")
            console.log(props.blog);
        })
        .catch((err)=>console.log(err))
        console.log(props.title+" --- "+ props.coln)
        if(props.title === props.coln )
          {
            let x = document.getElementsByClassName('cls_x');
            console.log("x is ")
            x[0].style.backgroundColor = 'Red';
            console.log()
            // x[props.index].styles.backgroundColor = 'red';
            console.log("excuted")
          }
       
    }
  return (

    <div>
        <button onClick={Changeblg} className={['cls_x hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 box-content mt-4 w-[100%] rounded-lg drop-shadow-2xl max-sm:py-2 bg-white '].join(' ')}>
              <h1  className='2xl:text-5xl text-black font-bold max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl py-1.5  max-sm:py-1 '>{props.title}</h1>
        </button>
    </div>
  )
}

export default CategoryItem