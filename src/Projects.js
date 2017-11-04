import React, { Component } from 'react';
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
            <div className="carousel-box">
              <div className="project-info">
                <div className="project-gif">
                  <img className="project-gif-image" src="./assets/sharemykitchen.png" alt="project"></img>
                </div>
                <div className="project-description">
                  <h3 className="project-title" >Brainstorm</h3>
                  <p className="project-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <a className="fork-it" href="https://github.com/mishahoo/sharemykitchen">
                    <img src="https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png" alt="fork it" />
                  </a>
                </div>
              </div>
              {/* <img src="./assets/background2.jpg"></img> */}
              {/* <p className="legend">Project 1</p> */}
            </div>
            <div className="carousel-box">
              <div className="project-info">
                <div className="project-gif">
                  <img className="project-gif-image"src="./assets/sharemykitchen.png" alt="project"></img>
                </div>
                <div className="project-description">
                  <h3 className="project-title" >Brainstorm</h3>
                  <p className="project-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <a className="fork-it" href="https://github.com/mishahoo/sharemykitchen">
                    <img src="https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png" alt="fork it" />
                  </a>
                </div>
              </div>
              {/* <img src="./assets/background2.jpg"></img> */}
              {/* <p className="legend">Project 2</p> */}
            </div>
            <div className="carousel-box">
              <div className="project-info">
                <div className="project-gif">
                  <img className="project-gif-image"src="./assets/sharemykitchen.png" alt="project"></img>
                </div>
                <div className="project-description">
                  <h3 className="project-title" >Brainstorm</h3>
                  <p className="project-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <a className="fork-it" href="https://github.com/mishahoo/sharemykitchen">
                    <img src="https://greasyfork.org/forum/uploads/thumbnails/FileUpload/df/f87899bf1034cd4933c374b02eb5ac.png" alt="fork it" />
                  </a>
                </div>
              </div>
              {/* <img src="./assets/background2.jpg"></img> */}
              {/* <p className="legend">Project 3</p> */}
            </div>
          </Carousel>
      </div>
    )
  }

}

export default Projects;
