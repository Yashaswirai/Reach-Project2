import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";
function Button({val="Start a Project",icon=true}) {
  return (
    <div className='bg-zinc-300 w-fit px-5 py-2 rounded-full flex items-center justify-between gap-5'>
      <h1 className='text-black font-base font-[Satoshi] font-medium'>{val}</h1>
      {icon && <BsArrowReturnRight className='text-black' />}
    </div>
  )
}

export default Button
