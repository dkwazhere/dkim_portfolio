import React, { Component } from "react";
import { Row, Col, Container } from "reactstrap";
import homepic from "../../assets/images/home-background.jpg";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <Container className='home-container'>
      <Row>
        <Col>
        <div className="home-pic">
          <img id="home-pic" src={homepic}></img>
        </div>
        </Col>
        <div className="home-intro">
          <a id="intro-intro">
            Hi, I am <br/>
          </a>
          <a id="intro-name">
            David Kim
          </a>
        </div>
        </Row>
      </Container>
    );
  }
}

export default Home;
