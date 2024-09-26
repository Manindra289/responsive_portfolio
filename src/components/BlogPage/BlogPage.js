import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoryItem from './CategoryItem/CategoryItem';
import BlogItem from './BlogItem/BlogItem';
import { IoIosArrowRoundBack } from "react-icons/io";

const BlogPage = () => {
  // let collections = ["collection 1 ","collection 2"];
  // let blogs = [
  //   [
  //     { title: 'blog1', description: 'description 1' },
  //     { title: 'blog2', description: 'description 2' },
  //     { title: 'blog3', description: 'description 3' }
  //   ],
  //   [
  //     { title: 'b1', description: 'd 1' },
  //     { title: 'b2', description: 'd 2' },
  //     { title: 'b3', description: 'd 3' }
  //   ]
  // ];
  //let colnar = ['collection 1','collection 2'];


  const [colnar,setcolnar] = useState([]);
  const [blog,setblog] = useState([]);
  const [coln,setcoln] = useState('Psychology');

  // viewing blog and option to hide it
  // aready blog data is in the blog, when button is clicked change the current_blog state
  // create current_blog state variable and blog_visible states - to make blog completely visible

  const [current_blog, setcurrent_blog] = useState('');
  const [blog_visible,setblog_visible] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:3001/Blogs')
    .then((res)=>{
      //colnar = res.data
      setcolnar(res.data);
      console.log("IN blog page : ")
       console.log(res.data)
      })
    .catch((err)=>console.log(err))

    axios.get('http://localhost:3001/Blogs/Psychology')
    .then( (res)=>{ setblog(res.data);})
    .catch((err)=>console.log(err))


  },[])


  return (
    <div className=' w-[100vw] lg:h-[100vh] lg:grid-rows-1 lg:grid-cols-1 grid grid-cols-1'>
      <div className=' max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-8 lg:grid-cols-12 max-lg:mt-14 lg:self-center justify-self-center lg:h-[85vh] w-[85vw] smallest_scn' >
      <div className='lg:row-span-8 lg:col-span-3 col-span-9  md:col-span-2  border-r-4 p-2 mt-5 px-4 '>
      <div className='lg:row-span-1 col-span-9'>
            <h1  className='2xl:text-5xl text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>Blogs Category</h1>
            <hr className='border-white align-middle mx-4'/>
      </div>
      
      <div className='flex flex-col '>
          <ul>
          {
            colnar.map((collection,index)=>(
              <li key={index}>
                <CategoryItem title={collection} setblog_visible={setblog_visible}  blog={blog} setblog={setblog} setcoln = {setcoln} coln = {coln} />
                </li>
            ))
          }
          </ul>
        </div>
      </div>
      <div className='lg:row-span-8 col-span-9 lg:px-4 grid grid-flow-row lg:grid-rows-12 lg:grid-cols-3 mt-5 mb-5 box-border overflow-scroll '>

      {blog_visible===false ?
          <div className='lg:row-span-1 lg:col-span-9 sm:w-[100%]'>
            <h1  className='2xl:text-5xl  text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>{coln}</h1>
            <hr className='border-white col-span-3 align-middle mx-4'/>
          </div> : <div className='hidden'></div> }
          {blog_visible===false ? <div className='grid col-span-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:col-span-9 px-4 w-[100%]'>
          {/* {blog.map((element)=>(<h1 className=''>{element.title} {element.description}</h1>))} */}
          {/* {<div>{blog.map((element)=>(<BlogItem date={element.date} title={element.title} description={element.description}/>))}</div> && blog_visible } */}
           {blog.map((element)=>(<BlogItem date={element.date} setblog_visible = {setblog_visible} setcurrent_blog = {setcurrent_blog} title={element.title} description={element.description}/>))} <div className='hidden'></div>
          </div> :<div className='hidden'></div> }
          {blog_visible===true ?
          <div className='text-justify py-2 row-span-12 text-white rounded-3xl mx-3 bg-[#01010199] h-[100%] col-span-10 lg:col-span-9 px-4  overflow-y-scroll'>
            <div className='flex flex-col py-3 '>  
              <div className='flex flex-row items-center '>
                <IoIosArrowRoundBack onClick={()=>{ setblog_visible(false) }} className='inline cursor-pointer hover:bg-pink-400 rounded-full p-0 ' fontSize={'2rem'} />
                <h1 className='align-baseline pl-1'>{coln} </h1>
              </div>
              <h1 className=' font-bold text-center w-[100%]'> {current_blog.title}</h1>
              </div>
          {/* <IoIosArrowRoundBack onClick={()=>{ setblog_visible(false) }} className='inline p-0 hover:text-green-500' fontSize={'2rem'} /> <div className='inline-block w-[100%]'> <h1 className='inline-block  px-6 py-4 font-bold text-center'>     {current_blog.title}</h1> </div> */}
            <p className='px-6 pb-4'>{current_blog.description}</p>
          </div> : <div className='hidden'></div> }
      </div> 

      </div>
    </div>
  )
}

export default BlogPage