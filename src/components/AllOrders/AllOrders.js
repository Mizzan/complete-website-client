import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { Table, Spinner } from 'react-bootstrap';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(
      'https://gentle-temple-03042.herokuapp.com/orders?email=' +
        loggedInUser.email,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('token')}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        data.length > 1 ? setOrders(data) : setOrders(data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="order-checkout">
      {orders?.length === 0 ? (
        <h3>You have not ordered yet.</h3>
      ) : orders?.length > 1 ? (
        orders.map((order) => (
          <div key={order._id} className="order-details">
            <Table responsive striped bordered hover>
              <thead>
                <tr>
                  <th>Placed Order Date</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{order?.orderPlaced}</td>
                  <td>{order?.name}</td>
                  <td>${order?.price}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        ))
      ) : (
        <div className="order-details">
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Placed Order Date</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{orders?.orderPlaced}</td>
                <td>{orders?.name}</td>
                <td>${orders?.price}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default AllOrders;
