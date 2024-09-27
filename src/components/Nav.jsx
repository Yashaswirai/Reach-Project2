import React from 'react'
import Button from './Button'
function Nav() {
    return (
        <div className='max-w-screen-xl mx-auto border-b-[1px] py-1 border-gray-500'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='h-16' src="https://assets-global.website-files.com/6024cb0edb66de5e830d3665/60343177940d0b566d3991b7_og.png" alt="" />
                    <div className='Links flex gap-10 ml-24'>
                        {["Home", "Work", "Culture", "", "News"].map((elem, idx) => (
                            elem.length > 1 ? (
                                <a className='flex items-center gap-1' href='#' key={idx}>
                                    {idx === 1 && <span className='w-1 h-1 rounded-full flex items-center justify-center gap-4 bg-green-400'></span>}
                                    {elem}
                                </a>
                            ) : (
                                <span key={idx} className='w-[1px] bg-gray-500'></span>
                            )
                        ))}
                    </div>
                </div>
                <Button/>
            </div>
        </div>
    )
}

export default Nav
