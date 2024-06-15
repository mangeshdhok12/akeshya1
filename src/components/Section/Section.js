'use client'
import React, { useEffect, useRef } from 'react'
import './Section.css'



const Section = () => {

  const sectionRef = useRef(null);

  useEffect(() => {
    const currentSectionRef= sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-left"); // or any other animation class
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section className='sections'>
      <div className='container'  ref={sectionRef}>
        <div className='row'>
            <div className='img'> <img src="/client-1.png" alt='img' className='image'/> </div>
            <div className='img'> <img src="/client-2.png" alt='img' className='image'/> </div>
            <div className='img'> <img src="/client-3.png" alt='img' className='image'/> </div>
            <div className='img'> <img src="/client-4.png" alt='img' className='image'/> </div>
            <div className='img'> <img src="/client-5.png" alt='img' className='image image5'/> </div>
            <div className='img'> <img src="/client-6.png" alt='img' className='image'/> </div>
        </div>
      </div>
    </section>
  )
}

export default Section
