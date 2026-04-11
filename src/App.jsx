import React from 'react'

function app() {
  return (
    <div className='h-screen w-screen bg-black flex'>
      <div className='h-full w-6/12 bg-white'>
      <h1 className='font-semibold text-6xl mx-20 my-54'>The expert in <span className='text-[#ad8b48]'>Anything 
        was once</span> a
        <br/> BEGINNER.
      </h1>
      <button className='bg-[#ad8b48] p-2 '>Let's Rock.</button>
      </div>
      <div className='h-full w-6/12 bg-red-200'>
      <img className='h-full w-full object-cover ' src = "https://i.pinimg.com/736x/5a/22/ac/5a22aca8ef3f27a29a2083c99ff9cd94.jpg"></img>
      </div>
    </div>
  )
}

export default app 