
import './Services.css'
import { FaEarthAmericas } from "react-icons/fa6";
import { BiSolidTachometer } from "react-icons/bi";
import { PiNoteDuotone, PiBasketball } from "react-icons/pi";





const data = [
    {
        id: 1, title: "Design",
        content: "Our web design services can assist you in reclaiming your company's online image. Your business will flourish on the Internet thanks to the combination of style and technology we provide, as well as our experience.",
     icon:<PiBasketball  className="imgs" />
    },
    {
        id: 2,
        title: "Development",
        content: "  Our development team can construct platforms to help your business thrive by creating powerful customised solutions tailored to your particular requirements.Akeshya makes use of established and effective web development tools.", 
        icon:<PiNoteDuotone className="imgs" />
    },
    {
        id: 3,
        title: "Marketing",
        content: "A beautiful website is the foundation of effective marketing.Our customers achieve success where it counts—in the real world—by combining our proven approach with our passion for improving conversions and increasing ROI.",
         icon: <FaEarthAmericas className="imgs" />
    },
    {
        id: 4,
        title: "Support",
        content: " Since the beginning, we at Akeshya have specialised in website maintenance.We recognise the significance of having your business online 24 hours a day, seven days a week, and we've created a system to ensure that we're always available.",
      icon: <BiSolidTachometer className="imgs" />,
    },
  ];

export default data;