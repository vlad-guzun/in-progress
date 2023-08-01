'use client'

import axios from 'axios'
import { useState } from "react"

const CreatePrompt = () => {
  const [prompt, setPrompt] = useState('')

  const onSubmit = async(e) => {
    e.preventDefault()
    try{

      const response = await axios.post('/api/',{prompt})
      console.log(response)

    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className='text-4xl md:text-5xl sm:text-3xl text-blue-950 mt-12 md:mt-20'>
      <h1 className='text-center'>
        <b>Create a prompt</b>
        <span>
          <b className='text-purple-900'> ,of value</b>
        </span>
      </h1>
      <form onSubmit={onSubmit} className='flex justify-center items-center md:pt-40 pt-20'>
        <div className='border border-gray-300 rounded p-4 w-1/2 flex flex-col items-center'>
          <label className='block mb-2 font-bold md:text-3xl text-2xl'>Your valuable prompt</label>
          <input
            className='w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm'
            placeholder='how do I make an HTTP request in javascript'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button className='bg-blue-950 text-white border-none p-2 mt-4 text-2xl md:text-3xl'><b>make sure it's <span className='text-pink-600'>good</span></b></button>
        </div>
      </form>
    </div>
  );
};

export default CreatePrompt
