import './App.css';
import Typed from 'react-typed';
import { useState} from 'react';
import {MdWork} from 'react-icons/md';
function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="text-white">
      {!hide ? (
        <div
          id="index"
          className="index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
        >
          <div className="flex justify-center items-center">
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
              Web
            </h1>
            <Typed
              className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-400"
              strings={["site Generator", "Geny"]}
              typeSpeed={70}
              backSpeed={100}
              loop
            />
          </div>
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4 ">
          A website builder that is focused on <a className="underline text-gray-300">design</a> and 
            <a className="underline text-gray-300"> simplicity</a>
          </p>
          <button
            className="bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-gray-300 hover:bg-slate-300  hover:shadow-xl hover:shadow-white hover:scale-110"
            onClick={() => setHide(true)}
          >
            Create
          </button>
        </div>
      ) : (
        <div id="info" className="info max-w-[800px] mt-[-96px] w-full h-screen mx-auto  flex flex-col justify-center">
          <div>
            <form className="text-black max-w-[400px] w-full mx-auto bg-white p-8">
              <h2 className='text-4xl font-bold text-center py-8'>Details</h2>
              <div className='flex flex-col mb-4'>
                <label>Name</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
              </div>
              <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative bg-gray-100 p-2' type="✉️'text" />
              </div>
              <div className='flex flex-col mb-4'>
                <label >Profession</label>
                <input className='border relative bg-gray-100 p-2' placeholder='🏢' type="text" />
              </div>
              <div className='flex flex-col mb-4'>
                <label>Nationality</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
              </div>
              <div className='flex flex-col mb-4'>
                <label>Hobby</label>
                <input className='border relative bg-gray-100 p-2' placeholder='🎮' type="text" />
              </div>
              <div className='flex flex-col mb-4'>
                <label>Youtube</label>
                <input className='border relative bg-gray-100 p-2' type="text" />
              </div>
              <button className="w-full py-3 mt-8 bg-black text-white relative">Submit</button>
            </form>
          </div>
        </div>
      )}
      <div
        id="ino"
        className="info max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center"
      >
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default App;