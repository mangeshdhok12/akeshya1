"use client"
import React, { useEffect, useRef } from 'react'
import './Process.css'
import  data from './data.js'

const Process = () => {

  const serviceRef= useRef(null)

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

    if (serviceRef.current) {
      observer.observe(serviceRef.current);
    }

    return () => {
      if (serviceRef.current) {
        observer.unobserve(serviceRef.current);
      }
    };
  }, [serviceRef]);
  

    return (
        <div className="more-services" ref={serviceRef}>
          {data.map((card) => (
            <div
              key={card.id}
              className="cards"
              style={{ backgroundImage: card.backgroundImage }}
            >
              <div className="card-body">
                <h3 className="card-title">
                {card.title}
                </h3>
                <p className="card-text">{card.content}</p>
                
              </div>
            </div>
          ))}
        </div>
      );
    };


export default Process
