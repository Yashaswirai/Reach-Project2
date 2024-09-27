import React from 'react'
import Card from './Card'
function Cards() {
  return (
    <div className='w-full my-20'>
      <div className='max-w-screen-xl mx-auto pb-10 flex gap-2'>
        <Card wide={"basis-1/3"} start={false}/>
        <Card wide={"basis-2/3"} start={true} hover={"bg-violet-500"}/>
      </div>
    </div>
  )
}

export default Cards
