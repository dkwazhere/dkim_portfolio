import React, { Component } from "react";
import './Resume.css';
import { Row, Col, Container } from "reactstrap";
import resumelogo from '../../assets/images/resumelogo.png';

class Resume extends Component {
  render() {
    return (
      <Container className="resume-container animated slideInUp">
        <Row>
          <img id="resume-logo" src={resumelogo}></img>
        </Row>
        <Row>
          <h2 id="resume-header">resume</h2>
        </Row>
      </Container>
    );
  }
}

export default Resume;
