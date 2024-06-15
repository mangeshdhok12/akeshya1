"use client"
import React, { useEffect, useRef } from 'react'
import './Title.css'

const Title = ({title, subTitle}) => {

  const titleRef = useRef(null);

  useEffect(() => {
    const currentTitleRef=titleRef.current;
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

    if (currentTitleRef) {
      observer.observe(currentTitleRef);
    }

    return () => {
      if (currentTitleRef) {
        observer.unobserve(currentTitleRef);
      }
    };
  }, []);

  return (
    <div className='titles' ref={titleRef}>
        <h2 className='h2'>{title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title
