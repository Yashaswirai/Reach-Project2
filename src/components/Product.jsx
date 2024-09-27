import React from 'react'
import Button from './Button'

function Product({ val, count, mover }) {
    return (
        <div onMouseEnter={() => mover(count)} className='max-w-screen-xl mx-auto h-[18rem] py-6 flex items-center justify-between'>
            <h1 className='text-[3.5vw] font-normal'>{val.title}</h1>
            <div className='w-1/3 py-5'>
                <p className='text-lg leading-tight mb-5'>{val.description}</p>
                <div className='flex gap-5'>
                    {val.live && <Button val="Live Website" icon={false} />}
                    {val.case && <Button val="View Case Study" icon={false} />}
                </div>
            </div>

        </div>
    )
}

export default Product
