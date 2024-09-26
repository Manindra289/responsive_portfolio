import React from 'react'

const BlogItem = (props) => {
  let temp_des = props.description;
  temp_des = props.description.slice(0,40);
  temp_des = temp_des + '...';
  let temp_da = props.date.split('T')
  temp_da = temp_da[0];
  return (
    <div >
      <button className='hover:bg-gray-500'>
    <div className={[' rounded-lg drop-shadow-2xl mx-2 max-sm:py-2 my-2 bg-white '].join(' ')}>
        <h1  className='2xl:text-3xl text-left text-green-500 max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-lg mx-[1rem] py-1.5  max-sm:py-1 font-bold'>{props.title}</h1>
        <hr className='border-black align-middle mx-[1rem]'/>
        <p  className='2xl:text-2xl text-left text-black max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-lg mx-[1rem] py-1.5 max-sm:py-1 overflow-hidden'>{temp_des}</p>
        <p className='ml-[1rem] text-left text-sm py-1.5'> Created on {temp_da} </p>
        {console.log(temp_da)}
    </div>
    </button>


    </div>
  )
}

export default BlogItem