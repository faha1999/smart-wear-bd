import React, { useState } from 'react';
import axios from 'axios';
import { CgTrack } from 'react-icons/cg';
import { MyOrderDetails } from '../components/MyOrderDetails/MyOrderDetails';
import { PageTitle } from '../Common/pageTitle/PageTitle';

export const TrackMyOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [order, setOrder] = useState({});
  const [error, setError] = useState(null);
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://my-api.com/orders/${trackingNumber}`)
      .then((response) => setOrder(response.data))
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <div className="trackMyOrder container">
        <PageTitle title="Track my order" />

        <h1>Track My Order</h1>
        <form className="search-box" onSubmit={handleSubmit}>
          <CgTrack />
          <input
            type="text"
            id="tracking-number"
            placeholder="Enter tracking number"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
          <button className="btn-primary" type="submit">
            Track
          </button>
        </form>

        {error && <p className="error-message">{error}</p>}

        <div className="tracking-status-container">
          {order.status && (
            <div className="tracking-status">
              <h2>Order Status:</h2>
              <span>{order.status}</span>
            </div>
          )}

          <div className="tracking-status">
            <h2>Order Status:</h2>
            <span>sdlkvbvis</span>
          </div>

          {order.deliveryInfo && (
            <div className="delivery-info">
              <h2>Delivery Information:</h2>
              <p>
                Estimated Delivery Date:{' '}
                <span>{order.deliveryInfo.estimatedDeliveryDate}</span>
              </p>
              <p>
                Delivery Address: <span>{order.deliveryInfo.address}</span>
              </p>
              <p>
                Delivery Carrier: <span>{order.deliveryInfo.carrier}</span>
              </p>

              <button onClick={() => setShowOrderDetails(!showOrderDetails)}>
                {showOrderDetails ? 'Hide details' : 'See details'}
              </button>
            </div>
          )}

          <div className="delivery-info">
            <h2>Delivery Information:</h2>
            <p>
              Estimated Delivery Date: <span>hvbhsz</span>
            </p>
            <p>
              Delivery Address: <span>hvbhsz</span>
            </p>
            <p>
              Delivery Carrier: <span>hvbhsz</span>
            </p>

            <button onClick={() => setShowOrderDetails(!showOrderDetails)}>
              {showOrderDetails ? 'Hide details' : 'See details'}
            </button>
          </div>
        </div>

        <div>{showOrderDetails && <MyOrderDetails />}</div>

        {/* <button
          className="contact-btn"
          onClick={() =>
            (window.location.href = 'mailto:customersupport@sijonal.com')
          }
        >
          Contact Customer Support
        </button> */}
      </div>
    </>
  );
};
