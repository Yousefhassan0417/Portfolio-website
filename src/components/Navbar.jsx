import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo1 from '../assets/logo1.png';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';


function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () =>setNav(!nav);  
     
  

  return (
    <div className='fixed w-full h-80px flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={logo1} alt='logo1 image' style={{ width: '50px' }} />
      </div>

      {/* Menu */}
      <ul className='hidden md:flex'>
        <li> <Link to="home" smooth={true} duration={500}>
      Home
    </Link></li>
        <li><Link to="about" smooth={true} duration={500}>
      About
    </Link></li>
        <li><Link to="Skills" smooth={true} duration={500}>
      Skills
    </Link></li>
        <li><Link to="Work" smooth={true} duration={500}>
      Work
    </Link></li>
        <li><Link to="contact" smooth={true} duration={500}>
      Contact
    </Link></li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="home" smooth={true} duration={500}>
      Home
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500}>
      About
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Skills" smooth={true} duration={500}>
      Skills
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="Work" smooth={true} duration={500}>
      Work
    </Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500}>
      Contact
    </Link></li>
      </ul>

      {/* Social icons */}
      <div className='flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href ="https://www.linkedin.com/in/yousef-hassan-a90b31187/">
              linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href ="https://github.com/Yousefhassan0417">
              FaGithub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300' href ="hyousef4218@gmail.com">
              Email <HiOutlineMail  size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300' href ="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
