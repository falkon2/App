import './App.css';
import Typed from 'react-typed';
import { useState} from 'react';
import {info} from './components/info';
function App() {
  const [hide, setHide] = useState(false)
  return (
    <div className='text-white'>
      <div id='index' className='index max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        { !hide ? (<div className='flex justify-center items-center'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Roll</h1>
          <Typed 
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-gray-400"
          strings={['simply', 'design']} 
          typeSpeed={70} 
          backSpeed={100} 
          loop/>
        </div>
        <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4 '>best <a className='underline text-gray-300'>design</a> and <a className='underline text-gray-300'>simplistic.</a></p>
        <button className='bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-gray-300 hover:bg-slate-300  hover:shadow-xl hover:shadow-white hover:scale-110' onClick={() => setHide(true)}>Create</button>//clicking this button will show the div below which has the id of info and hide this current div
      </div> ) :
       ( <div id='info' className='info max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1>Hello</h1>
      </div> )}
      <div id='ino' className='info max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1>Hello</h1>
      </div>
    </div>


export default App;
