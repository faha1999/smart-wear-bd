import React from 'react';
import { TopBar } from './TopBar';
import { Navbar } from './Navbar';
import { Search } from './Search';

export const Header = ({ CartItem }) => {
  return (
    <>
      <TopBar />
      <Search CartItem={CartItem} />
      <Navbar CartItem={CartItem} />
    </>
  );
};
