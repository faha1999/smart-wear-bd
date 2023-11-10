import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PageTitle } from '../../Common/pageTitle/PageTitle';
import { ToastContainer, toast } from 'react-toastify';

export const Watch = ({ watchImg, watchDetails, addToCart }) => {
  const [currentProductImage, setCurrentProductImage] = useState(0);
  const { pathname } = useLocation();

  const handleAddToCart = (shopItems) => {
    addToCart(shopItems);
    toast.success('Added to cart', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  return (
    <>
      <section className="productDetails">
        <PageTitle title="Watch" />

        <div className="product-container">
          <div className="product-image">
            <img
              src={watchImg[currentProductImage].png}
              alt="products img"
              className="mainImg"
            />
            <div className="thumbnail-wrapper">
              <div className="thumbnail">
                <img
                  onClick={() => setCurrentProductImage(0)}
                  className={currentProductImage === 0 ? 'active' : ''}
                  src={watchImg[0].thumbnail}
                  alt="thumbnail"
                />
              </div>

              <div className="thumbnail">
                <img
                  onClick={() => setCurrentProductImage(1)}
                  className={currentProductImage === 1 ? 'active' : ''}
                  src={watchImg[1].thumbnail}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>

          <div className="product-description">
            <span className="pathName">
              <a href="/">Home</a> {pathname}
            </span>

            {watchDetails.map((watchDetails) => (
              <div key={watchDetails.name}>
                <h1 className="">{watchDetails.name}</h1>
                <p className="description">{watchDetails.description}</p>
                <div className="product-price">
                  <div className="original-price">
                    <span className="">${watchDetails.price}</span>
                  </div>
                </div>
                <div className="action-wrapper">
                  <button
                    onClick={() => handleAddToCart(watchDetails)}
                    className="btn-primary"
                  >
                    Add to cart <ToastContainer />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
