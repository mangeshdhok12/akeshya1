import About from "@/components/About/About"
import Contact from "@/components/Contact/Contact"
import Counts from "@/components/Counts/Counts"
import Features from "@/components/Features/Features"
import Hero from "@/components/Hero/Hero"
import Process from "@/components/Process/Process"
import Section from "@/components/Section/Section"
import Services from "@/components/Services/Services"
import Title from "@/components/Title/Title"




const HomeRoute = () => {
    return (
      <>
      <div className="home">
      <Hero/>
      <Section/>
      <Title title='ABOUT US'/>
      <About/>
      <Counts/>
      <Title title='SERVICES' subTitle='Akeshya will serve as your consultant and development partner to help you turn your idea into a reality.' />
      <Services/>
  
      <Title title="OUR PROCESS" subTitle="Over the years we have evolved a tested method for attaining achievement for each one of our clients."/>
      <Process/>
  
      <Title title="OUR CORE FEATURES" subTitle="
  Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money."/>
      <Features/>
  
      <Title title="CONTACT US"/>
      <Contact/>
      </div>
      </>
    )
  }
  
  export default HomeRoute
  