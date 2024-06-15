import About from '@/components/About/About'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'
// import '../../components/Navbar/Navbar.css'
// import '../../components/Footer/Footer.css'
// import '../../components/About/About.css'
import Counts from '@/components/Counts/Counts'
import Title from '@/components/Title/Title'


const page = () => {
  return (
   <>
   
   <Title title="About Us" />
   <About  />
   <Counts/>
 
   </>
  )
}

export default page
