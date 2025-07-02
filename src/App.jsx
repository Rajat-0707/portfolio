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
       <Projects image="https://via.placeholder.com/150" title="Project 1" description="Description for project 1" link="#" />
       <Projects image="https://via.placeholder.com/150" title="Project 2" description="Description for project 2" link="#" />
       <Projects image="https://via.placeholder.com/150" title="Project 3" description="Description for project 3" link="#" />
       </Element>

     </div>
    </>
  
  )
}

export default App
