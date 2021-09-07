import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { Container } from 'react-bootstrap';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://gentle-temple-03042.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <Container>
      <section id="services" className="services-container mt-5">
        <div className="text-center text-white">
          <h5>OUR SERVICES</h5>
          <h2 className="text-primary">Services We Provide</h2>
        </div>
        <Container>
          <div className="row mt-5 pt-5 text-primary">
            {services.map((service) => (
              <ServiceDetail
                service={service}
                key={service._id}
              ></ServiceDetail>
            ))}
          </div>
        </Container>
      </section>
    </Container>
  );
};

export default Services;
