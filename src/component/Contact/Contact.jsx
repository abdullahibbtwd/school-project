import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhone } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { FadeUp } from "../Hero/Hero";
import { motion } from "framer-motion";

const Contact = () => {
  return (
   <section className='bg-[#f4f4f4]'>
    <h1 className="text-3xl text-center pt-3 md:text-4xl font-bold !leading-snug">Contact Us</h1>
    <div className="container py-14 md:py-24 
      grid grid-cols-1 md:grid-cols-2 gap-8 
      space-y-6 md:space-y-0">
        
        {/* Contact text */}
        <div className='flex items-center cursor-pointer'>
        <div className='flex flex-col gap-6'> 
            <motion.div 
               variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
            className="flex items-center gap-4 p-6 bg-[#fff] rounded-2xl *:
                hover:bg-[#f4f4f4] duration-300 hover:shadow-2xl
                ">
                 <FaLocationDot/>
            <p>No.220 Jos road rudun wada lga,kano state</p>
            </motion.div>
            <motion.div 
               variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
            className="flex items-center gap-4 p-6 bg-[#fff] rounded-2xl *:
                hover:bg-[#f4f4f4] duration-300 hover:shadow-2xl
                ">
                 <FaPhone/>
            <p>99896638</p>
            </motion.div>
            <motion.div 
               variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
            className="flex items-center gap-4 p-6 bg-[#fff] rounded-2xl *:
                hover:bg-[#f4f4f4] duration-300 hover:shadow-2xl
                ">
                 <MdOutlineEmail/>
            <p>jicohsat@info.com</p>
            </motion.div>
           
        </div>
        </div>
        {/* Contaact Input */}
        <div className='flex items-center justify-center '>
            <div className='flex flex-col gap-6'>
                <motion.input 
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
                className='border-solid  border-2 border-[#f4f4f]  py-3 px-2 w-[400px]' type="text" placeholder='Name' />
                <motion.input 
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
                className='border-solid border-2 border-[#f4f4f] py-3 px-2  w-[400px]' type="email" placeholder='email' />
                <motion.textarea 
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                  viewport={{once:true}}
                className='border-solid border-2 border-[#f4f4f]  py-3 px-2 w-[400px]' name="" id=""></motion.textarea>
                  <motion.button 
                  variants={FadeUp(0.2)}
                  initial="initial"
                  whileInView={"animate"}
                    viewport={{once:true}}
                  className='primary-btn'>Send</motion.button>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Contact
