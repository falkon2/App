import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-red-600'>Logo</h1>
        <ul className='hidden cursor-pointer md:flex'>
            <li className='p-4 bg-white mx-5 drop-shadow-lg cursor-pointer'><a href="/">Home</a></li>
            <li className='p-4 mx-5'>About</li>
            <li className='p-4 mx-5'>Host</li>
            <li className='p-4 mx-5'>Tutorial</li>
        </ul>
        <div onClick={toggle} className='block md:hidden'>
          {!isOpen ? <AiOutlineClose size={20}/> : <GiHamburgerMenu size={20}/>}
        </div>
        <div className={!isOpen ? 'fixed left-0 top-1 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-red-600 m-4'>Logo</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-700'><a href="/">Home</a></li>
            <li className='p-4 border-b border-gray-700'>About</li>
            <li className='p-4 border-b border-gray-700'>Host</li>
            <li className='p-4'>Tutorial</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar;