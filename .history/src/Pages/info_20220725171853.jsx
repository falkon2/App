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
          <div className='rounded overflow-hidden shadow-lg shadow-white bg-black  max-w-sm '>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Black Theme
              </div>
              <p className='text-gray-300 text-center'>
                Comes with a black colour matching theme.
              </p>
            </div>
            <div className='justify-center items-center flex '>
              <button className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-white hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className='py-10 text-blue-500'>
          <div className='rounded overflow-hidden shadow-lg shadow-blue-500 bg-blue-500 max-w-sm'>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Black Theme
              </div>
              <p className='text-blue-500 text-center'>
                Comes with a black colour matching theme.
              </p>
            </div>
            <div className='justify-center items-center flex '>
              <button className="bg-white  text-blue-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-blue-700 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700 hover:text-blue-100 hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
          
        </div>
        {/* 3rd card */}
        <div className='py-10'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm'>
            <img src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Black Theme
              </div>
              <p className='text-gray-300 text-center'>
                Comes with a black colour matching theme.
              </p>
            </div>
            <div className='justify-center items-center flex '>
              <button className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-white hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
