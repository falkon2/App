// import Typed from 'react-typed';
// import { useState} from 'react';
// import { toast } from 'react-hot-toast';
// import { LockClosedIcon } from '@heroicons/react/solid'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { welcome } from './Pages/welcome';
import { Details } from './Pages/Details';
import { info } from './Pages/info';
function App() {
  // console.log(window.location.pathname)

  // const [Data, setData] = useState({
  //   Name: '',
  //   Email: '',
  //   Profession: '',
  //   Nationality: '',
  //   Hobby: '',
  //   Youtube: '',
  // });
  
  // const HandleSubmit = (e) => {
  //   e.preventDefault();
  //   if (Data.Name === ""){
  //     toast.error("Name is required")
  //   }
  //   else if (Data.Email === ""){
  //     toast.error("Email is required")
  //   }
  //   else if (Data.Profession === ""){
  //     toast.error("Profession is required")
  //   }
  //   else if (Data.Nationality === ""){
  //     toast.error("Nationality is required")
  //   }
  //   else if (Data.Hobby === ""){
  //     toast.error("Hobby is required")
  //   }
  //   else {
  //     sessionStorage.setItem('Name', Data.Name)
  //     sessionStorage.setItem('Email', Data.Email)
  //     sessionStorage.setItem('Profession', Data.Profession)
  //     sessionStorage.setItem('Nationality', Data.Nationality)
  //     sessionStorage.setItem('Hobby', Data.Hobby)
  //     sessionStorage.setItem('Youtube', Data.Youtube)
  //     toast.success("Data added successfully")
  //     console.log(Data.Email, Data.Hobby, Data.Name, Data.Nationality, Data.Profession, Data.Youtube)
  //     window.location.href('./Pages/info.jsx')
  //   }
  // }
  
  //for index and details page

  //for details and info page

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={welcome} />
    <Route path="/details" element={Details} />
    <Route path="/info" element={info} />
  </Routes>
</BrowserRouter>
  );

}

export default App;