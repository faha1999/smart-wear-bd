import React from 'react';
import { Announcement } from '../components/Announcement/Announcement';
import { Discount } from '../components/Discount/Discount';
import { FlashDeals } from '../components/FlashDeals/FlashDeals';
import { Home } from '../components/home/Home';
import { NewArrivals } from '../components/newArrivals/NewArrivals';
import { Shop } from '../components/shop/Shop';
import { TopCategories } from '../components/topCategories/TopCategories';
import { Wrapper } from '../components/wrapper/Wrapper';

export const MainPage = ({ flashData, addToCart, CartItem, shopItems }) => {
  return (
    <>
      <Home CartItem={CartItem} />
      <FlashDeals flashData={flashData} addToCart={addToCart} />
      <TopCategories />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announcement />
      <Wrapper />
    </>
  );
};
