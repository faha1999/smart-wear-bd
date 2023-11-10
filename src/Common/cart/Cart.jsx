import React from 'react';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { PageTitle } from '../pageTitle/PageTitle';

export const Cart = ({ CartItem, setCartItem, addToCart, decreaseQty }) => {
  const totalPrice = CartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0,
  );

  const removeFromCart = (item) => {
    setCartItem(CartItem.filter((i) => i !== item));
  };

  return (
    <>
      <section className="cart-items">
        <PageTitle title="My cart" />

        <div className="container d_flex d_flex_sm">
          <div className="cart-details">
            {CartItem.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {CartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="removeCart d-sm-block">
                    <button className="removeCart">
                      <AiOutlineClose onClick={() => removeFromCart(item)} />
                    </button>
                  </div>

                  <div className="img">
                    <img src={item.cover} alt={item.name} />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 * {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart d-sm-none">
                      <button className="removeCart">
                        <AiOutlineClose onClick={() => removeFromCart(item)} />
                      </button>
                    </div>

                    <div className="cartControl d_flex">
                      <button
                        className="incCart"
                        onClick={() => addToCart(item)}
                      >
                        <AiOutlinePlus />
                      </button>

                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            <h2>Cart Summary</h2>
            <div className="d_flex">
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>

            {CartItem.length > 0 && (
              <div className="checkOut">
                <Link to="/checkout">
                  <button>Check out</button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
