import React, { ReactNode } from "react";
interface data {
  icon: ReactNode;
  name: string;
  email: string;
  num: number;
  add: ReactNode;
}
const datas: data[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    name: "Quang",
    email: "quang.com",
    num: 112,
    add: (
      <svg
        className="w-10 h-10 text-black"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M6 12h.01m6 0h.01m5.99 0h.01"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    name: "Wow",
    email: "wow.com",
    num: 112,
    add: (
      <svg
        className="w-10 h-10 text-black"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M6 12h.01m6 0h.01m5.99 0h.01"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    name: "Trung",
    email: "trung.com",
    num: 112,
    add: (
      <svg
        className="w-10 h-10 text-black"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M6 12h.01m6 0h.01m5.99 0h.01"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-12 h-12">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
      </svg>
    ),
    name: "Koha",
    email: "khoa.com",
    num: 11122,
    add: (
      <svg
        className="w-10 h-10 text-black"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="M6 12h.01m6 0h.01m5.99 0h.01"
        />
      </svg>
    ),
  },
];
function Design9() {
  return (
    <div className="bg-blue-400 p-16 mt-16 w-[60rem]">
      <div className="relative flex items-center">
        <input
          type="search"
          placeholder="Search"
          className="pl-8 rounded-md p-2 "
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute w-6 h-6 top-2 left-1  ">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <div className=" absolute right-16  items-center  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6  ">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </div>
        <div className="justify-center items-center right-0  absolute bg-purple-500 rounded-full">
          <p className="p-4 ">IG</p>
        </div>
      </div>
      <h1 className="font-bold mt-12 text-3xl">Account</h1>
      <div className="mt-10 ml-5 space-y-2">
        {datas.map((item) => (
          <div>
            <div className=" flex items-center justify-between hover:bg-slate-600 p-3 rounded-2xl">
              <div className="flex justify-between">
                {item.icon}
                <div className="ml-2">
                  <p>{item.name}</p>
                  <p>{item.email}</p>
                </div>
              </div>
              <div>{item.num} account </div>
              <button className=" bg-blue-400 flex rounded-full h-8 items-center justify-center">
                {item.add}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design9;
