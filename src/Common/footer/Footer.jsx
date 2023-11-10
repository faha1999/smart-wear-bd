import React from 'react';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';
import logo from '../../assets/images/sijonal(seasonal).png';
import payment from '../../assets/payment.png';

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="box">
            <img src={logo} alt="sijonal(seasonal)" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <FaGooglePlay />
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <FaAppStore />
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>
                70 Washington Square South, New York, NY 10012, United States{' '}
              </li>
              <li>Email: info@sijonal.com</li>
              <li>Phone: +1 1123 456 780</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <div>
            <img src={payment} alt="payment" />
          </div>
          <p style={{ marginTop: '1rem', opacity: '.4' }}>
            &copy; sijonal.com {new Date().getFullYear()} All right reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
