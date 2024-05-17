import React from 'react';
import Slideshow from '../components/Slideshow';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div><Navbar /></div>
      <Slideshow />
      <div className="container" style={{ textAlign: 'center', marginTop: '40px', marginBottom: '40px' }}>
        <h1>Pondok Mie Ayam Bakso Solo</h1>
        <p style={{marginRight: '40px', marginLeft: '40px'}}>
        Pondok Mie Ayam Bakso Solo didirikan pada tanggal 3 Desember 2023, berlokasi di Jl. Sultan Ageng Tirtayasa, Kedungjaya, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat. Dengan tim yang terdiri dari 2 orang yaitu pemilik usaha yaitu mas Min dan 1 temannya, kami berkomitmen untuk menyajikan mie ayam bakso yang enak dan murah kepada pelanggan kami.
        </p>
      </div>
      <ul>
          <li>Ambil di Tempat - Pelanggan dapat datang langsung ke Pondok Mie Ayam Bakso Solo untuk mengambil pesanan mereka.</li>
          <li>Pesanan - Pelanggan dapat melakukan pemesanan terlebih dahulu melalui telepon atau aplikasi online kami.</li>
          <li>Makan di Tempat - Nikmati mie ayam bakso kami yang lezat langsung di tempat kami yang nyaman.</li>
          <li>Bawa Pulang - Kami menyediakan layanan bawa pulang untuk pelanggan yang ingin menikmati makanan di rumah atau di tempat lain.</li>
        </ul>
      <Footer />
    </div>
  );
};

export default Home;
