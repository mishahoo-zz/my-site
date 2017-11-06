import React from 'react';
import './Project.css'

const Project = ({project}) => {
  return (
    <div className="carousel-box">
      <div className="project-info">
        <div className="project-gif">
          <img className="project-gif-image" src={project.image} alt="project"></img>
        </div>
        <div className="project-description">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-text">{project.description}</p>
          <a className="fork-it" href={project.url}>
            <img src="https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png" alt="fork it" />
          </a>
        </div>
      </div>
      {/* <img src="./assets/background2.jpg"></img> */}
      {/* <p className="legend">Project 1</p> */}
    </div>
  )
}

export default Project;
