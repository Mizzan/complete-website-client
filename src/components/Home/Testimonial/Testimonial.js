import React from 'react';

const Testimonial = ({ review }) => {
  const { quote, name, whereFrom, imageURL } = review;
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="card-text text-center">{quote}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={imageURL} alt="" width="60" />
        <div>
          <h6 className="text-primary">{name}</h6>
          <p className="m-0">{whereFrom}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
