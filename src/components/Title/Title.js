"use client"
import React, { useEffect, useRef } from 'react'
import './Title.css'

const Title = ({title, subTitle}) => {

  const navbarRef = useRef(null);

  useEffect(() => {
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

    if (navbarRef.current) {
      observer.observe(navbarRef.current);
    }

    return () => {
      if (navbarRef.current) {
        observer.unobserve(navbarRef.current);
      }
    };
  }, [navbarRef]);

  return (
    <div className='titles' ref={navbarRef}>
        <h2 className='h2'>{title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title
