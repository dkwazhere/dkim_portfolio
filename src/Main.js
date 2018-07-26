import React, { Component } from "react";
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import { Route, NavLink, HashRouter} from 'react-router-dom';
import './index.css';



class Main extends Component {
  render() {
    return(
      <HashRouter>
        <div>
          <h1>David Kim</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/aboutme">About Me</NavLink></li>
            <li><NavLink to="/resume">Resume</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>

          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/aboutme" component={AboutMe}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/portfolio" component={Portfolio}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main;
