import React from 'react'
import Stripe from './Stripe'
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"

function Stripes() {
    const items = [
        {url:img1,number:48},
        {url:img2,number:2},
        {url:img3,number:11},
        {url:img1,number:48},
        {url:img2,number:2},
        {url:img3,number:11},
    ]
  return (
    <div className='w-full flex my-20'>
        {items.map((item,idx)=>(
            <Stripe key={idx} val={item}/>
        ))}
    </div>    
  )
}

export default Stripes
