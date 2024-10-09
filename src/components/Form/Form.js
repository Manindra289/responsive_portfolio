import React, {useRef} from 'react'
import styles from './Form.module.css'
// import nodemailer from 'nodemailer'
import emailjs from 'emailjs-com';

import { useState } from 'react';

const Form = () => {

    const form = useRef();
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
    

    // Validate the form after each input change
    validateForm({ ...formData, [name]: value });


    
  };

  const validateForm = (data) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex pattern
    const isEmailValid = emailPattern.test(data.email); // Check if email is valid
    const isMessageValid = data.message.length >= 3;    // Check if message is at least 3 characters
    setIsValid(isEmailValid && isMessageValid);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (isValid) {
      setFormData({
        email: "",
        message: ""
      })
      alert("Form submitted successfully!");
      emailjs.sendForm('service_h7x4oyc', 'template_xs3pguz', e.target,'UtCZOztOdliNpJ-YW')
      .then(
        () => {
            console.log("Form submitted successfully!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
      // Handle form submission logic here
    }
    else
    {
      alert("Email should be valid, Description should be >=3 characters")
    }
    console.log(formData)
  };

  

  return (
    <section className={['lg:flex lg:flex-col lg:box-border w-[100%] h-[100%] rounded-3xl lg:overflow-scroll pb-2',styles['bg']].join(' ')}>
      <h1 className={['text-white text-xl font-bold  ml-4 pt-2 max-lg:text-base mb-0 mt-2',styles['ah1']].join(' ')}>Contact me</h1>
      <hr className='mx-3 mt-2 p-0 mb-1'/>
      
      <form onSubmit={handleSubmit} ref={form} >
        <div className='mx-3 py-2 '>
        <input type="email" 
        className='font-bold block w-full px-3 py-2 cursor-text
       bg-black rounded-full text-sm shadow-sm placeholder-slate-400
       text-white outline-none
     '  placeholder='Enter Mail'  name="email"
    value={formData.email}
    onChange={handleChange}
    required/>
        </div>
        <div className='box-border mx-3'>
        <textarea className='resize-none w-[100%] text-sm shadow-sm font-bold bg-[black]
         text-white rounded-2xl pl-3 p-2 focus:outline-none
         ' id="w3review" rows="5" placeholder='Enter Description'
         name="message"
          value={formData.message}
          onChange={handleChange}
         >
        </textarea>
        </div>
        <div className='mx-3 my-1'>
        <button onClick={()=>{
          setFormData({
            email:"",
            message:""
          })

        }} className='bg-white hover:bg-black hover:text-white text-black font-bold py-1 px-4 rounded-full text-base' type='reset'>Reset</button>
        <button   type='submit' id='sb1'
        className='  bg-[#0d6efd] py-1 px-4 mx-1 text-white font-bold rounded-full text-base'
        
         > Submit </button>
        </div>
        {/*  */}
      </form>
    </section>
  )
}

export default Form