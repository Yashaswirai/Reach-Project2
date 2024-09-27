import React from "react";
import { IoMdArrowForward } from "react-icons/io";
function Card({start,wide,hover}) {
  return (
    <div className={`${wide} h-[25rem] p-5 rounded-lg bg-zinc-700 flex flex-col justify-between hover:${hover}`}>
      <div>
        <div className="flex justify-between items-center">
          <h2>One Heading</h2>
          <IoMdArrowForward />
        </div>
        <h1 className="text-2xl font-semibold mt-4">What ever Heading.</h1>
      </div>
      <div>
        {start ?  (
          <>
          <h1 className="text-4xl font-bold">Start a Project</h1>
          <button className="border-[1px] border-white px-5 py-1 rounded-full mt-2">Contact Us</button>
          </>          
        ) : (
          <p className="text-sm mt-2 font-medium text-zinc-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        )}     
        
      </div>
    </div>
  );
}

export default Card;
