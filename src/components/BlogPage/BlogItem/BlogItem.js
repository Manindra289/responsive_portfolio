import React from 'react'

const BlogItem = (props) => {
  let temp_des = props.description;
  temp_des = props.description.slice(0,40);
  temp_des = temp_des + '...';
  let temp_title = props.title;
  temp_title = props.title.slice(0,30);
  temp_title = temp_title+ '...'
  let temp_ye = props.date.split('T')
  temp_ye = temp_ye[0];
  function setting_blg(){
    props.setcurrent_blog(
      {
        title: props.title,
        description : props.description,
        date: props.temp_da,
      }
    );
    props.setblog_visible(true);
  }
  return (
    <div >
      <button onClick={setting_blg} className='h-[100%] hover:bg-black cursor-pointer rounded-lg max-lg:w-[100%]'>
    <div className={[' rounded-lg drop-shadow-2xl mx-2 max-sm:py-2 my-2 bg-white '].join(' ')}>
        <h1  className='2xl:text-3xl text-left text-green-500 max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-lg mx-[1rem] py-1.5  max-sm:py-1 font-bold'>{temp_title}</h1>
        <hr className='border-black align-middle mx-[1rem]'/>
        <p  className='2xl:text-2xl text-left text-black max-sm:p-0 p-[0.1rem] pl-0 max-sm:text-base text-lg mx-[1rem] py-1.5 max-sm:py-1 overflow-hidden'>{temp_des}</p>
        <p className='ml-[1rem] text-left text-sm py-1.5'> Created on {temp_ye} </p>
        {/* {console.log(temp_ye)} */}
    </div>
    </button>


    </div>
  )
}

export default BlogItem