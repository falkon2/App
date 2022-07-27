import React from 'react'

const NavBar = () => {
  return (
    <div className='text-white'>
        <h1 className='w-full text-3xl font-bold text-red-600'>Logo</h1>
        <ul className='flex'>
            <li><a href="/">Home</a></li>
            <li>About Me</li>
            <li>How to Host</li>
            <li>Tutorial</li>
        </ul>
    </div>
  )
}

export default NavBar;