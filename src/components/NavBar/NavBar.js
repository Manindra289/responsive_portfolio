import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useLocation } from 'react-router-dom';
const NavBar = () => {
  let [state,func] = useState(1);
  const l = useLocation();
  useEffect(()=>{
    changecol();
  })

  function changecol()
  {
    if(l.pathname === '/')
    {

      func(1);
    }
    else if(l.pathname === '/Blogs')
    {
      func(2);
    }
    else if(l.pathname === '/Projects')
      {
        func(3);
      }
      else
        {
          func(4);
        }
  }
 
  return (
    <>
        <div className='nav_cont'>
          <Link onClick={()=>{
            
            changecol();
            func(1);
          }}  to="/" style={{textDecoration:"none",
            backgroundColor:(state===1)?"black":"rgba(128, 128, 128, 0.3)",
            borderStartStartRadius:"2rem",
            borderEndStartRadius:"2rem",
            borderStartEndRadius:(state===1)?"2rem":"0rem",
            borderEndEndRadius:(state===1)?"2rem":"0rem"
            
           }}>
            <h1 className='nav_item '><IoMdHome /><span className='sp'>Home</span></h1></Link>
          <Link onClick={()=>{
            
            changecol();
            func(2);
          }} 
           to="/Blogs" style={{textDecoration:"none",
            backgroundColor:(state===2)?"black":"rgba(128, 128, 128, 0.3)",
            borderRadius:(state===2)?"2rem":"0rem"
           }}><h1 className='nav_item'><FaBookOpen /><span className='sp'>Blogs</span></h1></Link>


          <Link to="/Projects"  onClick={()=>{
            
            changecol();
            func(3);
          }}  style={{textDecoration:"none",
            backgroundColor:(state===3)?"black":"rgba(128, 128, 128, 0.3)",
            borderRadius:(state===3)?"2rem":"0rem"
           }}><h1 className='nav_item'><SlChemistry /><span className='sp'>Projects</span></h1></Link>

          <Link to="/Profile"  onClick={()=>{
            changecol();
            func(4);
          }}  style={{textDecoration:"none",
            backgroundColor:(state===4)?"black":"rgba(128, 128, 128, 0.3)",
            borderEndEndRadius:"2rem",
            borderStartEndRadius:"2rem",
            borderStartStartRadius:(state===4)?"2rem":"0rem",
            borderEndStartRadius:(state===4)?"2rem":"0rem"
           }}>
            <h1 className='nav_item'><MdOutlineAccountCircle /><span className='sp'>Profile</span></h1></Link>
    </div>
    </>
  )
}

export default NavBar