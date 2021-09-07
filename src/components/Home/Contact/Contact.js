import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <>
      <div className="contact p-5 text-dark mt-5">
        <Container>
          <Row className="justify-content-center">
            <Col className="text-center w-50">
              <h1>Looking for the best digital agency & marketing solution?</h1>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
                pariatur, earum aspernatur placeat rem amet necessitatibus
                cupiditate officiis adipisci deleniti?
              </p>
              <Button variant="primary">Contact us</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Contact;
