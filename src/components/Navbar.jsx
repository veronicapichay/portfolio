import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import Logo from '../assets/logo.png';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e8d4d3] text-black'>
      <div>

      <img src={Logo} alt='Logo Image' style={{ width: '100px' }} />
      </div>



{/* menu */}

<ul className='hidden md:flex'  style= {{fontWeight: 'bold' }}>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
      </ul>
        

 {/* Hamburger */}
 <div onClick={handleClick} className='md:hidden z-10'>
 {!nav ? <FaBars /> : <FaTimes />}
 </div>



{/* Mobile menu */}
<ul className= {!nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#e8d4d3] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Skills</li>
      </ul>

  {/* Social icons */}
  <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-black'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
               Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='/'>
               Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;