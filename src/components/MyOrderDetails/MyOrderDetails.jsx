import React from 'react';
import { Steps } from './partials/Steps';
import { TrackingID } from './partials/TrackingID';

export const MyOrderDetails = () => {
  return (
    <div className="MyOrderDetails">
      <h1>Track my parcel</h1>
      <div className="d_grid">
        <TrackingID />

        <div className="tracking_details">
          <Steps />
        </div>

        <div className="customer_info">
          <h3 className="title">Customer and order info</h3>

          <div className="track_id">
            <h3 className="thin">Tracking ID</h3>
            <h3>
              <strong>642654812519</strong>
            </h3>
          </div>

          <div className="name">
            <h3 className="thin">Customer Name</h3>
            <h3>
              <strong>Jon dou</strong>
            </h3>
          </div>

          <div className="area">
            <h3 className="thin">Area</h3>
            <h3>
              <strong>Lorem ipsum dolor sit.</strong>
            </h3>
          </div>

          <div className="order_date">
            <h3 className="thin">Placed At</h3>
            <h3>
              <strong>Dec. 10th, 2023 05:60 pm</strong>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
