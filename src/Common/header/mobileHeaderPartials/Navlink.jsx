import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { Link } from 'react-router-dom';

export const Navlink = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="navlink">
        <ul
          className={MobileMenu ? 'nav-links-Mobile' : 'link f_flex capitalize'}
          onClick={() => setMobileMenu(false)}
        >
          <button
            className="toggle"
            style={{
              float: 'right',
              background: 'transparent',
            }}
            onClick={() => setMobileMenu(!MobileMenu)}
          >
            {MobileMenu ? <GrClose className="mobileClose home-btn" /> : ''}
          </button>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/pages">pages</Link>
          </li>
          <li>
            <Link to="/user">user account</Link>
          </li>
          <li>
            <Link to="/vendor">vendor account</Link>
          </li>
          <li>
            <Link to="/track-my-order">track my order</Link>
          </li>
          <li>
            <Link to="/contact-us">contact</Link>
          </li>
        </ul>

        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
          {MobileMenu ? (
            <GrClose className="mobileClose home-btn" />
          ) : (
            <FaBars className="mobileOpen" />
          )}
        </button>
      </div>
    </>
  );
};
