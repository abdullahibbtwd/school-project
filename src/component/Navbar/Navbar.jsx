import React from 'react'
import {IoMdMenu} from "react-icons/io"
import {motion} from "framer-motion"



const NavbarMenu = [
    {
      id:1,
      tittle:"Home",
      path:"/"
    },
    {
      id:2,
      tittle:"Courses",
      path:"#"
    },
    {
      id:3,
      tittle:"Our Campus",
      path:"#"
    },
    {
      id:4,
      tittle:"Our Facilities",
      path:"#"
    },
    {
      id:5,
      tittle:"Contact Us",
      path:"#"
    },
  ];
  
const Navbar = () => {
  return (
   <nav className='relative z-[20]'>
    <motion.div 
    initial={{y:-50 ,opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{duration:0.5,delay:0.4,ease:"easeInOut"}}
    
    className="container py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div>
            <h1 className='font-bold text-2xl '>JICOHSAT</h1>
        </div>
        {/* Menu Section */}
        <div className='hidden lg:block'>
            <ul className='flex items-center gap-3'>
                {
                    NavbarMenu.map((menu) => (
                        <li key={menu.id}>
                                <a href={menu.path} className='inline-block py-2 px-3 hover:text-secondary relative group'>
                                    <div className='w-2 h-2 absolute bg-secondary mr-2 left-1/2  -translate-x-1/2 top-1/2
                                    bottom-0 group-hover:block hidden rounded-full
                                    '></div>
                                    {menu.tittle}</a>
                        </li>
                    ))
                }
              
                <button className='primary-btn '>Sign In</button>
             
                
            </ul>
        </div>
        {/* Hamburger Section */}
        <div className='lg:hidden items-center' >

            <IoMdMenu className='text-3xl cursor-pointer'/>
        </div>
    </motion.div>
   </nav>
  )
}

export default Navbar
