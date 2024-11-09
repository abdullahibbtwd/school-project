import React from "react";
import Navbar from "../Navbar/Navbar";
import { IoIosArrowRoundForward } from "react-icons/io";
import pattern from "../../assets/pattern.svg";
import hero from "../../assets/logo.png"
import {motion} from "framer-motion"




export const FadeUp = (delay) => {
  return {
    initial:{
      opacity:0,
      y:50,
    },
    animate:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        stiffness:100,
        duration:0.5,
        delay:delay,
        ease:"easeInOut"
      }
    }
  }
}

const Hero = () => {
  return (
    <section className=" bg-light overflow-hidden relative ">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        {/* School Info */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
         <div className="text-center md:text-left space-y-10 lg:max-w-[350] ">
            <motion.h1
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
            className="text-3xl lg:text-5xl font-bold !leading-snug">
            Let's Learn To Explore our
            <span className="text-secondary"> Community</span> for better health
          </motion.h1>
          <motion.div 
          variants={FadeUp(0.8)}
          initial="initial"
          animate="animate"
          className="flex  justify-center md:justify-start">
            
            <button className="primary-btn flex items-center gap-2 group">
              Get Started
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
         
            
         </motion.div>
          </div>
        </div>

        {/* hero image */}
        <div className="flex justify-center items-center">
          <motion.img src={hero} alt=""  
          initial={{x:50,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:0.6,delay:0.4,ease:"easeInOut"}}
          className="w-[400px] xl:w-[500px] relative z-10 drop-shadow"  />
          <motion.img 
           initial={{x:-50,opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:0.5,delay:0.2,ease:"easeInOut"}}
          src={pattern} alt="" 
          className="absolute -bottom-10 w-[1200px] md:w-[2000px]  z-[1] hidden md:block"/>
      
        </div>
      </div>

    </section>

    
  );
};

export default Hero;
