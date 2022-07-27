import './App.css';
import { useState} from 'react';
import { PageOne } from './components/PageOne';
import { info } from './components/Info';
function App() {
  const [hide, setHide] = useState(false);
  return (
    <div className="text-white">
      {!hide ? <PageOne/> : <info/>} 
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
