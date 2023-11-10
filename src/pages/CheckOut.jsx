import React from 'react';
import { PageTitle } from '../Common/pageTitle/PageTitle';
import { CustomerInfo } from '../components/checkOutDetails/CeckoutInfo/CustomerInfo';
import { CurrentCart } from '../components/checkOutDetails/CurrentCart/CurrentCart';

export const CheckOut = ({ CartItem, setCartItem, addToCart, decreaseQty }) => {
  return (
    <section className="container checkOutSection">
      <PageTitle title="Check out" />

      <div className="d_flex">
        <CustomerInfo />
        <CurrentCart
          CartItem={CartItem}
          addToCart={addToCart}
          decreaseQty={decreaseQty}
          setCartItem={setCartItem}
        />
      </div>
    </section>
  );
};
