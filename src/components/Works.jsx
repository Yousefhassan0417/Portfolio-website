import React from 'react'
import Netflix from "../assets/Netflix.png"
import ECommerce from "../assets/E-Commerce.png"
const Works = () => {
  return (
    <div name="Work" id='Work'  className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline-border-b-4 text-gray-300 border-pink-600'>Work</p>
            <p className='py-6'>// Check out some of my recent Work</p>
        </div>
        {/*container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*grid Item*/}
            <div style={{backgroundImage:`url(${Netflix})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center items-center mx-auto content-div'>

            {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
    React JS APPLication
                </span>
                    <div className='pt-8 text-center'>
                       <a href="https://netflix-2f3e.vercel.app/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                       </a>
                       <a href="https://github.com/Yousefhassan0417/Netflix.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                       </a>
                    </div>
                </div>
            </div>
        </div>
        <div 
       
        className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {/*grid Item*/}
            <div  style={{backgroundImage:`url(${ECommerce})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center items-center mx-auto content-div'>

            {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                <span className='text-2xl font-bold text-white tracking-wider'>
    React JS APPLication
                </span>
                    <div className='pt-8 text-center'>
                       <a href="https://yousefhassan0417.github.io/E-commerce/">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                       </a>
                       <a href="https://github.com/Yousefhassan0417/E-commerce.git">
                        <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                       </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
