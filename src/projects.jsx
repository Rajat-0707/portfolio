import React from 'react'
import './projects.css'

const Projects = (props) => {
return (
    <>
    
            
          
                <div className="p-cards">
                    <div className="image-project">
                        <img src={props.image} alt="Project" />
                    </div>
                    <div className="detail">
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        <a href={props.link}>View Project site</a> 
                    </div>
                </div>
          
      
    </>
)
}

export default Projects