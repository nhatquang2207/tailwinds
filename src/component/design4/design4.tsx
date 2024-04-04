import React from "react";
import List from "./list";
import Star from "./star";

function Design4() {
  return (
    <div className=" p-6 rounded-2xl w-[40rem]  bg-white ">
      <p className="font-bold">Overall rating</p>
      <div className="mt-2">
        <Star />
        <p>Click to rate</p>
      </div>
      <div className="mt-4">
        <List
          title="Review Title"
          placeholder="  Example : Easy to use"
          type="text"
        />
        <p>Would you recommend this product to a friend</p>
        <div className="items-center mt-2">
          <input type="radio" id="html" name="fav_language" value="html" />
          <label className="mr-4" htmlFor="html">
            {" "}
            Html
          </label>
          <input type="radio" id="css" name="fav_language" value="css" />
          <label htmlFor="css"> Css</label>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
          </svg>
        </div>

        <div className="mt-3">
          {" "}
          <List
            title="Product Review"
            placeholder="  Example: Since i bought this a month ago, it has been used a lot. what i like best/what is worst about this product is..."
            type="textarea"
          />
        </div>
        <div className=" mt-2 flex gap-1">
          <List
            title="Nick name"
            placeholder=" Example : Easy to use"
            type="text"
          />
          <List
            title="Email address (will not be published)"
            placeholder="  Example : your@gmail.com"
            type="text"
          />
        </div>
        <div className="mt-3">
          <input type="radio" className="accent-black sacle-150" />
          <label className="ml-2 font-bold">
            I accept the terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
}

export default Design4;
