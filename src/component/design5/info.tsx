import React from "react";
interface data {
  name: string;
  job: string;
  avatar: string;
  tags: string[];
}
export const datas: data[] = [
  {
    name: "A",
    job: "a",
    avatar: " https://placewaifu.com/image/400",
    tags: ["Html"],
  },
  {
    name: "B",
    job: "c",
    avatar: "https://placewaifu.com/image/430",
    tags: ["Html", "Js"],
  },
  {
    name: "C",
    job: "d",
    avatar: "https://placewaifu.com/image/440",
    tags: ["Html", "Css", "Js"],
  },
  {
    name: "D",
    job: "d",
    avatar: "https://placewaifu.com/image/450",
    tags: ["Html", "Css"],
  },
  {
    name: "E",
    job: "e",
    avatar: "https://placewaifu.com/image/460",
    tags: ["Html", "Css", "Js"],
  },
];
function Info({ datas }) {
  // const [query, setQuery] = useState("");
  // const handleFilter = (e) => {
  //   setQuery(e.target.value);
  // };
  // const filter =
  //   query.length > 0
  //     ? datas.filter((user) => {
  //         return user.name.toLowerCase().includes(query.toLowerCase());
  //       })
  //     : datas;
  return (
    <div className="mt-6">
      {datas.map((item) => (
        <div className="flex mt-2 p-5 hover:bg-slate-500 hover:shadow-xl ">
          <img className="w-16 h-16 rounded-full " src={item.avatar} alt="" />
          <div className="ml-3">
            <h1 className="font-bold"> {item.name} </h1>
            <p>{item.job}</p>
            <div className=" space-x-2 mt-3 ">
              {item.tags.map((tag) => (
                <a
                  className="border-2 text-center hover:text-red-700 rounded-full p-1 border-white"
                  href="">
                  {tag}
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Info;
