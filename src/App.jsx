import React, { useState } from 'react';
import { Header } from './Common/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Data } from './data/Data';
import { Cart } from './Common/cart/Cart';
import { shopData } from './data/shopData';
import { Footer } from './Common/footer/Footer';
import { Contact } from './pages/Contact';
import { TrackMyOrder } from './pages/TrackMyOrder';
import { CheckOut } from './pages/CheckOut';
import { User } from './pages/User';
import { Watch } from './productDetails/watch/Watch';
import { watchDetails, watchImg } from './data/productsDetails/watchDetails';
import { PageTitle } from './Common/pageTitle/PageTitle';
import { Whatsapp } from './Common/Whatsapp';

export const App = () => {
  const { flashData } = Data;
  const { shopItems } = shopData;

  const [CartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item,
        ),
      );
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        CartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <>
      <PageTitle title="sijonal - the best online shop in Bangladesh." />
      <BrowserRouter>
        <Header CartItem={CartItem} />
        <Whatsapp />

        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                flashData={flashData}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
                setCartItem={setCartItem}
              />
            }
          />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/user" element={<User />} />
          <Route path="/track-my-order" element={<TrackMyOrder />} />
          <Route
            path="/checkout"
            element={
              <CheckOut
                CartItem={CartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
                setCartItem={setCartItem}
              />
            }
          />

          <Route
            path="/watch"
            element={
              <Watch
                watchImg={watchImg}
                watchDetails={watchDetails}
                addToCart={addToCart}
              />
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};
