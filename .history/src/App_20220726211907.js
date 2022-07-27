import { Routes, Route } from 'react-router-dom';
import { Welcome } from './Pages/Welcome';
import { Details } from './Pages/Details';
import { Info } from './Pages/Info';
import { About } from './Pages/About';
import { InfoTwo } from './Pages/InfoTwo';
function App() {
  return (
  <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/details" element={<Details/>} />
    <Route path="/info" element={<Info/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/more" element={<InfoTwo/>} />
  </Routes>
  );
}

export default App;