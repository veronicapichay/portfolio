import React from 'react';
import TetrisImg from '../assets/Screenshottetris.png';
import ConsumptionImg from '../assets/ConsumptionTracker.jpg';
import YodaImg from '../assets/YodaApp.jpg';


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'>// Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-5'>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${TetrisImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 justify-center'>
              <div className='pt- text-center'>
                <span className='text-center text-2xl font-bold text-white tracking-wider justify-center'>
                  Tetris Clone C# WPF
                </span>
                <div className='pt-1 text-center'>
                  <span className='text-center text-xs font-thin text-white tracking-wider justify-center'>
                  A WPF application game that showcases Object Oriented paradigm programming. It features different level 
                  depending on the user’s score throughout the game
                  </span>
                </div>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ConsumptionImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 justify-center'>
              <div className='pt- text-center'>
                <span className='text-center text-2xl font-bold text-white tracking-wider justify-center'>
                  Tetris C# WPF
                </span>
                <div className='pt-1 text-center'>
                  <span className='text-center text-xs font-thin text-white tracking-wider justify-center'>
                    Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF
                    Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF
                  </span>
                </div>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className='text-center rounded-lg px-3 py-2 m-1 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${YodaImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            {/* Hover Effects */}
            <div className='opacity-0 group-hover:opacity-100 justify-center'>
              <div className='pt- text-center'>
                <span className='text-center text-2xl font-bold text-white tracking-wider justify-center'>
                  Tetris C# WPF
                </span>
                <div className='pt-1 text-center'>
                  <span className='text-center text-xs font-thin text-white tracking-wider justify-center'>
                    Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF
                    Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF Tetris C# WPF
                  </span>
                </div>
                <a href='/'> {/*add link to demo*/}
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='/'> {/*add link to github*/}
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
