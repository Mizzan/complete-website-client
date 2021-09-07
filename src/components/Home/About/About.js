import { Row, Container, Col, Image } from 'react-bootstrap';
import aboutImage from '../../../images/aboutImage.png';
const About = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-between">
          <Col sm={12} lg={6}>
            <div className="text-left mb-3">
              <h1 className="mb-3 text-primary">
                We help to grow your business
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                tenetur doloribus molestias ipsum et veniam necessitatibus
                cupiditate natus possimus! Suscipit.
              </p>
            </div>
            <div className="text-left">
              <ul>
                <li className="py-2">Online Presence</li>
                <li className="py-2">Marketing Strategy</li>
                <li className="py-2">Promote Local Sales</li>
              </ul>
            </div>
          </Col>
          <Col sm={12} lg={6}>
            <Image src={aboutImage} alt="about picture" fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
