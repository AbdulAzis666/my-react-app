import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import './Locations.css'; // Mengimpor CSS untuk halaman Locations

function Locations() {
  return (
    <div>
    <Navbar />
    <div className="locations"><h1>Lokasi Kami</h1>
        <p>Temukan kami di lokasi berikut:</p>
        <ul>
        <li>
          <a href="https://maps.app.goo.gl/ism8UEwRm3rqw3qw8" target="_blank">
            Jl. Sultan Ageng Tirtayasa, Kedungjaya, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat
          </a>
        </li>
        </ul>
    </div>
    <Footer />
    </div>
  );
}

export default Locations;

