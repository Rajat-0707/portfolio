import React from 'react'
import './projects.css'

const Projects = (props) => {
return (
    <>
    
            
          
                <div className="p-cards">
                    <div className="image-project">
                        <img className='project-image'  src={props.image} alt="Project" />
                    </div>
                    <div className="detail">
                        <h3  className='project-title'>{props.title}</h3>
                        <p className='project-description'>{props.description}</p>
                        <a href={props.link}>View Project site</a> 
                    </div>
                </div>
          
      
    </>
)
}

export default Projects
