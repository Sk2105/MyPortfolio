import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link } from 'react-scroll'
import Introduction from './components/Introduction'
import Skills from './components/Skills'
import Contact from './components/Contact'
import About from './components/About'
import tabs from './Tabs'
import Project from './components/Project'

import Header from './components/Header'
import Footer from './components/Footer'


function App() {


  return (
    <div className='w-full h-full'>

      <Introduction />
      <Header />



      <div className='w-full h-full bg-[#0a192f] text-gray-300'>
        <section id='introduction'>
          </section>
        <section id='about'>
          <About />
        </section>
        <section id='skills'>
          <Skills />
        </section>
        <section id='project'>
          <Project />
        </section>
        <section id='contact'>
          <Contact />
        </section>

      </div>
      <Footer />



    </div>
  )
}

export default App
