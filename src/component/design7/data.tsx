import React from "react";

interface info {
  img: string;
  title: string;
  price: number;
  subtitle: string;
  shadowClass: string;
}
const list: info[] = [
  {
    img: "https://placewaifu.com/image/420",
    title: "Ice mobile A 10g",
    price: 100,
    subtitle: "Up to 100mb",
    shadowClass: "shadow-[-0.5rem_-0.5rem_0_0_#FFC0CB]",
  },
  {
    img: "https://placewaifu.com/image/420",
    title: "Ice mobile B 10g",
    price: 200,
    subtitle: "up to 100mb",
    shadowClass: "shadow-[-0.5rem_-0.5rem_0_0_#DDA0DD]",
  },
  {
    img: "https://placewaifu.com/image/420",
    title: "Ice mobile C g",
    price: 300,
    subtitle: "up to 100mb",
    shadowClass: "shadow-[-0.5rem_-0.5rem_0_0_#ADD8E6]",
  },
];
function Data() {
  return (
    <div className=" grid grid-cols-3 gap-1  ">
      {list.map((item) => (
        <div
          key={item.price}
          className={`bg-white  rounded-lg  mt-6 ml-4 h-44 w-60 p-1 ${item.shadowClass} `}>
          <div className={`flex`}>
            <img
              className="  w-16 h-16 rounded-full   "
              src={item.img}
              alt=""
            />
            <div className="ml-3">
              <p className="font-bold">{item.title}</p>
              <p>{item.subtitle}</p>
              <p className="mt-2">
                <span className="font-black text-xl">{item.price},-</span>/
                <span>month</span>
              </p>
              {/* <button className="bg-blue-600 mt-10 mr-2">
                Add subscription{" "}
              </button> */}
            </div>
          </div>
          <div className="text-center mt-8 ">
            {" "}
            <button className="bg-blue-400 p-2 rounded-xl ">
              {" "}
              Add subscription
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Data;
