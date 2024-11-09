import React from "react";

import { motion } from "framer-motion";

const Register = () => {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="container flex items-center  justify-center  py-20  h-screen">
        <form
      
        action="" className="drop-shadow">
          <motion.div
         initial={{opacity:0,x:50}}
         animate={{opacity:1,x:0}}
         transition={{duration:0.3,delay:0.3}}
          className="flex flex-col items-center gap-5">
            <motion.h1
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.3,delay:0.3}}
            className="text-2xl font-bold text-dark py-5">Register</motion.h1>
            <input
              required
              type="text"
              placeholder="Full Name"
              className="p-3  rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
            />
            <input
              required
              type="text"
              placeholder="Email"
              className="p-3  rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
            />
            <input
              required
              type="text"
              placeholder="UserName"
              className="p-3  rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="p-3 rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
            />
            <input
              required
              type="password"
              placeholder="Comfirm Password"
              className="p-3 rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
            />
            <motion.button 
            initial={{opacity:0,x:50}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.4,delay:0.3}}
            className="primary-btn w-[300px]">Register</motion.button>

            
              <motion.button 
              initial={{opacity:0,x:50}}
              animate={{opacity:1,x:0}}
              transition={{duration:0.5,delay:0.3}}
              className="bg-secondary py-2 px-4 rounded-xl text-white font-semibold hover:bg-primary duration-200">
                Have An Account?
              </motion.button>
           
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default Register;
