import './App.css';
import Typed from 'react-typed';
function App() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <div className='flex'>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Web</h1>
          <Typed 
          className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"
          strings={['site Generator', 'Geny']} 
          typeSpeed={70} 
          backSpeed={100} 
          loop/>
        </div>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold'>A website builder that is focused on design and simplicity.</p>
      </div>
    </div>
  );
}

export default App;
