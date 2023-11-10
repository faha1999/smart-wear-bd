import React from 'react';
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export const CurrentCart = ({
  CartItem,
  setCartItem,
  addToCart,
  decreaseQty,
}) => {
  const totalPrice = CartItem
    ? CartItem.reduce((price, item) => price + item.qty * item.price, 0)
    : 0;

  const removeFromCart = (item) => {
    setCartItem(CartItem.filter((i) => i !== item));
  };
  return (
    <div className="currentCart">
      <h3>Current Cart</h3>

      <div className="currentCurtItems">
        {CartItem.map((item) => {
          const productQty = item.price * item.qty;

          return (
            <div className="cart-list product d_flex" key={item.id}>
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
                <div className="removeCart">
                  <button className="removeCart">
                    <AiOutlineClose onClick={() => removeFromCart(item)} />
                  </button>
                </div>

                <div className="cartControl d_flex">
                  <button className="incCart" onClick={() => addToCart(item)}>
                    <AiOutlinePlus />
                  </button>

                  <button className="desCart" onClick={() => decreaseQty(item)}>
                    <AiOutlineMinus />
                  </button>
                </div>
              </div>

              <div className="cart-item-price"></div>
            </div>
          );
        })}

        <div className="d_flex totalPrice">
          <h4>Total Price :</h4>
          <h3>${totalPrice}.00</h3>
        </div>
      </div>
    </div>
  );
};
