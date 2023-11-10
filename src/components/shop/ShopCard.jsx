import React, { useState } from 'react';
import { AiFillHeart, AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';

export const ShopCard = ({ shopItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  const handleAddToCart = (shopItems) => {
    addToCart(shopItems);
    toast.success('Added to cart', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <>
      {shopItems.map((shopItems, index) => (
        <div className="box" key={index}>
          <div className="product mtop">
            <div className="img">
              <span className="discount">{shopItems.discount}% Off</span>
              <img src={shopItems.cover} alt={shopItems.name} />
              <div className="product-like">
                <label>{count}</label> <br />
                <AiFillHeart onClick={increment} />
              </div>
            </div>
            <div className="product-details">
              <h3>{shopItems.name}</h3>
              <div className="rate">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <div className="price">
                <h4>${shopItems.price}.00 </h4>

                <button onClick={() => handleAddToCart(shopItems)}>
                  <AiOutlinePlus />
                  <ToastContainer />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
