"use client"
import React, { useEffect, useRef } from 'react'
import './Hero.css'


const Hero = () => {
  const heroRefs = useRef({});

  useEffect(() => {
    const currentHeroRefs = heroRefs.current;
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

    Object.values(currentHeroRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      Object.values(currentHeroRefs).forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className='hero' >
      <div className='hero-left'
        ref={(el) => (heroRefs.current["left"] = el)}
        data-animation="animate-up"
      >
        <h1>Grow your business with Akeshya
        </h1>
        <h2>We are team of talented website designers, developers & digital marketeers</h2>
        <div >
          <button className='hero-btn'>Get Started</button>
        </div>

      </div>
      <div className='hero-right' 
     ref={(el) => (heroRefs.current["right"] = el)}
     data-animation="animate-right"

      >
        <img src='hero-img.jpg' alt='hero-mg'
          className="hero-right" />
      </div>

    </div>
  )
}

export default Hero
