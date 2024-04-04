import React, { useState } from "react";

function Design6() {
  const [show, setShow] = useState(false);
  return (
    <div className="mt-16 bg-blue-600  rounded-xl  w-1/2 p-16 relative">
      <button className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={() => setShow(!show)}
          className={`absolute w-8 h-8 bg-white border-2 rounded-2xl right-5 top-5  hover:bg-indigo-500  hover:-translate-y-1 transition-all`}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </button>

      <div
        className={`bg-white rounded-xl items-center justify-center  p-4  ${show ? "opacity-100" : "opacity-0"}`}>
        <p className="   font-bold w-96">You have 1 new message</p>
        <div className="flex mt-2 space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 mt-1 p-2 bg-pink-400 rounded-lg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
            />
          </svg>
          <div>
            <h2 className="font-bold">Feb 22</h2>
            <p className=" font-semibold">If you like what we do, you </p>
          </div>
        </div>

        <div className="mt-4 text-center ">
          <button className=" border-2 text-gray-800 border-gray-800  rounded-full p-1  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1 inline">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
              />
            </svg>
            Twitter
          </button>
          <button className=" ml-2 text-blue-400 border-blue-400   border-2 rounded-full p-1  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mr-1 inline">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15 15-6 6m0 0-6-6m6 6V9a6 6 0 0 1 12 0v3"
              />
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Design6;
