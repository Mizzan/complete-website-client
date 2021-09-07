import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from 'react-feather';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Row>
            <Col sm={6} lg={3}>
              <h4 className="text-uppercase mb-2">about us</h4>
              <ul className="p-0">
                <li className="py-2">
                  <a href="/">ReMarket</a>
                </li>
                <li className="py-2">
                  <a href="/">Testimonials</a>
                </li>
                <li className="py-2">
                  <a href="/">Career</a>
                </li>
                <li className="py-2">
                  <a href="/">Partners</a>
                </li>
                <li className="py-2">
                  <a href="/">Affiliate Program</a>
                </li>
              </ul>
            </Col>
            <Col sm={6} lg={3}>
              <h4 className="text-uppercase mb-2">Services</h4>
              <ul className="p-0">
                <li className="py-2">
                  <a href="/">Digital Marketing</a>
                </li>
                <li className="py-2">
                  <a href="/">Affiliate Marketing</a>
                </li>
                <li className="py-2">
                  <a href="/">Data Analytics</a>
                </li>
                <li className="py-2">
                  <a href="/">Social Media Marketing</a>
                </li>
                <li className="py-2">
                  <a href="/">SEO Ranking</a>
                </li>
              </ul>
            </Col>
            <Col sm={6} lg={3}>
              <h4 className="text-uppercase mb-2">Support</h4>
              <ul className="p-0">
                <li className="py-2">
                  <a href="/">Frequently Asked</a>
                </li>
                <li className="py-2">
                  <a href="/">Terms & Conditions</a>
                </li>
                <li className="py-2">
                  <a href="/">Privacy Policy</a>
                </li>
                <li className="py-2">
                  <a href="/">Help Center</a>
                </li>
                <li className="py-2">
                  <a href="/">Contact us</a>
                </li>
              </ul>
            </Col>
            <Col className="pb-3" sm={6} lg={3}>
              <h4 className="text-uppercase mb-2">Follow us</h4>
              <p>
                Have some feedback or ideas that would improve out workflow
                better, well. You can reach us through social media and also
                follow us for better offers and info.
              </p>

              <div className="social-address">
                <a href="/">
                  <Facebook />
                </a>
                <a href="/">
                  <Instagram />
                </a>
                <a href="/">
                  <Linkedin />
                </a>
                <a href="/">
                  <Twitter />
                </a>
                <a href="/">
                  <Youtube />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
