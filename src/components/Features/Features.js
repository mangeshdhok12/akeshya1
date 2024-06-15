"use client"
import React, { useEffect, useRef } from 'react'
import './Features.css'
import   {FeaturesData} from './FeaturesData.js'

const Features = () => {

  const featureRef= useRef(null)
  
  useEffect(() => {
    const currentFeatureRef= featureRef.current;
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

    if (currentFeatureRef) {
      observer.observe(currentFeatureRef);
    }

    return () => {
      if (currentFeatureRef) {
        observer.unobserve(currentFeatureRef);
      }
    };
  }, []);

    return (
      <div className="feature-container" ref={featureRef}>
        {FeaturesData.map((feature) => (
          <div key={feature.id} className="feature-item">
            <div className="feature-icon">{feature.emote}</div>
            <h3 className="feature-title">{feature.title}</h3>
          </div>
        ))}
      </div>
    );
  };

export default Features
