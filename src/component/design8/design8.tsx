import React, { ReactNode } from "react";
interface data {
  icon: ReactNode;
  title: string;
  num: number;
  gradientColor: string;
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
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 5,
    gradientColor: "bg-gradient-to-br from-yellow-100 to-red-800",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 9,
    gradientColor: "bg-gradient-to-br from-yellow-700 to-white-100",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 2,
    gradientColor: "bg-gradient-to-br from-purple-100 to-green-800",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 5,
    gradientColor: "bg-gradient-to-br from-yellow-100 to-red-800",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 9,
    gradientColor: "bg-gradient-to-br from-yellow-700 to-white-100",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 m-2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
        />
      </svg>
    ),
    title: "Design2",
    num: 2,
    gradientColor: "bg-gradient-to-br from-purple-100 to-green-800",
  },
];
function Design8() {
  return (
    <div className="text-center mt-16 w-[48rem] ">
      <h1 className="font-bold text-3xl mb-4">Open positions</h1>
      <div className=" grid grid-cols-3 gap-8 ">
        {datas.map((item) => (
          <div className="bg-blue-300 flex flex-col py-6 space-y-8 rounded-xl">
            <div className="flex justify-center items-center ">
              <div className={`${item.gradientColor} rounded-md`}>
                {item.icon}
              </div>
              <p className="text-xl ml-2 ">{item.title}</p>{" "}
            </div>
            <div>
              <button className=" border-red-200  border-2   p-2 text-red-800">
                {" "}
                <p className="">{item.num} Open position</p>
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="mx-auto max-w-xl mt-4 ">
        we are proud to be an equal opportunity employer that values
        diversity.We do not dis criminate on the basic of race, religion,
        national origin, gender.
      </p>
    </div>
  );
}

export default Design8;
