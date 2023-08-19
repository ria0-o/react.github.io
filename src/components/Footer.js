import React from 'react';

const Footer = () => {
  return (
    <div className='w-100 py-4 bg-white text-black text-center'>
      <img src='/logo.png' alt='upang' width={60} />

      <h2 className='fw-bold' style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
        PHINMA University of Pangasinan
      </h2>
      <p className='mb-0' style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>
        College of Information and Technology
      </p>
    </div>
  );
};

export default Footer;

