import React from 'react';
import logo from '../assets/images/sijonal(seasonal).png';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { HiShoppingBag } from 'react-icons/hi';

export const Search = ({ CartItem }) => {
  window.addEventListener('scroll', function () {
    const search = document.querySelector('.search');
    search.classList.toggle('active', window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex d-flex-colum">
          <div className="logo width">
            <Link to="/">
              <img src={logo} alt="sijonal" />
            </Link>
          </div>

          <div className="search-box f_flex">
            <BsSearch />
            <input type="text" placeholder="Search and hit enter..." />
            <span>Categories</span>
          </div>

          <div className="icon f_flex width icon-d-sm-none">
            <div className="icon-circle">
              <Link to="/user">
                <FaUserAlt />
              </Link>
            </div>
            <div className="cart">
              <Link to="/cart">
                <div className="icon-circle">
                  <HiShoppingBag />
                </div>
                <span>{CartItem.length === 0 ? '' : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
