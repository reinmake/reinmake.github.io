import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './animate.css';
import './img/icons/css/ionicons.css';
import './img/font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';

//import js libraries
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarComponent from './pages/navbar';
import AboutComponent from './pages/about';
import IntroComonent from './pages/intro';
import PortFolioComponent from './pages/portfolio';
import CareerComponent from './pages/career';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavbarComponent/>
    <IntroComonent />
    <AboutComponent />
    <CareerComponent />
    <PortFolioComponent />
  </React.StrictMode>
);

