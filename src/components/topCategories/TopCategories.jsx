import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { FaBorderAll } from 'react-icons/fa';
import { TopCart } from './TopCart';

export const TopCategories = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <FaBorderAll />
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <AiFillCaretRight />
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};
