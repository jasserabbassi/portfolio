import React from 'react'

const Showblog = (isShortVisible) => {
  return (
    <div isShortVisible={isShortVisible}
    className='mt-5 p-4 max-w-[50%] text-center justify-center '>
        <p className=' font-inter'>Hi there! My name is 
        <span className='text-green-500 font-bold'> jasser abbassi</span>
        , on the internet as 
        <span className='text-green-500 font-bold'> Shmoxd </span >
          and I'm a <span className='text-green-500 font-bold'>Programming language Developer</span> and Tester.</p>

<p className='mt-5'>
Randomly listing some things i like <span className='text-fuchsia-500 font-bold'>linux</span>, <span className='text-green-500 font-bold'>programming languages</span>, 
 <span className='text-amber-500 font-bold'>web</span>, <span className='text-orange-600 font-bold'> bitcoin</span>
 ,<span className='text-red-500 font-bold'> mechanical keyboards</span>,
 <span className='text-orange-600 font-bold'> music</span>,
  <span className='text-red-500 font-bold'>photography</span>, and <span className='text-amber-500 font-bold'>F1</span> !
</p>
    </div>
  )
}

export default Showblog