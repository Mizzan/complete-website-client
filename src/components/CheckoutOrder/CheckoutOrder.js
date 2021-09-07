import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import './CheckoutOrder.css';
import { loadStripe } from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutOrder = () => {
  const [getItem, setItem] = useState({});
  const [serviceDetails, setServiceDetails] = useState({});
  const { serviceId } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderDate, setOrderDate] = useState({
    orderPlaced: new Date().toDateString(),
  });
  useEffect(() => {
    const servicesApi = 'https://gentle-temple-03042.herokuapp.com/services';
    fetch(servicesApi)
      .then((res) => res.json())
      .then((data) => {
        const getServiceData = data.filter(
          (service) => service._id === serviceId
        );
        setItem(getServiceData[0]);
        const sendServiceDetails = {
          ...loggedInUser,
          ...getServiceData[0],
          ...orderDate,
        };
        console.log(sendServiceDetails);
        setServiceDetails(sendServiceDetails);
      });
  }, [serviceId, loggedInUser, orderDate]);

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };

    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
  };

  const stripePromise = loadStripe(
    'pk_test_51IeBW4IXX3XUHLzycxhbsXWVpRpRa5b6QWRxTxvBSZXnz92Dr5BWAcy28HZ6d4gSAUQqpgsT4xebyGDt1IGNq2Wz00lTMCjqdN'
  );

  const handleCheckOutBtn = () => {
    const url = `https://gentle-temple-03042.herokuapp.com/addOrders`;

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceDetails),
    }).then((res) => console.log('server side response', res));

    alert('You order placed successfully');
  };

  return (
    <div className="order-checkout">
      <h3>Checkout</h3>
      <div className="order-details">
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{getItem?.name}</td>
              <td>1</td>
              <td>${getItem?.price}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{setOrderDate.orderPlaced}</td>
              <td>${getItem?.price}</td>
            </tr>
          </tfoot>
        </Table>

        <div className="stripe-payment">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
        <button
          onClick={handleCheckOutBtn}
          className="btn-primary checkout-btn p-2"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutOrder;
