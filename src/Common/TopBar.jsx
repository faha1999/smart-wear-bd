import React from 'react';
import { BsEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const TopBar = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <BsFillTelephoneFill />
            <a href="tel:+100120000000">+10012 0000 0000</a>
            <BsEnvelopeFill />
            <a href="mailto:hello@sijonal.com">hello@sijonal.com</a>
          </div>

          <div className="right row RText">
            <Link>FAQ"s</Link>
            <Link>Need Help?</Link>
            <span>🇺🇸</span>
            <Link>EN</Link>
            <span>🇺🇸</span>
            <Link>USD</Link>
          </div>
        </div>
      </section>
    </>
  );
};
