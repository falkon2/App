import React from 'react'
import { useState } from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import validator from 'validator'
export const Details = () => {
    const navigate = useNavigate();

    const [Data, setData] = useState({
        Name: '',
        Email: '',
        Profession: '',
        Nationality: '',
        Hobby: '',
        Youtube: '',
      });

      const HandleSubmit = (e) => {
        e.preventDefault();
        if (Data.Name === ""){
          toast.error("Name is required")
        }
        if ( Data.Email === "" || !validator.isEmail(Data.Email)){
          toast.error("Valid Email is required")
        }
        else if (Data.Profession === ""){
          toast.error("Profession is required")
        }
        else if (Data.Nationality === ""){
          toast.error("Nationality is required")
        }
        else if (Data.Hobby === ""){
          toast.error("Hobby is required")
        }
        else if(Data.Youtube.indexOf("https://") !== 0 ){
          toast.error("https:// is required")
        }
        else {
          sessionStorage.setItem('Name', Data.Name)
          sessionStorage.setItem('Email', Data.Email)
          sessionStorage.setItem('Profession', Data.Profession)
          sessionStorage.setItem('Nationality', Data.Nationality)
          sessionStorage.setItem('Hobby', Data.Hobby)
          sessionStorage.setItem('Youtube', Data.Youtube)
          toast.success("Data added successfully")
          console.log(Data.Email, Data.Hobby, Data.Name, Data.Nationality, Data.Profession, Data.Youtube)
          navigate('/info');
        }
      }

  return (
    <div className="text-white font-poppins">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={process.env.PUBLIC_URL+"/logo.png"}
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Details</h2>
            <p className="mt-2 text-center text-sm text-white">
              
              <a href="/info" className="font-medium text-indigo-600 hover:text-indigo-500">
                Enter your details below
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="Name" className="sr-only">
                  Name
                </label>
                <input
                  id="Name"
                  name="Name"
                  type="text"
                  autoComplete="Name"
                  required
                  value={Data.Name}
                  onChange={(e) => setData({ ...Data, Name: e.target.value })}
                  className="appearance-none rounded-lg relative block w-full items-center  justify-center px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:bg-gray-300 focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="Email" className="sr-only">
                  Email
                </label>
                <input
                  id="Email"
                  name="Email"
                  type="text"
                  autoComplete="current-Email"
                  required
                  value={Data.Email}
                  onChange={(e) => setData({ ...Data, Email: e.target.value })}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:bg-gray-300 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="Profession" className="sr-only">
                  Profession
                </label>
                <input
                  id="Profession"
                  name="Profession"
                  type="Profession"
                  autoComplete="current-Profession"
                  required
                  value={Data.Profession}
                  onChange={(e) => setData({ ...Data, Profession: e.target.value })}
                  className="appearance-none rounded-lg relative block w-full px-3 my-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:bg-gray-300 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Profession"
                />
              </div>
              <div>
                <label htmlFor="Nationality" className="sr-only">
                  Nationality
                </label>
                <input
                  id="Nationality"
                  name="Nationality"
                  type="Nationality"
                  autoComplete="current-Nationality"
                  required
                  value={Data.Nationality}
                  onChange={(e) => setData({ ...Data, Nationality: e.target.value})}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:bg-gray-300 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Nationality"
                />
              </div>
              <div>
                <label htmlFor="Hobby" className="sr-only">
                  Hobby
                </label>
                <input
                  id="Hobby"
                  name="Hobby"
                  type="Hobby"
                  autoComplete="current-Hobby"
                  required
                  value={Data.Hobby}
                  onChange={(e) => setData({ ...Data, Hobby: e.target.value})}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:bg-gray-300 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Hobby"
                />
              </div>
              <div>
                <label htmlFor="Youtube" className="sr-only">
                  Youtube
                </label>
                <input
                  id="Youtube"
                  name="Youtube"
                  type="Youtube"
                  autoComplete="current-Youtube"
                  value={Data.Youtube}
                  onChange={(e) => setData({ ...Data, Youtube: e.target.value})}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:bg-gray-300 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Social Media"
                />
              </div>
            </div>
            <div><button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg mt-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={HandleSubmit}>
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition-[2.5s] " aria-hidden="true" />
                </span>
                Submit
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}
