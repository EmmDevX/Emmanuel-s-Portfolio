import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <p className="copyright">
        © {currentYear} Emmanuel Taiwo. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;