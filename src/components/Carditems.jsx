import React from 'react'


const Carditems = ({ data }) => {
  return (
    <div class="relative flex w-80 flex-col rounded-xl text-white dark:text-white bg-clip-border shadow-lg tracking-tight">
      <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={data.imgUrl} alt="" srcset="" />
      </div>
      <div class="p-6">
        <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {data.Title}
        </h5>
        <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
        {data.des}
        </p>
      </div>
      <div class="flex justify-center gap-2 p-6 pt-0 ">
        <button 
        onClick={() => window.open(data.giturl, '_blank')}
        data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Github
        </button>
        <button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Demo
        </button>
      </div>
    </div>
  )
}

export default Carditems