"use client"
import React, { useEffect, useRef } from 'react'
import './Contact.css'
import { GrLocation } from "react-icons/gr";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";



const Contact = () => {

    const contactRef= useRef(null)

useEffect(() => {
   const currentContactRef= contactRef.current;
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-up"); // or any other animation class
        observer.unobserve(entry.target);
      }
    },
    {
      threshold: 0.1,
    }
  );

  if (currentContactRef) {
    observer.observe(currentContactRef);
  }

  return () => {
    if (currentContactRef) {
      observer.unobserve(currentContactRef);
    }
  };
}, []);

    return (

        <div className='contact' ref={contactRef}>
            <div className='contact-about'>
                <h3>Akeshya</h3>
                <p>Designers, developers & marketeers capable of delivering solutions according to your needs,</p>
            </div>
            <div className='contact-info'>
                <div className='info-p-icon'>
                    <div className='info-icon-div'>
                        <GrLocation className='info-icon' />  
                        </div>
                          <p>  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh 524004 </p>
                </div>
                <div className='info-p-icon'>
                    <div className='info-icon-div'>
                <MdOutlineMessage className='info-icon' />
                </div>
                 <p>  info@akeshya.com</p>
                 </div>

                 <div className='info-p-icon'>
                    <div className='info-icon-div'>
                <IoCallOutline className='info-icon' />
                </div>
                  <p> +91 94942 40922</p>
                  </div>
            </div>
            <form className='contact-form'>
                <div className='contact-form-group'>
                    <input
                        type='text'
                        name='name'
                        placeholder='Your Name'
                        required
                        className='contact-form-input'
                    />
                </div>
                <div className='contact-form-group'>
                    <input
                        type='email'
                        name='email'
                        placeholder='Your Email'
                        required
                        className='contact-form-input'
                    />
                </div>
                <div className='contact-form-group'>
                    <input
                        type='subject'
                        name='subject'
                        placeholder='Subject'
                        required
                        className='contact-form-input'
                    />
                </div>
                <div className='contact-form-group'>
                    <textarea
                        type=''
                        name='message'
                        placeholder='Message'
                        rows="5"
                        required
                        className='contact-form-input'></textarea>
                    <div className='submit-button'>   <button>Send Message</button>
                    </div>

                </div>
            </form>
        </div>


    )
}

export default Contact
