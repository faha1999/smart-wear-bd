import React from 'react';
import Announcement1 from '../../assets/Announcement/banner-1.png';
import Announcement2 from '../../assets/Announcement/banner-2.png';

export const Announcement = () => {
  return (
    <>
      <section className="announcement background">
        <div className="container d_flex">
          <div className="img" style={{ width: '30%', height: '21.25rem' }}>
            <img
              src={Announcement1}
              width="100%"
              height="100%"
              alt="Announcement1"
            />
          </div>
          <div className="img" style={{ width: '68%', height: '21.25rem' }}>
            <img
              src={Announcement2}
              width="100%"
              height="100%"
              alt="Announcement2"
            />
          </div>
        </div>
      </section>
    </>
  );
};
