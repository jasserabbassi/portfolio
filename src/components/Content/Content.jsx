import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import logo from './logo.jpg'
const Content = () => {
  return (
    <div className='p-[1rem] grid-cols-2 flex font-inter  justify-center items-center  '>
      <div >
      <h1 className='text-4xl'> Jasser Abbassi</h1>
      <div></div>
      <div className=''>
        
      <p className=' ' ><TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'full stack developper',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Mern developper',
        1000,
        'Designer',
        1000,
        'Java developper',
        1000
      ]}
      wrapper="p"
      speed={50}
      style={{ fontSize: '1rem', display: 'inline-block' }}
      repeat={Infinity} /> </p>

      
      </div>
      </div>
      <div className="g-gray-300 p-4 rounded-full w-[300px]">
      <img
        src={logo}
        alt="jasserabbassi"
        className="rounded-full "
      />
    </div>
    </div>
  )
}

export default Content