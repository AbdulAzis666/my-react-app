import React from 'react';
import './Footer.css'; // Pastikan Anda mengimpor file CSS yang sesuai

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Pondok Mie Ayam Bakso Solo. Hak cipta dilindungi.</p>
        <p>Ikuti kami di sosial media: <a href="https://www.instagram.com/pondokmieayambaksosolo">Instagram</a> | <a href="https://www.facebook.com/pondokmieayambaksosolo">Facebook</a></p>
      </div>
    </footer>
  );
};

export default Footer;

