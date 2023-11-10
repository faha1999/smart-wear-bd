import React from 'react';
import { categoriesData } from '../../../data/categoriesData';

export const Categories = () => {
  return (
    <>
      <div className="category">
        {categoriesData.map((data, index) => (
          <div className="box f_flex" key={index}>
            <img src={data.cateImg} alt="{data.cateName}" />
            <span>{data.cateName}</span>
          </div>
        ))}
      </div>
    </>
  );
};
