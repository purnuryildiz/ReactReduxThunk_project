import React from "react";

const Error = ({ msg, retry }) => {
  return (
    <div>
      <div className=" my-20 p-10 rounded-md text-lg text-center">
        <p>Sorry something went wrong :(</p>
        <p className="font-semibold">-{msg}- </p>
      </div>
      <div className="flex justify-center">
        <button onClick={retry} className="border p-2 px-4 rounded-md hover:bg-zinc-100 ">
          Try Again!
        </button>
      </div>
    </div>
  );
};

export default Error;
