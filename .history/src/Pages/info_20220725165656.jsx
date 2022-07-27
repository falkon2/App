import React from 'react'

export const Info = () => {
  return (
    <div >
      <h1 className='mt-10 mb-2 text-center capitalize text-white text-4xl'>themes</h1>'
      <hr className='w-1/5 mx-auto'/>
      {/* my Cards */}
      <div className='grid grid-cols-3 lg:gap-3 justify-items-center'>
        {/* 1st card */}
        <div className='py-10 text-white'>
          <div className='rounded overflow-hidden shadow-lg shadow-white bg-black  max-w-sm'>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2'>
                Black Theme
              </div>
              <p className='text-gray-300'>
                Get the black Theme Now! Comes with the best background images and colour matching theme for it.
              </p>
            </div>
            <button className=''>
              Get It Now!
            </button>
          </div>
        </div>
        {/* 2nd card */}
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
          </div>
        </div>
        {/* 3rd card */}
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
          </div>
        </div>
      </div>
    </div>
  )
}
