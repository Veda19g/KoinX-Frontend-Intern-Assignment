import React from 'react';
import { useState } from 'react';
import logo from '../images/KoinX.png';
import menu from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close.svg";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen((prev)=>!prev);
  }

  return (
    <div className='flex justify-between p-8 shadow'>
      <div>
       <img  src={logo} alt='logo' className="w-15 h-8" />
      </div>
      <div className='md:hidden'>
        <img onClick={handleMenu} src={menu} alt='' className='w-8'/>
      </div>
      {isMenuOpen && <div className='md:hidden fixed overflow-y-auto p-5 top-0 bottom-0 right-0 w-2/3  bg-white text-gray-400 text-xl  bg-opacity-100 z-50'>
      <div  className='flex justify-end md:hidden'>
        <img onClick={handleMenu} src={closeMenu} className='w-10'/>
        </div>
      <div className='mt-10 flex flex-col gap-10 justify-center items-center text-black'>
        <div className='text-lg font-semibold'>Crypto Taxes</div>
        <div className='text-lg font-semibold'>Free Tools</div>
        <div className='text-lg font-semibold'>Resource Center</div>
        <div><button className='p-2 px-6 bg-blue-700 rounded-md text-white text-lg'>Get Started</button></div>
      </div>
        </div>}
      <div className='hidden md:flex md:gap-10 md:justify-center md:items-center'>
        <div className='text-lg font-semibold'>Crypto Taxes</div>
        <div className='text-lg font-semibold'>Free Tools</div>
        <div className='text-lg font-semibold'>Resource Center</div>
        <div><button className='p-2 px-6 bg-blue-700 rounded-md text-white text-lg'>Get Started</button></div>
      </div>
    </div>
  );
};

export default Navbar;