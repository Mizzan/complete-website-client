import React, { useState } from 'react';
import AddReview from '../../AddReview/AddReview';
import AddService from '../../AddService/AddService';
import AllOrders from '../../AllOrders/AllOrders';
import './Dashboard.css';

const Dashboard = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [toggleContent, setToggleContent] = useState(true);
  const handleToggleContentTrue = () => {
    setToggleContent(true);
  };
  const handleToggleContentFalse = () => {
    setToggleContent(false);
  };

  const handleAllOrder = () => {
    setToggleContent('');
  };

  return (
    <section>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-12">
          <div
            className="sidebar d-flex flex-column py-5 px-4"
            style={{ height: '100vh' }}
          >
            <p onClick={handleAllOrder}>All Orders</p>
            <p onClick={handleToggleContentTrue}>Add Review</p>
            <p onClick={handleToggleContentFalse}>Add Service</p>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 col-12">
          {toggleContent === '' ? (
            <AllOrders></AllOrders>
          ) : toggleContent ? (
            <AddReview></AddReview>
          ) : toggleContent === false ? (
            <AddService></AddService>
          ) : null}
        </div>
        {/* <div className="col-md-5 col-sm-12 col-12 d-flex justify-content-center">
          This is Review
        </div> */}
      </div>
    </section>
  );
};

export default Dashboard;
