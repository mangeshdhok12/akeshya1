"use client"
import React, { useEffect, useRef } from 'react'
import './Services.css'
import data from './data'

const Services = () => {

  const serviceRef= useRef(null)

  useEffect(() => {
    const currentServicesRef= serviceRef.current;
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

    if (currentServicesRef) {
      observer.observe(currentServicesRef);
    }

    return () => {
      if (currentServicesRef) {
        observer.unobserve(currentServicesRef);
      }
    };
  }, []);

  return (
    <section>
      <div className='row-container' ref={serviceRef}>

        <div className='row-card'>
        {data.map((item) => (
        <div key={item.id} className="card">
          <div className="icon">{item.icon}</div>
          <h3 className='title'>{item.title}</h3>
          <p className='description' >{item.content}</p>
        </div>
      ))}
        
        </div>
      </div>
    </section>
  )
}

export default Services
