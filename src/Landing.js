import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import App2 from "./proj1";

function Landing() {
  return (
    // NAVBAR https://www.geeksforgeeks.org/how-to-create-a-multi-page-website-using-react-js/
    <div>
    {/**/}
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <title>Rom's Portfolio</title>
      <meta name="description" content=""/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta name="robots" content="all,follow"/>
      
      <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css"/>
      
      <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.carousel.min.css"/>
      <link rel="stylesheet" href="vendor/owl.carousel2/assets/owl.theme.default.min.css"/>
      
      <link rel="stylesheet" href="vendor/modal-video/css/modal-video.min.css"/>
      
      <link rel="stylesheet" href="vendor/leaflet/leaflet.css"/>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,700&amp;font-display=swap"/>
      
      <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet"/>
      
      <link rel="stylesheet" href="css/custom.css"/>
      
      <link rel="shortcut icon" href="img/favicon.png"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>   
    </head>

    <header class="header fixed-top header-animated">
      <nav class="navbar navbar-expand-lg navbar-light py-3">
        <div class="container">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="navbar-brand">
              |  rom.valme@gmail.com | &nbsp;
                <a  href="https://github.com/cdr0mii"><i class="fa fa-github-square"></i></a> &nbsp; | &nbsp;
                <a  href="https://www.instagram.com/r_m_ld/"><i class="fa fa-instagram"></i></a> &nbsp; |
              </li>
              </ul>
              </div>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
              
              <li class="nav-item">
                <a class="nav-link active" href="index.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="projects.html">Projects</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="blogs.html">Blogs</a>
              </li>
              <li class="nav-item mr-2">
                <a class="nav-link" href="dream.html">Dream</a>
              </li>
              <li class="nav-item mr-2">
              <button class="btn btn-primary" type="button" data-target="#quoteForm" data-toggle="modal" onclick="window.open('Rom Valme Resume.pdf')">Resume</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* HERO SECTION*/}
    <section class="hero hero-home with-pattern d-flex align-items-center py-5">
      <div class="container py-5 mt-0">
        <div class="row align-items-center">
          <div class="col-md-6 mb-5 mb-md-0">
            <h2 class="mb-3"> <span class="text-primary">Rom Valme</span> </h2> 
            <p> <h5> Hey there ! </h5>
            <a href="#/proj1">proj1</a> <br/>
            Before you start browsing around, I would like to tell you a few things about me. 
            As a computer science professional,
             I like to create solutions to interesting problems using software.</p>
<p>I am currently working remotely as a computer engineer at Sandia National Labs in Albuquerque, New Mexico.
  There I'm working on cyber security, machine learning, and various other software systems. Before that I interned
  at the MITRE corporation where I worked with various cryptography technologies.
</p>
<p>I graduated from Worcester Polytechnic Institute with a bachelors in Electrical and Computer Engineering (2017) and a
  masters degree in Computer Science (2019).</p>
                 
            </div>
          <div class="col-md-5 ml-auto">
            <div class="img-gradient img-gradient-right"><img class="img-fluid shadow rounded" src="img/r0mii1.jpeg" alt=""/></div>
           <br/><br/> <p>Outside the world of computer science, I love to make music, write songs, and create visuals. I love to explore and travel to new 
              places. I've also taken up skateboarding, making videos, and writing about topics I'm interested in like wholistic wellness. I'm a lifelong learner with an undying passion
              for creating. In this website you can find my portfolios, blogs and resume. </p>
          </div>
        </div>
      </div>
    </section>



  <footer>
  <p style={{"text-align":"center"}} class="text-muted text-small"> Template designed by 
  <a class="text-primary" href="https://bootstraptemple.com/p/corporate"> Bootstrap Temple </a></p>
  </footer>

    {/* Scroll top button */}
    <div class="scroll-top-btn" id="scrollTop"><i class="fas fa-long-arrow-alt-up"></i><span class="font-weight-bold text-uppercase small">To the Top</span></div>
    {/* JavaScript files*/} 
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="vendor/owl.carousel2/owl.carousel.min.js"></script>
    <script src="vendor/modal-video/js/modal-video.min.js"></script>
    <script src="vendor/leaflet/leaflet.js"></script>
    <script src="js/front.js"></script>

    {/* FontAwesome CSS - loading as last, so it doesn't block rendering */}
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous"/>
 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 

    </div>
);
}

export default Landing;
