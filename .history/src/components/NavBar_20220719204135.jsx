import React from 'react'

const NavBar = () => {
  return (
    <div className='flex text-white'>
        <h1 className='w-full text-3xl font-bold text-red-600'>Logo</h1>
        <ul className='flex'>
            <li className='p-4'><a href="/">Home</a></li>
            <li className='p-4'>About Me</li>
            <li className='p-4'>How to Host</li>
            <li className='p-4'>Tutorial</li>
        </ul>
    </div>
  )
}

export default NavBar;