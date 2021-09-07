import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './ManageService.css';

const ManageService = () => {
  const [getReviews, setReviews] = useState([]);
  const [getServices, setServices] = useState([]);
  useEffect(() => {
    fetch('https://gentle-temple-03042.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setReviews(data);
      });
    fetch('https://gentle-temple-03042.herokuapp.com/services')
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);

  const deleteItem = (event, id) => {
    fetch(`https://gentle-temple-03042.herokuapp.com/deleteItem/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(event.target);
          event.target.parentElement.style.display = 'none';
        }
      });
  };

  return (
    <div>
      <h2 className="text-center m-5 text-primary border p-2">
        Manage Reviews and Services
      </h2>
      <div className="manage-items">
        {getReviews.length === 0 && (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}

        <div className="reviews-section py-5">
          <h4 className="p-2 text-primary">All Reviews</h4>
          {getReviews.map((review) => (
            <p key={review._id} className="details">
              {review.name}
              <button
                onClick={(event) => deleteItem(event, review._id)}
                className="manage-btn"
              >
                Delete
              </button>{' '}
            </p>
          ))}
        </div>

        <div className="services-section">
          <h4 className="p-2 text-primary">All Services</h4>
          {getServices.map((service) => (
            <p key={service._id} className="details">
              {service.name}
              <button
                onClick={(event) => deleteItem(event, service._id)}
                className="manage-btn"
              >
                Delete
              </button>{' '}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageService;
