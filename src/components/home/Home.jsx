import React from 'react';
import { Categories } from './partials/Categories';
import { Slider } from './partials/Slider';

export const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Categories />
          <Slider />
        </div>
      </section>
    </>
  );
};
