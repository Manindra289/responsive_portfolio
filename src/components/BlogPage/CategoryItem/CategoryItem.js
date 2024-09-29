
import axios from 'axios';
import { useEffect } from 'react';
const CategoryItem = (props) => {

    useEffect(()=>{
      let ele = document.body.getElementsByClassName('cls_x');
        ele[0].style.backgroundColor = 'lightgreen';
      
        
    },[])

   
    function Changeblg()
    {
        props.setcoln(props.title);
        props.setblog_visible(false);
        // console.log(props.blogs)
        let x = props.title;
        axios.get(`https://portfolio-backend-eight-ivory.vercel.app/Blogs/${x}`)
        .then( (res)=>{
            props.setblog(res.data);
        })
        .catch((err)=>console.log(err))
        let ele = document.body.getElementsByClassName('cls_x');
        // ele[props.index].style.backgroundColor = 'Red';
        let n = ele.length;
        for(let i = 0;i<n;i++)
        {
          if(i === props.index)
            ele[i].style.backgroundColor = 'lightgreen';
          else
            ele[i].style.backgroundColor = 'White';
        }
        
       
    }
  return (

    <div>
        <button onClick={Changeblg} className={['cls_x hover:bg-green-400 active:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 box-content mt-4 w-[100%] rounded-lg drop-shadow-2xl max-sm:py-2 bg-white '].join(' ')}>
              <h1  className='2xl:text-5xl text-black font-bold max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-xl py-1.5  max-sm:py-1 '>{props.title}</h1>
        </button>
    </div>
  )
}

export default CategoryItem