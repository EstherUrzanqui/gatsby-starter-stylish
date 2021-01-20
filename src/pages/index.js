import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import p1 from '../assets/images/covidtalent.png';
import p2 from '../assets/images/belocal.png';
import p3 from '../assets/images/esperança.png';
import p4 from '../assets/images/portfolio-4.jpg';
import p5 from '../assets/images/routecalculator.png'

//import {Link, Router} from 'react-router-dom';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">{config.heading}</h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            About
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>
              Hi, I'm Esther, nice to meet you!
            </h2>
            <p className="lead mb-5">
            Recent full stack web developer graduate from CodeOp bootcamp at Barcelona. During my professional career I’ve acquired experience in Customer Service, Events, Marketing and Administration. 
            I consider myself curious, a continuous learner and passionate about computers and technology in general, which got me to start this new adventure as a developer. 

            I’m confident, naturally problem solver and always working to improve myself professional and personally. 
            </p>
            {/*<Scroll type="id" element="myCv" offset={100}>*/}
              <a className="btn btn-dark btn-xl" href="https://drive.google.com/file/d/1xO8b_4xYZsjWuy9ws-yrA3q87vTAw1yv/view?usp=sharing" target="_blank" rel = "noopener noreferrer">
                My CV
              </a>
            {/*</Scroll>*/}
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-primary text-white" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0"> My Portfolio</h3>
          <h2 className="mb-5">Projects</h2>
        </div>
        <div className="row no-gutters">
        <div className="col-lg-12">
        <div>
            <span className="caption">
              <span className="caption-content">
                <h2>Cost Trip Calculator</h2>
                <p className="mb-0">
                This app was developed and designed using a third party API, Mapbox-gl. The aim was to calculate the costs of a trip depending on the vehicle. 
                It can be calculated by distance, entering coordinates or addresses. 
                <br></br>
                <br></br>
                <b>Tools</b>: React.js, CSS, Bootstrap, Mapbox-gl, and Heroku
                </p>
                <br></br>
                <a href="https://github.com/EstherUrzanqui/routecalculator" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-light mr-4">
                  Source Code
                </a>
                <a href="https://costscalculator.herokuapp.com/" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-dark">
                  See live
                </a>
              </span>
            </span>
          </div>
          <br></br>
            <a className="portfolio-item" href="https://costscalculator.herokuapp.com/" target="_blank" rel = "noopener noreferrer">
              <img className="img-fluid" src={p5} alt="" />
            </a>
      </div>
      <div className="col-lg-12">
        <div>
            <span className="caption">
              <span className="caption-content">
                <h2>beLocal</h2>
                <p className="mb-0">
                This app was developed and designed in three weeks in collaboration with <a class="link" href="https://www.linkedin.com/in/annatowarek/" target="_blank" rel = "noopener noreferrer">Anna Towarek</a> and <a class="link" href="https://www.linkedin.com/in/mariona-clara/" target="_blank" rel = "noopener noreferrer">Mariona Clará.</a> 
                It is a multi-sided marketplace that promotes local tourism and communities by providing eco friendly activities hosted by local experts. 
                <br></br>
                <br></br>
                <b>Tools</b>: React.js, Node/Express, RESTful API, Sequelize, CSS, Bootstrap,Google Maps API integration, JWT authentication, EmailJS and Heroku
                </p>
                <br></br>
                <a href="https://github.com/EstherUrzanqui/fspt2-finalproject" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-light mr-4">
                  Source Code
                </a>
                <a href="https://belocalcatalonia.herokuapp.com/" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-dark">
                  See live
                </a>
              </span>
            </span>
          </div>
          <br></br>
            <a className="portfolio-item" href="https://github.com/EstherUrzanqui/fspt2-finalproject" target="_blank" rel = "noopener noreferrer">
              <img className="img-fluid" src={p2} alt="" />
            </a>
      </div>
      <br></br>
          <div className="col-lg-12">
            <div>
              <span className="caption">
                <span className="caption-content">
                  <h2>COVID-Talent</h2>
                  <p className="mb-1">
                  This is my first project ever, a MVP designed in two weeks 
                  with the aim to connect professionals that were laid off during the 
                  recent pandemic situation with companies in search of new talent. 
                  It is free bias, only professional information is shown to make  
                  the search simple and accurate. 
                  <br></br>
                  <br></br>
                  <b>Tools</b>: React.js, Node/Express, RESTful API, MySQL, CSS, Bootstrap and EmailJS.
                  </p>
                  <br></br>
                  <a href="https://github.com/EstherUrzanqui/fspt2-mvp-talent" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-light mr-4">
                    Source Code
                  </a>
                </span>
              </span>
          </div>
          <br></br>
            <a className="portfolio-item" href="https://github.com/EstherUrzanqui/fspt2-mvp-talent" target="_blank" rel = "noopener noreferrer">
              <img className="img-fluid" src={p1} alt="" />
            </a>   
      </div> 
      <div className="col-lg-12">
        <div>
          <span className="caption">
            <span className="caption-content">
              <h2>Esperança Project</h2>
                <p className="mb-0">
                An app designed by <a class="link" href="https://www.linkedin.com/in/carolinadorella/" target="_blank" rel = "noopener noreferrer">Carolina Dorella</a> for a Charity (Esperança) that provides food for homeless in Barcelona. 
                I collaborated in this app as part of adding feature extension to the original code. 
                My implementation included: Adding multiple form fields dynamically, and setting up a functional contact form. 
                <br></br>
                <br></br>
                <b>Tools</b>: React.js, Node/Express, RESTful API, MySQL, CSS, Bootstrap, EmailJS.
                </p>
                <br></br>
                <a href="https://github.com/cdorella/fspt2-volunteer-sign-up-project" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-light mr-4">
                  Source Code
                </a>
                <a href="https://volunteer-sign-up-project.herokuapp.com/" target="_blank" rel = "noopener noreferrer" className="btn btn-xl btn-dark">
                  See live
                </a>
              </span>
            </span>
          </div>
          <br></br>
            <a className="portfolio-item" href="https://github.com/cdorella/fspt2-volunteer-sign-up-project" target="_blank" rel = "noopener noreferrer">
              <img className="img-fluid" src={p3} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/*<section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">The buttons below are impossible to resist...</h2>
        <a href="/#" className="btn btn-xl btn-light mr-4">
          Contact Me
        </a>
        <a href="/#" className="btn btn-xl btn-dark">
          Look at Me!
        </a>
      </div>
    </section>*/}

     <section id="contact">
      {/*<iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A&amp;output=embed"
      ></iframe>
      <br />
      <small>
        <a href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;aq=0&amp;oq=twitter&amp;sll=28.659344,-81.187888&amp;sspn=0.128789,0.264187&amp;ie=UTF8&amp;hq=Twitter,+Inc.,+Market+Street,+San+Francisco,+CA&amp;t=m&amp;z=15&amp;iwloc=A"></a>
      </small>*/}
    </section> 

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
