// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Home from './home'
import React from 'react'
import './navbar.css'
import './home.css'
import Skills from './skills'
import Hr from './Hr'
import './hr.css'
import './skill.css'
import Projects from './projects'
import Mainpage from './mainpage'
import './main2.css'
import WordDisplay from './worddisplay'
import { Element } from 'react-scroll'

function App() {


  return (
    
    <>
      <div className="all">
    
      <Navbar />
      <Hr />
      <Element name="home" >
      <Mainpage />
      <Hr />
      
      <Home />
      </Element>
      <Hr />
      <Element name="skills" >
      <h1 className='myski'>My Skills</h1>
        <div className="skill">
      <Skills name="HTML" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
      <Skills name="CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
      <Skills name="JavaScript" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
      <Skills name="React" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
      <Skills name="Tailwind CSS" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
      <Skills name="C" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
      <Skills name="C++" image="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
      </div>
      </Element>
      
      <Element name="projects" >
          <Hr />
          <div className="box1">
                <h1 className='hh'>Featured Projects</h1>
            </div>
     
       <Projects image="o-e-g.jpg" title="odd even game" description="A simple game built with react to guess if the sum of number guessed by both the player and the computer is odd or even." link="https://project1-chi-eight.vercel.app/" />
       <Projects image="https://via.placeholder.com/150" title="Task manager" description="A task management website built with react , redux and css. to store tasks on local storage and manage them effectively." link="https://takss-xhwf.vercel.app/" />
         <Projects image="port-icon.jpg" title="My Portfolio" description="A showcase of my work , skills and projects. using react and css" link="https://portfolio-iota-swart-42.vercel.app/" />
       </Element>

     </div>
    </>
  
  )
}

export default App
