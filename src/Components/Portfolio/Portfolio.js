import React, { Component } from "react";
import './Portfolio.css';
import { Col, Row, Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import glasseslogo from '../../assets/images/glasses.png';
import ikdesignlogo from '../../assets/images/ikdesignlogo.png';
import jepbyjeplogo from '../../assets/images/jepbyjep.png';
import staytunedlogo from '../../assets/images/staytuned.jpg';
import teletubbycollector from '../../assets/images/teletubbyCollector.png';


class Portfolio extends Component {
  render() {
    return (
      <Container className="portfolio-container animated slideInDown">
        <Row>
          <img id="glasses-logo" alt="" src={glasseslogo}></img>
        </Row>
        <Row>
          <h2 id="portfolio-header">portfolio</h2>
        </Row>
        <Row>
          <Col>
            <div className="project-cards">
              <Card className="card1">
                <CardImg top width="15%" src={staytunedlogo} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Coming soon...</CardTitle>
                  <CardSubtitle></CardSubtitle>
                  <CardText></CardText>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="project-cards">
              <Card className="card2">
                <CardImg top width="15%" src={ikdesignlogo} alt="Card image cap" />
                <CardBody>
                  <CardTitle>IK Design</CardTitle>
                  <CardSubtitle>Front End Development</CardSubtitle>
                  <CardText>A portfolio built for a family friend. It was built using React.js.</CardText>
                  <Button href="https://github.com/dkwazhere/isaac-kim-portfolio">Github</Button>  |  <Button href="https://isaac-kim.herokuapp.com/">Live</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="project-cards">
              <Card className="card3">
                <CardImg top width="15%" src={jepbyjeplogo} alt="Card image cap" />
                <CardBody>
                  <CardTitle>JepByJep</CardTitle>
                  <CardSubtitle>Front End Development</CardSubtitle>
                  <CardText>A simplistic and stunning Ecommerce Site built using React.js and shopify API.</CardText>
                  <Button href="https://github.com/dkwazhere/testjepbyJep">Github</Button>  |  <Button href="http://jepbyjep.herokuapp.com/">Live</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
          <Col>
            <div className="project-cards">
              <Card className="card4">
                <CardImg top width="15%" src={teletubbycollector} alt="Card image cap" />
                <CardBody>
                  <CardTitle>TeleTubby Collector</CardTitle>
                  <CardSubtitle>Front End Development</CardSubtitle>
                  <CardText>A simple numbers game built using html, css, and javascript.</CardText>
                  <Button href="https://github.com/dkwazhere/Teletubby-Collector">Github</Button>  |  <Button>Live</Button>
                </CardBody>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Portfolio;
