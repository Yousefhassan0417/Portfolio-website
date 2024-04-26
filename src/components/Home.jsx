import React, { useState }  from 'react'
import{HiArrowNarrowRight} from "react-icons/hi"
const Home = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    // Scroll to the 'Work' section when the button is clicked
    const workSection = document.getElementById('Work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div name="home"  className='w-full h-screen bg-[#0a192f]'>
       {/*container */}
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>yousef hassan </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
         <p className='text-[#8892b0] py-4 max-w-[700px]'>im a front-end developer :

i Create the structure, style, and behavior of web pages using HTML, CSS,REACT,Bootstrap,Tailwind and JavaScript.
Translate design mockups into functional web pages, ensuring design fidelity and usability.
Ensure websites and applications are responsive, working well on different devices and screen sizes.
Test and debug for cross-browser compatibility, ensuring consistent performance across various browsers.
Optimize website performance by minimizing load times and optimizing code and assets.
Ensure accessibility for all users by following accessibility standards and implementing accessibility features.
Leverage front-end frameworks and libraries to streamline development and build scalable applications.
Use Git for version control to track changes and collaborate effectively with team members.
Integrate front-end code with back-end logic, enabling dynamic and interactive features.
Continuously learn and stay updated with the latest trends and technologies in front-end development.</p>
<div>
        <button onClick={handleClick}  className='text-white group border-2 px-6 py-4 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
        <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3' /> </span>
          </button>
       </div>
       </div>
    </div>
  )
}

export default Home
