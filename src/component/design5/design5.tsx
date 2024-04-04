import React, { useState } from "react";
import Info from "./info";
const data = ["Reputation", "New user", "Voters", "Editors", "Moderators"];
import {datas} from './info'

function Design5() {
  const [query, setQuery] = useState("");
  const handleFilter = (e) => {
    setQuery(e.target.value);
  };
  const filter = datas.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });
  return (
    <div className="bg-blue-400 mt-24 p-16 ">
      <p className="text-2xl font-bold">Users</p>
      <div className="relative mt-6 flex">
        <div>
          <input
            className="  border-2 border-gray-400 pl-8"
            type="text"
            value={query}
            placeholder="Search users "
            onChange={handleFilter}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 absolute left-1 top-0.5  text-gray-300">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <div className="space-x-6 ml-16  ">
          {data.map((item) => (
            <a className=" hover:text-yellow-300 " href="">
              {item}
            </a>
          ))}
        </div>
      </div>
      <div>
        <Info  datas={filter}/>
      </div>
    </div>
  );
}

export default Design5;
