"use client"
import React, { useState, useEffect } from "react";
import './Navbar.css'

import { GoArrowUp } from "react-icons/go";


import Link from "next/link";




const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);   
  const [isVisible, setIsVisible]= useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true)
        setScrolled(true);
      } else {
        setIsVisible(false)
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //back to top click fn
  const scrollToTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }


  const [mobileMenu, setMobileMenu]= useState(false)

  const toggleMobileNav = () => {
    setMobileMenu(!mobileMenu);
  };

  const hideMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    
      <header className={scrolled ? "header-scrolled" : ""}>
        <div className='containers'>
      <div className='logo-heading'>
      <a>
    <img src= 'https://akeshya.com/assets/img/logo.png' alt='' className='logo'/>
    </a>
    
      <h1 className='heading'><Link href='/' >AKESHYA</Link></h1> 
      </div>
      <div className="mobile-nav-toggle" onClick={toggleMobileNav}>
            {mobileMenu ? "✖" : "☰"}
          </div>
      
      <div className={`nav-link ${mobileMenu ? " navbar-mobile" : ""}`}>
        
      <ul  className={mobileMenu? '': 'hide-mobile-menu'}>
      

        <li><Link href="/home">Home</Link>  </li>
        <li><Link href="/about">About</Link>  </li>
        <li><Link href="/services">Services</Link> </li>
        <li className='btn'><Link href="/contact">Contact Us</Link></li>
      </ul>
      
      </div>
      </div>
   
      {mobileMenu && <div className="overlay" onClick={hideMobileMenu}></div>}
      
      {/* back to top button */}
      <div
      className={`back-to-top ${isVisible ? "active" : ""}`}
      onClick={scrollToTop}
    >
      
  
      <i><GoArrowUp  className="up-arrow" /></i>
    </div>
      </header>
   
  )
}

export default Navbar
