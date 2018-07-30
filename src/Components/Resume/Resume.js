import React, { Component } from "react";
import './Resume.css';
import { Row, Col, Container } from "reactstrap";
import resumelogo from '../../assets/images/resumelogo.png';
import worklogo from '../../assets/images/work.png';
import educationlogo from '../../assets/images/education.png';
import './Resume.css';

class Resume extends Component {
  render() {
    return (
      <Container className="resume-container animated slideInUp">
        <Row>
          <img id="resume-logo" alt="" src={resumelogo}></img>
        </Row>
        <Row>
          <h2 id="resume-header">resume</h2>
        </Row>
        <Row>
          <Col id="col1" xs="1">
            <div className="col1-divs">
              <Col xs="1">
                <img id="resume-logo" alt="" src={worklogo}></img>
                <h1>Work History</h1>
              </Col>
            </div>
            <div className="col1-divs">
              <Col xs="1">
                <h3>Self Employed</h3>
                <a className="company-name">Freelancer</a>
                <br/>
                <br/>
                <a>I am currently working as a freelancer<br/> looking for web developer job within the Los Angeles area
               <br/>I am attending school at El Camino College to pursue <br/>my degree in Computer Science to further my education.
                </a>
              </Col>
            </div>
            <div className="col1-divs">
              <Col xs="1">
                <h3>Ramp/Baggage Coordinator</h3>
                <a className="company-name">Horizon Aviation</a>
                <br/>
                <br/>
                <a>I worked as a coordinator for Horizon aviation for a couple years.<br/>
                I coordinated with airport operations, airline station managers, as well as <br/>
                other employees contracted with our company.
                </a>
              </Col>
            </div>
            <div className="col1-divs">
              <Col xs="1">
                <h3>Passenger Service Agent</h3>
                <a className="company-name">Swissport International Ltd.</a>
                <br/>
                <br/>
                <a>I was passenger service agent for a few years <br/>working with SAS(Scandinavian Airlines) and Spirit Airlines.
                I was lucky to be a part <br/> of SAS' re launch at LAX and learned alot of new <br/>and exciting things at the time.
                At spirit airlines I was a Full time gate agent <br/>and managed around 8 incoming and outgoing flights a day
                </a>
              </Col>
            </div>
            <div className="col1-divs">
              <Col xs="1">
                <h3>Server</h3>
                <a className="company-name">Star Korean BBQ</a>
                <br/>
                <br/>
                <a>Worked as a server for a Korean bbq restaurant for a few years
                <br/> I was in charge of cleaning the whole restaurant, preparing foods,<br/>
                seating customers, order necessary meats and sides <br/>
                and serve drinks/ alcohol using the POS system provided.
                </a>
              </Col>
            </div>
          </Col>

          <Col id="col2" xs="12">
          <div className="col2-divs">
            <Col xs="1">
              <img id="resume-logo" alt="" src={educationlogo}></img>
              <h1>Education</h1>
            </Col>
          </div>
          <div className="col2-divs">
            <Col xs="1">
              <h3>El Camino College</h3>
              <a className="school-name">Torrance, California</a>
              <a></a>
            </Col>
          </div>
          <div className="col2-divs">
            <Col xs="1">
              <h3>UCLA Extension Coding Bootcamp</h3>
              <a className="school-name">Westwood, California</a>
              <a></a>
            </Col>
          </div>
          <div className="col2-divs">
            <Col xs="1">
              <h3>Crimson Technical College</h3>
              <a className="school-name">Inglewood, California</a>
              <a></a>
            </Col>
          </div>
          <div className="col2-divs">
            <Col xs="1">
              <h3>South High School</h3>
              <a className="school-name">Torrance, California</a>
              <a></a>
            </Col>
          </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Resume;
