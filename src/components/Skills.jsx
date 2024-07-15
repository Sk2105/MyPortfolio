import React from 'react'
import skills from './models/SkillsModel'

export default function Skills() {
  return (
    <div className='w-full h-fit bg-[#0a192f] flex justify-center items-center flex-col'>
      <h1 className='text-white text-3xl font-bold'>My Skills:-</h1>

      <div className='w-full h-fit flex flex-col justify-center items-center p-4 gap-4'>
        {
          skills.map((skill) => (

            <div key={skill.tag} className=' w-full h-fit flex flex-col  justify-around items-center m-2 p-4 '>
              <div className='text-white text-md sm:text-xl md:text-2xl lg:text-2xl text-center font-bold m-4'>{skill.tag}</div>
              <div className='w-full h-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center'>
              {
                skill.skillNames.map((name) => (
                  <div key={name.name} className='w-full h-fit rounded-2xl p-3 hover:shadow-2xl hover:shadow-blue-900 duration-300 flex flex-col justify-center items-center'>
                    
                      <img src={name.icon} alt={name.name} className='w-12 sm:w-16 md:w-20 lg:w-24 h-12 sm:h-16 md:h-20 lg:h-24' />
                  
                      <p className='text-white text-sm sm:text-sm md:text-base lg:text-xl font-bold text-center m-2'>{name.name}</p>
               
                  </div>
                ))
              }
              </div>


            </div>
          ))
        }

      </div>

    </div>
  )
}
