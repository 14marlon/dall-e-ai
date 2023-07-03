import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
          <Link to="/">
            <img src={logo} alt='logo' className='w-28 object-contain' />
          </Link>

          <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
            Create
          </Link>
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-post' element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>

      <hr className='mt-2' />

      <div className='flex justify-between px-3 bg-gray-400'>
        <h2 className='mt-1'>Created By: Lhon Aragon</h2>
        <div className='flex justify-evenly gap-2'>
          <a href="https://www.facebook.com/allesso.allesso.75/" target='_blank'>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/aragonlhon/" target='_blank'>
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://twitter.com/aragonmarlon1" target='_blank'>
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </div>
      <p className='bg-gray-300 text-xs px-2 py-1.5'>ChatGPT is a language model developed by OpenAI, designed to respond to text-based queries and generate natural language responses. It is part of the broader field of artificial intelligence known as natural language processing (NLP), which seeks to teach computers to understand and interpret human language.</p>
    </>
  )
}

export default App