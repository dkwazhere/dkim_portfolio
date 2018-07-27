import React, { Component } from "react";
import './Portfolio.css';
import { Row, Col, Container } from "reactstrap";
import glasseslogo from '../../assets/images/glasses.png';

class Portfolio extends Component {
  render() {
    return (
      <Container className="portfolio-container animated slideInUp">
        <Row>
          <img id="glasses-logo" src={glasseslogo}></img>
        </Row>
        <Row>
          <h2 id="portfolio-header">portfolio</h2>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
