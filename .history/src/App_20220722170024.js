import './App.css';
import Typed from 'react-typed';
import { useState} from 'react';
import {MdWork} from 'react-icons/md';
import { LockClosedIcon } from '@heroicons/react/solid'
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
            className="bg-white text-black w-[200px] transition-[0.5s] rounded-lg font-bold my-6 mx-auto py-3 ring-2 ring-white hover:ring-indigo-600 hover:bg-indigo-600  hover:shadow-xl hover:shadow-indigo-600 hover:text-white hover:scale-110"
            onClick={() => setHide(true)}
          >
            Create
          </button>
        </div>
      ) : (
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Details</h2>
            <p className="mt-2 text-center text-sm text-white">
              
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
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
                  className="appearance-none rounded-lg relative block w-full items-center  justify-center px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="text"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 mt-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 my-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 mb-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
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