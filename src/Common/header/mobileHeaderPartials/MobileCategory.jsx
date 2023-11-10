import React, { useState } from 'react';
import { FaBorderAll } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { categoriesData } from '../../../data/categoriesData';

export const MobileCategory = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="MobileCategorys">
        <div className={MobileMenu ? 'MobileCategory' : 'link'}>
          <button
            className="toggle"
            style={{
              float: 'right',
              background: 'transparent',
            }}
            onClick={() => setMobileMenu(!MobileMenu)}
          >
            <GrClose className="mobileClose home-btn" />
          </button>

          {categoriesData.map((data, index) => (
            <div
              className="box f_flex"
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <img src={data.cateImg} alt="{data.cateName}" />
              <span>{data.cateName}</span>
            </div>
          ))}
        </div>

        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
          {MobileMenu ? (
            <FaBorderAll className="mobileOpen" />
          ) : (
            <FaBorderAll className="mobileOpen" />
          )}
        </button>
      </div>
    </>
  );
};
