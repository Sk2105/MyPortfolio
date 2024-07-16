import React from 'react'
import { Link } from 'react-scroll'
import profileImg from "../assets/profile-modified.png"


export default function Introduction() {
  return (
    <div className='w-full h-fit  bg-[#0a192f] p-2'>
      <div className='w-full h-fit flex justify-around items-center'>
        <div className='text-white text-sm sm:text-md md:text-xl lg:text-2xl font-bold flex justify-center items-center'>
          <div className='w-6 sm:w-7 md:w-8 lg:w-10 h-6 sm:h-7 md:h-8 lg:h-10 inline-block m-1 p-[2px] ring-1 ring-sky-500 rounded-full'>
            <img src={profileImg} alt="sky" />
          </div>
          Hi, I am Sachin
        </div>
        <div className='flex gap-5 p-2 justify-evenly items-center'>

          <div onClick={() =>
             window.open("https://www.linkedin.com/in/saching91/")} className='cursor-pointer text-gray-400 text-[10px] sm:text-sm md:text-base lg:text-base hover:text-white duration-300 '>
            Linkedin
          </div>

          <div onClick={
            () => window.open("https://github.com/Sk2105")
          } className='cursor-pointer text-gray-400 text-[10px] sm:text-sm md:text-base lg:text-base hover:text-white duration-300'>
            Github
          </div>


        </div>
      </div>

      <div className='w-full h-fit  top-0 flex justify-center items-center flex-col p-4'>
        <div className='w-24 sm:w-28 md:w-40 lg:w-60 h-24 sm:h-28 md:h-40 lg:h-60  p-1 ring-[5px] ring-sky-500 rounded-full m-2'>
          <img src={profileImg} alt="hero" />
        </div>

        <div className='text-white text-base sm:text-xl md:text-2xl lg:text-3xl font-bold m-2'>

          Sachin Kumar
        </div>

        <div className='text-gray-400 text-center text-sm sm:text-base md:text-xl lg:text-2xl '>
          I am a Web Developer and Android Developer.
        </div>

        <div>
          <button className='bg-sky-500 hover:bg-sky-600 hover:shadow-2xl hover:shadow-sky-500  text-[#0a192f]  rounded-md p-2  m-2'>
            <Link
              to='contact'
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              key={'contact'}
            >
              Contact us
            </Link>
          </button>
        </div>


      </div>


    </div>

  )
}
