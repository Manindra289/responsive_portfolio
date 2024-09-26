import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CategoryItem from './CategoryItem/CategoryItem';
import BlogItem from './BlogItem/BlogItem';

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
                <CategoryItem title={collection} blog={blog} setblog={setblog} setcoln = {setcoln} />
                </li>
            ))
          }
          </ul>
        </div>
      </div>
      <div className='lg:row-span-8 col-span-9 lg:px-4 grid grid-flow-row lg:grid-rows-12 lg:grid-cols-3 mt-5 mb-10 box-border overflow-scroll '>
          <div className='lg:row-span-1 lg:col-span-9 sm:w-[100%]'>
            <h1  className='2xl:text-5xl  text-white max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl ml-[1.5rem] font-bold'>{coln}</h1>
            <hr className='border-white col-span-3 align-middle mx-4'/>
          </div>
          <div className='grid col-span-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:col-span-9 px-4 w-[100%]'>
          {/* {blog.map((element)=>(<h1 className=''>{element.title} {element.description}</h1>))} */}
          {blog.map((element)=>(<BlogItem date={element.date} title={element.title} description={element.description}/>))}
          </div>


      </div> 

      </div>
    </div>
  )
}

export default BlogPage