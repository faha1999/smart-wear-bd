import React from 'react';
import { DiscountCard } from './DiscountCard';
import { AiFillCaretRight } from 'react-icons/ai';

export const Discount = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-gift-thanksgiving-justicon-lineal-color-justicon.png"
                alt="discount"
              />
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <AiFillCaretRight />
            </div>
          </div>
          <DiscountCard />
        </div>
      </section>
    </>
  );
};
