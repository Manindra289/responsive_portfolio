import React, { useEffect, useState } from 'react'
import CategoryItem from './CategoryItem/CategoryItem'
import axios from 'axios';
// import { IoIosArrowRoundBack } from "react-icons/io";

const ProjectPage = () => {
    const [projar,setprojar] = useState([]);
    const [project,setproject] = useState('MDPS');
    const [project_visible,setproject_visible] = useState(true);
    const [code_arr,setcode_arr] = useState([]);
    useEffect(()=>{
        axios.get('https://portfolio-backend-eight-ivory.vercel.app/Projects')
        .then((res)=>{
          //colnar = res.data
          let arr = res.data;
          let n = arr.length;
          let tit_arr = [];
          let code_arr2 = [];
          for(let i = 0;i<n;i++)
          {
            // console.log(arr[i].title);
            tit_arr[i] = arr[i].title;
            code_arr2[i] = arr[i].code;
          }
          setcode_arr(code_arr2);
          setprojar(res.data);
          })
        .catch((err)=>console.log(err))
    
        axios.get('https://portfolio-backend-eight-ivory.vercel.app/Projects/MDPS')
        .then( (res)=>{ setproject(res.data)})
        .catch((err)=>console.log(err))
      },[])

  return (

    <div className=' w-[100vw] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className=' max-lg:flex max-lg:mb-10 lg:mb-10 max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 mt-16 justify-self-center lg:h-[85vh] min-h-[700px] w-[85vw] smallest_scn ' >
          <div className='lg:row-span-8 lg:col-span-3 col-span-9  md:col-span-2  lg:border-r-4 p-2 mt-5 mb-5 px-4 '>
                <div className='lg:row-span-1 col-span-9'>
                    <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>Projects</h1>
                    <hr className='border-white align-middle mx-4'/>
                </div>

                <div className='flex flex-col '>
          <ul>
          {
            projar.map((collection,index)=>(
              <li key={index}>
                <CategoryItem title={collection.title} code = {code_arr[index]} setproject_visible={setproject_visible} project = {project}  setproject={setproject} index = {index} />
                </li>

            ))
          }
          </ul>
        </div>
        </div>
        <div className='lg:row-span-8 col-span-9 lg:px-4 grid grid-flow-row lg:grid-rows-12 lg:grid-cols-3 mt-5 mb-5 box-border overflow-scroll '>
          
        {/* {project_visible===false ?
          <div className='lg:row-span-1 lg:col-span-9 sm:w-[100%]'>
            <h1  className='2xl:text-5xl  text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>MDPS</h1>
            <hr className='border-white col-span-3 align-middle mx-4'/>
          </div> : <div className='hidden'></div>  
        } */}
          
          {project_visible===true ?
          <div className='text-justify py-2 row-span-12 text-white rounded-3xl mx-3 bg-black h-[100%] col-span-10 lg:col-span-9 px-4  overflow-y-scroll'>
            <div className='flex flex-col py-3 '>  
              {/* <div className='flex flex-row items-center '>
                <IoIosArrowRoundBack onClick={()=>{ setproject_visible(false) }} className='inline cursor-pointer hover:bg-green-400 rounded-full p-0 ' fontSize={'2rem'} />
                <h1 className='align-baseline pl-1'> {project[0].title} </h1>
              </div> */}
              <h1 className='text-2xl max-sm:text-xl font-bold text-center w-[100%]'> {project[0].title}</h1>
              </div>
          {/* <IoIosArrowRoundBack onClick={()=>{ setblog_visible(false) }} className='inline p-0 hover:text-green-500' fontSize={'2rem'} /> <div className='inline-block w-[100%]'> <h1 className='inline-block  px-6 py-4 font-bold text-center'>     {current_blog.title}</h1> </div> */}
            <p className='px-6 pb-4 selection:bg-pink-600'>{project[0].description}</p>
          </div> : <div className='hidden'></div> }



        </div>
        </div>
    </div>
  )
}

export default ProjectPage