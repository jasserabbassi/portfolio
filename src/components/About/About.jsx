import { useState } from 'react';
import React from 'react'
import Projects from './Projects'
import Showblog from './Showblog';
import Long from './Long';


const About = () => {
  const [isShortVisible, setShortVisible] = useState(false);
  const handleButtonClick = () => {
    setShortVisible(!isShortVisible); // Toggle the visibility state
    setLongVisible(false)
    setBlogVisible(false)
  };
    const [isLongVisible, setLongVisible]= useState(false);
    const handleshort = () => {
      setLongVisible(!isLongVisible);
      setShortVisible(false)
      setBlogVisible(false)
    };
    const [isBlogVisible, setBlogVisible]= useState(false);
    const handleBlog = () => {
      setBlogVisible(!isLongVisible);
      setShortVisible(false)
      setLongVisible(false)
    };
 
  return (
    
    <div className='flex flex-col justify-center space-x-4  p-5'>
<div className='flex justify-center space-x-20'>

      <button
      onClick={handleButtonClick}
        className="bg-transparent border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
      >
        SHORT
      </button>

      <button
      onClick={handleshort}
        className="bg-transparent border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
      >
        LONG
      </button>

      <button
      onClick={handleBlog}
        className="bg-transparent border-black border rounded-full text-white px-4 py-2 transition duration-300 hover:bg-white hover:text-black"
      >
        BLOG
      </button>
</div>
     <div className='flex justify-center'>
      
  
     {isShortVisible && <Showblog /> }
     {isLongVisible && <Long /> }
     {isBlogVisible && <Projects /> }
     </div>
       
    </div>
    
  )
}

export default About