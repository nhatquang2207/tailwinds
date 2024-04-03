import React from "react";
import Data from "./data";

function Design7() {
  return (
    <div className="bg-blue-200 p-14 py-10 mt-16  ">
      <div className="text-center">
        <h1 className="font-extrabold">
          {" "}
          Get the most out of your mobile with the right subscription
        </h1>
        <p>
          All devices come with free delivery or pickup as standard. See
          information on availabe shopping options for your location{" "}
        </p>

        <Data />
        <button className="border-2 bg-blue-950 p-2 rounded-full mt-6 ">
          See all subscriptions{" "}
        </button>
      </div>
    </div>
  );
}

export default Design7;
