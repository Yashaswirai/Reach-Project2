import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] px-4 border-t-2 border-r-2 border-b-2 flex justify-between items-center'> 
        <div className='w-[45%]'>
            <img className='w-full' src={val.url} alt="" />
        </div>          
        <h1 className='text-2xl font-semibold'>{val.number}</h1>
    </div> 
  )
}

export default Stripe
