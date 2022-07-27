import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { open }from '@tauri-apps/api/shell';
import { downloadDir } from '@tauri-apps/api/path';
import React from 'react';
export const Info = () => {

  async function createFile() {
    const downloadDirPath = await downloadDir();
    await writeTextFile(`${downloadDirPath}/info.txt`, `${sessionStorage.getItem('Name')}`);
    await open(`${downloadDirPath}/info.txt`);
  }

  return (
    <div >
      <h1 className='mt-10 mb-2 text-center capitalize text-transparent text-4xl bg-gradient-to-r from-indigo-600 to-indigo-900 font-extrabold bg-clip-text'>themes</h1>'
      <hr className='w-1/5 mx-auto bg-gradient-to-r from-indigo-600 to-indigo-900 '/>
      {/* my Cards */}
      <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center mt-20'>
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
              <button className="bg-white  text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-black hover:bg-black  hover:shadow-xl hover:shadow-white hover:text-white hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
        </div>
        {/* 2nd card */}
        <div className='py-10 text-white'>
          <div className='rounded overflow-hidden shadow-lg shadow-blue-500 bg-blue-500 max-w-sm'>
            <img src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
            alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Black Theme
              </div>
              <p className='text-gray-200 text-center'>
                Comes with a blue colour matching theme.
              </p>
            </div>
            <div className='justify-center items-center flex '>
              <button className="bg-white  text-blue-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-blue-700 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-700 hover:text-blue-200 hover:scale-110">
                Get It Now!
              </button>
            </div>
          </div>
          
        </div>
        {/* 3rd card */}
        <div className='py-10 text-white'>
          <div className='rounded overflow-hidden shadow-lg max-w-sm shadow-red-600 bg-red-600'>
            <img src="https://images.unsplash.com/photo-1489189642444-0709966aec44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt='mountain' className='w-full'/>
            <div className="px-6 py-4">
              <div className='font-bold text-xl mb-2 text-center'>
                Black Theme
              </div>
              <p className='text-gray-300 text-center'>
                Comes with a red colour matching theme.
              </p>
            </div>
            <div className='justify-center items-center flex '>
              <a href="./black_theme.html"><button onClick={createFile} className="bg-white  text-red-600 w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-red-800 hover:bg-red-800 hover:shadow-xl hover:shadow-red-800 hover:text-red-100 hover:scale-110" >
                Get It Now!
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
