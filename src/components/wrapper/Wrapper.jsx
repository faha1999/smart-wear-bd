import React from 'react';
import { wrapperData } from '../../data/wrapperData';

export const Wrapper = () => {
  return (
    <>
      <section className="wrapper background">
        <div className="container grid2">
          {wrapperData.map((data, index) => (
            <div className="product" key={index}>
              <div className="img icon-circle">{data.cover}</div>
              <h3>{data.title}</h3>
              <p>{data.decs}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
