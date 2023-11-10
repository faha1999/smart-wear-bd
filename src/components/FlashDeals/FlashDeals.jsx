import React from 'react';
import { TiFlash } from 'react-icons/ti';
import { FlashCard } from './FlashCard';

export const FlashDeals = ({ flashData, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <TiFlash style={{ color: '#fa6a27', margin: '.625rem' }} />
            <h1>Flash Deals</h1>
          </div>
          <FlashCard flashData={flashData} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};
