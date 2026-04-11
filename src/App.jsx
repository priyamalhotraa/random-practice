import React from 'react'

function app() {
  return (
    <div className='h-screen w-screen bg-black flex'>
      <div className='h-full w-6/12 bg-white'>
      <h1>The expert in <span className='text-[#ad8b48]'>Anything 
        <br/>
        was once</span> a
        <br/> BEGINNER.
      </h1>
      </div>
      <div className='h-full w-6/12 bg-red-200'>
      <img className='h-full w-full object-cover' src = "https://i.pinimg.com/236x/ee/0e/17/ee0e17eea5afa9decc7557bf56a650a5.jpg"></img>
      </div>
    </div>
  )
}

export default app