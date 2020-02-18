import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Salih Kerem Harman</a></h1>
              <span className="email"><i className="icon-mail"></i> <h4>keremharman66@gmail.com</h4></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <a href="https://www.facebook.com/salihkerem.harman" target="_blank" rel="noopener noreferrer"><i className="icon-facebook2" /></a>
                <a style={{paddingLeft:"8px"}} href="https://twitter.com/keremharman66" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a>
                <a style={{paddingLeft:"8px"}} href="https://www.instagram.com/kerem.harman/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a>
                <a style={{paddingLeft:"8px"}} href="https://www.linkedin.com/in/salih-kerem-harman-591440152/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a>
                <a style={{paddingLeft:"8px"}} href="https://github.com/kerem66" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a>
              </ul>
            </nav>
          </aside>
        </div>
      </div>
    )
  }
}
