import { useState } from 'react';
import React from 'react';
import Projects from './Projects';
import Showblog from './Showblog';
import Long from './Long';
import cv from "../../.././public/assets/cv.png"
const About = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleButtonClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='flex flex-col justify-center space-x-4 p-5'>
      <div className='flex justify-center space-x-20'>
        <button
          onClick={() => handleButtonClick('Showblog')}
          className="bg-neutral-900 border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
        >
          SHORT
        </button>

        <button
          onClick={() => handleButtonClick('Long')}
          className="bg-neutral-900	 border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
        >
          LONG
        </button>

        <button
          onClick={() => handleButtonClick('Projects')}
          className="bg-neutral-900 border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
        >
          Projects
        </button>
      </div>
      <div className='flex justify-center '>
        {activeComponent === null &&  <button
          onClick={() => handleButtonClick('Showblog')}
          className=" flex mt-40 justify-center items-center bg-neutral-900 border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
        >
          <img src={cv} className='' alt="" srcset="" /> 
        Download CV</button>}
        {activeComponent === 'Showblog' && <Showblog />}
        {activeComponent === 'Long' && <Long />}
        {activeComponent === 'Projects' && <Projects />}
      </div>
    </div>
  );
}

export default About;
