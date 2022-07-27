import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineClose} from 'react-icons/ai';
import {ToastContainer,toast} from 'react-toastify';
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  }
  const notify = () => toast.success("WOW so easy!")
  return (
    <div className='flex justify-between items-center h-20 max-w-full mx-auto px-4 text-white sticky top-0'>
        <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="none" className='w-9'/>
        <ul className='hidden  md:flex'>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600'><a href="/">Home</a></li>
            <li onClick={notify} className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[45px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600'>About</li>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[35px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600'>Host</li>
            <li className='p-4 mx-5 cursor-pointer after:content-[" "] after:absolute after:w-[55px] after:scale-x-0 after:h-[2px] after:flex after:bg-indigo-600 after:origin-bottom-left after:transition-[0.5s] after:ease-out hover:after:scale-x-100 hover:scale-110 hover:after:origin-bottom-right hover:text-indigo-600'>Tutorial</li>
        </ul>
        <ToastContainer/>
        <div onClick={toggle} className='block md:hidden'>
          {!isOpen ? <AiOutlineClose size={20}/> : <GiHamburgerMenu size={20}/>}
        </div>
        <div className={!isOpen ? 'fixed left-0 top-1 w-[60%] h-full border-r border-r-gray-800 bg-gray-900 ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
        <img src={process.env.PUBLIC_URL+"/logo192.png"} alt="none" className='w-9 left-0'/>
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