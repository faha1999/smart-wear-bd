import React from 'react';
import { shopCategories } from '../../data/shopCategories';

export const ShopCategories = () => {
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
        </div>
        {shopCategories.map((data, index) => (
          <div className="box f_flex" key={index}>
            <span style={{ margin: '.625rem 0' }}>{data.cateName}</span>
          </div>
        ))}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};
