import React, { Component } from 'react';
import './AboutMe.css';
import { Row, Col, Container } from "reactstrap";

class AboutMe extends Component {
  render() {
    return(
      <Container className="aboutme-container">
        <Row>
        <h2>About me</h2>
        </Row>
        <p>
          Pras facilisis urna ornare ex volutpat, et
          convallis erat elementum. Ut aliquam, ipsum vitae
          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
          metus nec massa. Maecenas hendrerit laoreet augue
          nec molestie. Cum sociis natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus.
        </p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </Container>
    );
  }
}

export default AboutMe;
