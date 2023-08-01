'use client'

import axios from 'axios'
import React, { useState, useEffect } from 'react'
import {BiUpvote} from 'react-icons/bi'

const Dashboard = () => {
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const getPrompts = async () => {
      try {
        const response = await axios.get('/api/all-prompts')
        .then((data) => {
          setPrompts(data.data.prompts)
        })
               
      } catch (err) {
        console.log(err);
      }
    };

    getPrompts();
  }, []);

  return (
    <div className='text-center mt-10 md:mt-25'>
      <h1 className='text-4xl lg:text-5xl sm:text-2xl text-blue-900'>
        <b>Discover the best prompts</b>
      </h1>
      <p>rated by upvotes</p>

      <div className='max-w-2xl mx-auto mt-4'>
        {prompts.map((prompt) => (
          <div
            className='text-2xl border-blue-900 p-4 rounded-lg mb-4 flex justify-center sm:p-2 sm:border-2/3 border'
          >
            {prompt.prompt}
            <button>{<BiUpvote />}{1}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
