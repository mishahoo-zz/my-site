import React, { Component } from 'react';
import './Projects.css';
import Project from './Project.js';
import projects from './data/projectData';
import { Carousel } from 'react-responsive-carousel';
// import styles from 'react-responsive-carousel/lib';

class Projects extends Component {

  render() {
    return (
      <div>
        <h1 id="projects-header">projects</h1>
        <Carousel
          showThumbs={false}
          showArrows={true}
          showIndicators={false}
          // autoPlay={true}
          infiniteLoop={true}
          >
            {projects.map((project) => {
              return <Project key={project.title} project={project}/>
            })}
          </Carousel>
      </div>
    )
  }

}

export default Projects;
