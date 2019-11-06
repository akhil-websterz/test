import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/navbar';
import './App.css';
import Slider from './component/slider';
import About from './component/about';
import Contact from './component/contact';
import Service from './component/services';
import { Router, Route, Switch } from "react-router";
  class App extends React.Component{
    render(){
      return(
        <div className="main">
          <NavBar />
          <Slider />
          <About />
          <Service />
          <Contact />
         
        </div>
      )
    }
  }
export default App;
