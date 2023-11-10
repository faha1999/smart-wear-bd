import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { ShopCard } from './ShopCard';
import { ShopCategories } from './ShopCategories';

export const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <ShopCategories />

          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <h2>Mobile Phones</h2>
              </div>
              <div className="heading-right row ">
                <span>View all</span>
                <AiFillCaretRight />
              </div>
            </div>
            <div className="product-content grid1">
              <ShopCard addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
