import './App.css';
import Typed from 'react-typed';
import { useState, useEffect } from 'react';
// function App() {
//   const [isOpen , setIsOpen] = useState('index');
//   const ToggleIndexPage = () => {
//     setIsOpen('info');
// };
  return (
    <div className='text-white'>
      <div className='index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex justify-center items-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Web</h1>
          <Typed 
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-400"
          strings={['site Generator', 'Geny']} 
          typeSpeed={70} 
          backSpeed={100} 
          loop/>
        </div>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 '>A website builder that is focused on <a className='underline text-gray-300'>design</a> and <a className='underline text-gray-300'>simplicity.</a></p>
        <button  className='bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-gray-300 hover:bg-slate-300  hover:shadow-xl hover:shadow-white hover:scale-110 '>Create</button>
      </div>
      {/* <div className='index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1>Hello</h1>
      </div> */}
    </div>
  );
}

export default App;
