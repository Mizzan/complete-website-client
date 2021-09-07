import React from 'react';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import heroImage from '../../../images/heroImage.png';
const HeroArea = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row className="align-items-center">
          <Col sm={12} md={7}>
            <h1 className="text-primary">Get more customer and sales</h1>
            <p>
              We are digital agency & marketing, our primary target is providing
              the best possible services so that you can get the customers and
              sales you need to improve you business
            </p>
            <a href="#services">
              <Button variant="primary">Order Services</Button>
            </a>
          </Col>
          <Col sm={12} md={5}>
            <Image src={heroImage} alt="hero area picture" fluid />
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default HeroArea;
