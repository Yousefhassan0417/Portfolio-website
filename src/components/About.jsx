import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border b-4 border-pink-600'>About</p>
            </div>
            <div>

            </div>
        </div>
        <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. I'm Yousef, nice to meet you. please take a look around.</p>
            </div>
            <div><p>im a front-end developer :

i Create the structure, style, and behavior of web pages using HTML, CSS,REACT,Bootstrap,Tailwind and JavaScript.
Translate design mockups into functional web pages, ensuring design fidelity and usability.
Ensure websites and applications are responsive, working well on different devices and screen sizes.
Test and debug for cross-browser compatibility, ensuring consistent performance across various browsers.
Optimize website performance by minimizing load times and optimizing code and assets.
Ensure accessibility for all users by following accessibility standards and implementing accessibility features.
Leverage front-end frameworks and libraries to streamline development and build scalable applications.
Use Git for version control to track changes and collaborate effectively with team members.
Integrate front-end code with back-end logic, enabling dynamic and interactive features.
Continuously learn and stay updated with the latest trends and technologies in front-end development.</p></div>
        </div>
      </div>
    </div>
  )
}

export default About
