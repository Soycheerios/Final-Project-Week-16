import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3">
        © {new Date().getFullYear()} Restaurant Review App | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

