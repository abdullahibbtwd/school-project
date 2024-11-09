import React from "react";

import { motion } from "framer-motion";

const Login = () => {
  return (
    <section className="bg-[#f4f4f4]">    
    <div className="container flex items-center  justify-center  py-20  h-screen">
      <form action="" className="drop-shadow">
        <div className="flex flex-col items-center gap-5">
          <motion.h1
          initial={{opacity:0,x:50}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.3,delay:0.3}}
          className="text-2xl font-bold text-dark py-5">Login</motion.h1>
          <motion.input
           initial={{opacity:0,x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.4,delay:0.3}}
          required
            type="text"
            placeholder="Email Or UserName"
            className="p-3  rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
          />
          <motion.input
           initial={{opacity:0,x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.5,delay:0.4}}
          required
            type="password"
            placeholder="Password"
            className="p-3 rounded-s bg-white w-[350px] py-3 focus:ring-0 focus:outline-none placeholder:text-dark"
          />
          <motion.button 
           initial={{opacity:0,x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.6,delay:0.5}}
          className="primary-btn w-[300px]">Login</motion.button>
          <motion.p 
           initial={{opacity:0,x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.7,delay:0.6}}
          className="text-xs font-semibold">Lost Password <a href="#" className="text-blue-900">Click Here</a></motion.p>
       
          <motion.button 
           initial={{opacity:0,x:50}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.8,delay:0.5}}
          className="bg-secondary py-2 px-4 rounded-xl text-white font-semibold hover:bg-primary duration-200">Create Account</motion.button>
         
         
        </div>
      </form>
    </div>
    </section>

  );
};

export default Login;
