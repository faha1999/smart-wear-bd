import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { FaBars, FaBorderAll } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { MobileHeader } from './header/MobileHeader';

export const Navbar = ({ CartItem }) => {
  const location = useLocation();

  const [MobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="catgrories d_flex">
            <span>
              <FaBorderAll />
            </span>
            <h4>
              <Link to="/">
                Categories <BsChevronDown />
              </Link>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? 'nav-links-MobileMenu' : 'link f_flex capitalize'
              }
              onClick={() => setMobileMenu(false)}
            >
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'activePage' : ''}
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/pages"
                  className={location.pathname === '/pages' ? 'activePage' : ''}
                >
                  pages
                </Link>
              </li>
              <li>
                <Link
                  to="/user"
                  className={location.pathname === '/user' ? 'activePage' : ''}
                >
                  user account
                </Link>
              </li>
              <li>
                <Link
                  to="/vendor"
                  className={
                    location.pathname === '/vendor' ? 'activePage' : ''
                  }
                >
                  vendor account
                </Link>
              </li>
              <li>
                <Link
                  to="/track-my-order"
                  className={
                    location.pathname === '/track-my-order' ? 'activePage' : ''
                  }
                >
                  track my order
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={
                    location.pathname === '/contact-us' ? 'activePage' : ''
                  }
                >
                  contact
                </Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <GrClose className="close home-btn" />
              ) : (
                <FaBars className="open" />
              )}
            </button>
          </div>
        </div>

        <MobileHeader CartItem={CartItem} />
      </header>
    </>
  );
};
