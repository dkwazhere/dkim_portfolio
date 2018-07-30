import React, { Component } from 'react';
import './AboutMe.css';
import { Row, Col, Container } from "reactstrap";
import skillsbanner from '../../assets/images/skills.jpg'
import aboutmelogo from '../../assets/images/aboutlogo.png';
import bootstrap from '../../assets/images/skills/bootstrap.png';
import css3 from '../../assets/images/skills/css3.png';
import firebase from '../../assets/images/skills/firebase.png';
import github from '../../assets/images/skills/github.png';
import heroku from '../../assets/images/skills/heroku.png';
import html5 from '../../assets/images/skills/html5.png';
import javascript from '../../assets/images/skills/javascript.png';
import jquery from '../../assets/images/skills/jquery.gif';
import mongodb from '../../assets/images/skills/mongodb.png';
import mysql from '../../assets/images/skills/mysql.png';
import node from '../../assets/images/skills/node.png';
import react from '../../assets/images/skills/react.png';

class AboutMe extends Component {
  render() {
    return(
      <Container className="aboutme-container animated slideInUp">
        <Row>
          <img id="aboutmelogo" alt="" src={aboutmelogo}></img>
        </Row>
        <Row>
          <h2 id="about-header">About me</h2>
        </Row>
        <Row>
          <p>
            I am a recent graduate of the UCLA coding bootcamp. <br/>
            One big reason i switched professions is my love for computers <br/>
            Another reason is problem solving.
          </p>
        </Row>
        <Row>
          <img src={skillsbanner} alt=""></img>
        </Row>
        <Row>
          <Col>
            <img className="skill-logo" alt="" src={html5}></img>
            <img className="skill-logo" alt="" src={css3}></img>
            <img className="skill-logo" alt="" src={javascript}></img>
            <img className="skill-logo" alt="" src={jquery}></img>
          </Col>
          <Col>
            <img className="skill-logo" alt="" src={react}></img>
            <img className="skill-logo" alt="" src={node}></img>
            <img className="skill-logo" alt="" src={mongodb}></img>
            <img className="skill-logo" alt="" src={mysql}></img>
          </Col>
          <Col>
            <img className="skill-logo" alt="" src={github}></img>
            <img className="skill-logo" alt="" src={firebase}></img>
            <img className="skill-logo" alt="" src={heroku}></img>
            <img className="skill-logo" alt="" src={bootstrap}></img>
          </Col>
        </Row>


      </Container>
    );
  }
}

export default AboutMe;
