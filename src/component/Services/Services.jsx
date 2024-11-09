/* eslint-disable react/jsx-key */
import { delay } from "framer-motion";
import React from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { motion } from "framer-motion";

const CoursesData = [
  {
    id: 1,
    title: "Chew",
    icon: <FaUserDoctor />,
    delay: 0.1,
  },
  {
    id: 2,
    title: "Dental",
    icon: <FaUserDoctor />,
    delay: 0.2,
  },
  {
    id: 3,
    title: "JCHEW",
    icon: <FaUserDoctor />,
    delay: 0.3,
  },
  {
    id: 4,
    title: "Optics",
    icon: <FaUserDoctor />,
    delay: 0.4,
  },
  {
    id: 5,
    title: "MLT",
    icon: <FaUserDoctor />,
    delay: 0.5,
  },
  {
    id: 6,
    title: "Public Health",
    icon: <FaUserDoctor />,
    delay: 0.6,
  },
];

const SlideLeft = (delay) =>{
    return{
        initial:{
            opacity:0,
            x:50
        },
        animate:{
            opacity:1,
            x:0,
            transition:{
                duration:0.3,
                delay:delay,
                ease:"easeInOut",
            }
        }
    }
}

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container pb-14 pt-16">
        <motion.h1
            initial={{opacity:0,x:20}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.3,delay:0.2}}
        className="text-4xl font-bold text-left pb-10">Our Curses</motion.h1>
        <div className="grid grid-cols-2 sm:grid-col-3 md:grid-cols-6 gap-8">
          {CoursesData.map((courses) => (
            <motion.div 
            variants={SlideLeft(courses.delay)}
            initial="initial"
            whileInView={"animate"}
            viewport={{once:true}}
            className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 cursor-pointer hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl">
              <div className="text-2xl mb-3">{courses.icon}</div>
              <h1 className="text-lg font-semibold text-center px-3">
                {courses.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
