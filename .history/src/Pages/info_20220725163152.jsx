import React from 'react'

export const Info = () => {
  return (
    // <div className="text-white">
    //     <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
    //       <img className="mx-auto h-12 w-auto" src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Workflow" />
    //     </div>
    // </div>
    <div className="text-white">
        <h1 className='mt-10 mb-2 text-center uppercase text-4xl'>themes</h1>
        <hr className='w-1/5 mx-auto'/>
        <div className='grid grid-cols-3'>
            <div className='py-10'>
              <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img className='w-fulls' src='https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' alt='Sunset in the mountains'/>
              </div>
            </div>
        </div>
    </div>
  )
}
