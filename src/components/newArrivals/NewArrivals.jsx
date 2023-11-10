import React from 'react';
import { AiFillCaretRight } from 'react-icons/ai';
import { NewArrivalsCard } from './NewArrivalsCard';

export const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading d_flex">
            <div className="heading-left row  f_flex">
              <img
                src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-new-shopping-and-commerce-flatart-icons-flat-flatarticons.png"
                alt="New Arrivals"
              />
              <h2>New Arrivals </h2>
            </div>
            <div className="heading-right row ">
              <span>View all</span>
              <AiFillCaretRight />
            </div>
          </div>

          <NewArrivalsCard />
        </div>
      </section>
    </>
  );
};
