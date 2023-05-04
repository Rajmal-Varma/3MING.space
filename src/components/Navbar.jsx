import Logo from '../assets/3ming_logo.png'
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


   const Navbar = () => {
     //   usestate is used for close menu or open menu view
   
     const [nav, setNav] = useState(false);
   
     const handleClick = () => {
       return setNav(!nav);
     };
   
   
     return (
       <div className=" w-full h-[88px] flex justify-between items-center p-4 bg-[#141414] text-white   ">
       
             {/* Hamburger */}
         <div onClick={handleClick} className="md:hidden cursor-pointer z-30 md:justify-">
           {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
         </div>
         
         {/* Menu */}
   
         <ul className="hidden md:flex lg:text-xl  justify-between mx-1  font-medium  cursor-pointer">
           <li className=" mx-6   text-2xl ">Home</li>
           <li className=" mx-6   text-2xl">About</li>
           <li className=" mx-6   text-2xl ">Stream</li>
           <li className=" mx-6   text-2xl">Promote</li>
           <li className=" mx-6  text-2xl">Blog</li>
         </ul>
      
         <div>
          <img src={Logo} alt="LogoImage" style={{width:'220px' }} className="xl:ml-4 mr-20 pr-12 xl:mr-0 xl:pr-0 "/>
         </div>
        
   
         {/* Mobile Menu */}
   
         <ul
           className={
             !nav
               ? "hidden"
               : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-20"
           }
         >
           <li className="py-6 text-4xl">Home</li>
           <li className="py-6 text-4xl">About</li>
           <li className="py-6 text-4xl">Stream</li>
           <li className="py-6 text-4xl">Promote</li>
           <li className="py-6 text-4xl">Blog</li>
         </ul>
   </div>
     );
 }  
     
export default Navbar;