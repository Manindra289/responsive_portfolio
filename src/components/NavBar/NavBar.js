import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
import { IoMdHome } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { SlChemistry } from "react-icons/sl";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  let [state,func] = useState(1);
  return (
    <>
        <div className='nav_cont'>
          <Link onClick={()=>{
            func(1)
          }} to="/" style={{textDecoration:"none",
            backgroundColor:(state===1)?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.3)",
            borderStartStartRadius:"2rem",
            borderEndStartRadius:"2rem",
           }}>
            <h1 className='nav_item '><IoMdHome /><span className='sp'>Home</span></h1></Link>
          <Link onClick={()=>{
            func(2)
          }}
           to="/Blogs" style={{textDecoration:"none",
            backgroundColor:(state===2)?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.3)",
            borderRadius:(state===2)?"2rem":"0rem"
           }}><h1 className='nav_item'><FaBookOpen /><span className='sp'>Blogs</span></h1></Link>


          <Link to="/Projects"  onClick={()=>{
            func(3)
          }} style={{textDecoration:"none",
            backgroundColor:(state===3)?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.3)",
            borderRadius:(state===3)?"2rem":"0rem"
           }}><h1 className='nav_item'><SlChemistry /><span className='sp'>Projects</span></h1></Link>

          <Link to="/Profile"  onClick={()=>{
            func(4)
          }} style={{textDecoration:"none",
            backgroundColor:(state===4)?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.3)",
            borderEndEndRadius:"2rem",
            borderStartEndRadius:"2rem"
           }}>
            <h1 className='nav_item'><MdOutlineAccountCircle /><span className='sp'>Profile</span></h1></Link>
    </div>
    </>
  )
}

export default NavBar