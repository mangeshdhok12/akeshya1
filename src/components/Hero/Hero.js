"use client"
import React, { useEffect, useRef } from 'react'
import './Hero.css'


const Hero = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    elementRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className='hero' >
      <div className='hero-left'  ref={(el) => (elementRefs.current[1] = el)}
        data-animation="animate-up"
        >
     <h1>Grow your business with Akeshya
      </h1>
<h2>We are team of talented website designers, developers & digital marketeers</h2>
    <div >
      <button className='hero-btn'>Get Started</button>
      </div>
     
    </div>
    <div className='hero-right'  ref={(el) => (elementRefs.current[2] = el)}
        data-animation="animate-right"
        
        >
        <img src='hero-img.jpg' alt='hero-mg'
         className="hero-right"/>
      </div>

    </div>
  )
}

export default Hero
