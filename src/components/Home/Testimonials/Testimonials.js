import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://gentle-temple-03042.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-uppercase">Testimonial</h5>
          <h1 className="text-primary">
            What Our Customer <br /> Says{' '}
          </h1>
        </div>
        <div className="card-deck mt-5">
          {reviews.map((review) => (
            <Testimonial review={review} key={review._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
