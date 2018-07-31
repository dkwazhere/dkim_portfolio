import React, { Component } from "react";
import { Container } from "reactstrap";
import codepic from "../../assets/images/code.jpeg";

import './Home.css';

class Home extends Component {
  render() {
    return (
      <Container className='home-container'>
        <div className="home-pic">
          
        </div>
        <div className="home-intro">
          <a id="intro-intro">
            Hi, I am <br/>
          </a>
          <a id="intro-name">
            David Kim
          </a>
        </div>
      </Container>
    );
  }
}

export default Home;
