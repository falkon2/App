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
        <img src={process.env.PUBLIC_URL+"/logo192.png"} className='w-7'/>
        <ul className='hidden  md:flex'>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex  after:bg-white after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-right'><a href="/">Home</a></li>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex  after:bg-white after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-right'>About</li>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[35px] after:scale-x-0 after:h-[2px] after:flex  after:bg-white after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-right'>Host</li>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[55px] after:scale-x-0 after:h-[2px] after:flex  after:bg-white after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-right'>Tutorial</li>
        </ul>
        <div onClick={toggle} className='block md:hidden'>
          {!isOpen ? <AiOutlineClose size={20}/> : <GiHamburgerMenu size={20}/>}
        </div>
        <div className={!isOpen ? 'fixed left-0 top-1 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <h1 className='w-full text-3xl font-bold text-red-600 m-4'>Logo</h1>
        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out'><a href="/">Home</a></li>
            <li className='p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out'>About</li>
            <li className='p-4 border-b border-gray-700 hover:border-white hover:transition-[0.5s] hover:ease-in-out'>Host</li>
            <li className='p-4 hover:border-b hover:border-white hover:transition-[0.5s] hover:ease-in-out'>Tutorial</li>
        </ul>
        </div>
    </div>
  )
}

export default NavBar;