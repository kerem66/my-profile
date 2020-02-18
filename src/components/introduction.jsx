import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc" >
                          <h1 style={{color:"white"}} >Hi! <br />I'm Salih Kerem Harman</h1>
                          <p><a style={{color:"white"}} className="btn btn-link btn-large" href="https://docs.google.com/document/d/15coSa2rnZcdywihM-pWTvoGqE65JAkxQAh6JDBNrF2Q/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV<i style={{color:"white"}} className="icon-download4" /></a>
                          </p>
                          <p><a style={{color:"white"}} className="btn btn-link btn-large" href="https://github.com/kerem66" target="_blank" rel="noopener noreferrer">View My Github Profile <i style={{color:"white"}} className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color:"white"}}>I love building<br /> THINGS !!</h1>
                          <p><a style={{color:"white"}} className="btn btn-link btn-large" href="https://github.com/kerem66" target="_blank" rel="noopener noreferrer">View My Github Profile <i style={{color:"white"}} className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
