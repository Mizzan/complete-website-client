import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceDetail.css';

const ServiceDetail = ({ service }) => {
  const { name, _id: serviceId, serviceInfo, imageURL } = service;
  const history = useHistory();
  const handleService = (serviceId) => {
    const url = `/checkoutOrder/${serviceId}`;
    history.push(url);
  };
  return (
    <div
      onClick={() => handleService(serviceId)}
      className="col-md-4 service-detail-card p-3 text-center"
    >
      <img style={{ height: '50px' }} src={imageURL} alt="" />
      <h5 className="mt-3 mb-3">{name}</h5>
      <p className="text-white">{serviceInfo}</p>
    </div>
  );
};

export default ServiceDetail;
