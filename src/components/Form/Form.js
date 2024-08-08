import React from 'react'
import styles from './Form.module.css'
const Form = () => {
  return (
    <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll pb-2',styles['bg']].join(' ')}>
      <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base 2xl:text-5xl mb-0 mt-2',styles['ah1']].join(' ')}>Contact me</h1>
      <hr className='mx-3 mt-2 p-0 mb-1'/>
      {/* 2 input fields Email, description and reset and submit buttons   */}
      <form>
        <div className='mx-3 py-2 '>
          {/* <input className='box-border w-[100%] bg-[black] text-white rounded-full 
          pl-2 p-1 font-bold cursor-text focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500'  type='text' placeholder='Enter Email' /> */}
    {/* <!-- Using form state modifiers, the classes can be identical for every input --> */}
        <input type="email" class='font-bold block w-full px-3 py-2 cursor-text bg-black rounded-full text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      valid:text-sky-500
    '  placeholder='John@gmail.com'/>
        </div>
        <div className='box-border mx-3'>
        <textarea className='resize-none w-[100%] text-sm shadow-sm font-bold bg-[black]
         text-white rounded-2xl pl-3 p-2 focus:outline-none
         ' id="w3review" rows="5" placeholder='Enter Description'>
        </textarea>
        </div>
        <div className='mx-3 my-1'>
        <button className='bg-white text-black font-bold py-1 px-4 rounded-full text-base' type='reset'>Reset</button>
        <button className='bg-[#0d6efd] py-1 px-4 mx-1 text-white font-bold rounded-full text-base'  type='submit' onClick={(event)=>{
          event.preventDefault();
          console.log("submitted");
          }
          }> Submit </button>
        </div>
      </form>
    </section>
  )
}

export default Form