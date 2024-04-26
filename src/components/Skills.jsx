import React from 'react'
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Github from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";

function Skills() {
  return (
    <div name="Skills" className='w-full h-screen bg-[#0a192f] text-gray-300'>
    {/* container*/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
         <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 py-4'>Skills</p>
            <p>//These are the technologies I've worked with</p>
         </div>
         <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='Html icon' />
            <p className='my-4'>HTMl</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Github icon' />
            <p className='my-4'>Github</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
            <p className='my-4'>Tailwind</p>
         </div>
         <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt='javascript icon' />
            <p className='my-4'>javascript</p>
         </div>
         </div>
      </div>
    </div>
  )
}

export default Skills
