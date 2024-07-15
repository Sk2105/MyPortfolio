import React from 'react'
import webProjects from './models/ProjectModels'
import projects from './models/ProjectModels'

function ProjectCard({ projects ,name }) {
  return (

    <div className='w-full h-fit flex justify-center items-center flex-col'>
     <h1 className='text-white text-3xl font-bold m-2'>{name}</h1>


      <div className='w-4/9 h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-2'>
        {
          projects.map((project) => (
            <div key={project.id} className='w-full  h-fit border  border-gray-50  rounded-2xl p-4 hover:shadow-lg hover:shadow-sky-400 hover:scale-[1.02] duration-300'>
              <div className='text-xl font-bold'>{project.name}</div>
              {
                project.skills.map((skill) => (
                  <div className='text-md inline-block m-1 text-sky-500 bg-gray-50/5 rounded-md p-1'>{skill}</div>
                ))

              }
              <div>{project.description}</div>
              <button onClick={() => window.open(project.githubUrl)} className='text-md inline-block m-2 text-[#0a192f] bg-sky-500 rounded-md p-2'>GitHub Link</button>

            </div>
          ))
        }

      </div>
    </div>
  )

}
export default function Project() {
  return (
    <div className='w-full h-fit bg-[#0a192f] text-gray-300'>
      {
        projects.map((project) => (

          <ProjectCard key={project.name} projects={project.projects} name={project.name} />
          
        ))
      }

    </div>
  )
}


