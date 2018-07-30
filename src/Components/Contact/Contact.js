import React, { Component } from "react";
import './Contact.css';
import { Row, Col, Container } from "reactstrap";
import phonelogo from '../../assets/images/phone.png';
import reachbanner from '../../assets/images/reachbanner.png';
import locationlogo from '../../assets/images/location.png';
import celllogo from '../../assets/images/cell.png';
import emaillogo from '../../assets/images/email.png';
import checklogo from '../../assets/images/check.png';

class Contact extends Component {
  render() {
    return (
      <Container className="contact-container animated slideInUp">
        <Row>
          <img id="phonelogo" alt="" src={phonelogo}></img>
        </Row>
        <Row>
          <h2 id="contact-header">Contact</h2>
        </Row>
        <Row>
          <img id="reachbanner" alt="" src={reachbanner}></img>
        </Row>
        <Row>
          <Col>
            <img className="reachme-logos" alt="" src={locationlogo}></img>
            <img className="reachme-logos" alt="" src={celllogo}></img>
            <img className="reachme-logos" alt="" src={emaillogo}></img>
            <img className="reachme-logos" alt="" src={checklogo}></img>
          </Col>
        </Row>
        <Row>
          <Col>
            <a className="reachme-info">Based in Los Angeles, USA</a>
            <a className="reachme-info">Tel: +310 933 2115</a>
            <a className="reachme-info">Dkim637@outlook.com</a>
            <a className="reachme-info">Freelance available</a>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default Contact;
