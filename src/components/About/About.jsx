"use client"
import React, { useEffect, useRef } from 'react'
import './About.css'
import 'remixicon/fonts/remixicon.css';

const About = () => {

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
        <div className='about' ref={navbarRef}>
            <div className='about-left'>
                <p>We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
                </p>
                <ul>
                    <li>We started with a simple idea: do what is best for the client.</li>
                    <li>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
                    <li>
                        Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
                </ul>
            </div>
            <div className='about-right'>
                <p>We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.</p>
                <button className='right-btn'>Learn More</button>
            </div>
        </div>
    )
}

export default About
