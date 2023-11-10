import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';

export const Whatsapp = () => {
  return (
    <>
      <a href="/" target="_blank" rel="noreferrer" className="whatsappWrapper">
        <div className="wrapperDetails">
          <h3>Chat with us</h3>
        </div>
        <div className="icon">
          <RiWhatsappFill />
        </div>
      </a>
    </>
  );
};
