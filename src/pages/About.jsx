import React from 'react';
import Navbar from '../components/Navbar';
import menu1 from '../assets/menu1.jpg';
import menu2 from '../assets/menu2.jpeg';
import menu4 from '../assets/menu4.jpg';
import Footer from '../components/Footer';
import './About.css'; // Import file CSS untuk styling

const About = () => {
  return (
    <div>
        <div><Navbar /></div>
        <div className="about-container">
          <h1 className="about-heading">About Pondok Mie Ayam Bakso Solo</h1>
          <p className="about-paragraph">
          Pondok Mie Ayam Bakso Solo didirikan pada tanggal 3 Desember 2023, berlokasi di Jl. Sultan Ageng Tirtayasa, Kedungjaya, Kec. Kedawung, Kabupaten Cirebon, Jawa Barat. Dengan tim yang terdiri dari 2 orang yaitu pemilik usaha yaitu mas Min dan 1 temannya, kami berkomitmen untuk menyajikan mie ayam bakso yang enak dan murah kepada pelanggan kami.
          </p>
          <h2>Layanan Kami</h2>
          <ul className="services-list">
            <li>Ambil di Tempat - Pelanggan dapat datang langsung ke Pondok Mie Ayam Bakso Solo untuk mengambil pesanan mereka.</li>
            <li>Pesanan - Pelanggan dapat melakukan pemesanan terlebih dahulu melalui telepon atau aplikasi online kami.</li>
            <li>Makan di Tempat - Nikmati mie ayam bakso kami yang lezat langsung di tempat kami yang nyaman.</li>
            <li>Bawa Pulang - Kami menyediakan layanan bawa pulang untuk pelanggan yang ingin menikmati makanan di rumah atau di tempat lain.</li>
          </ul>
          <h2>Visi dan Misi</h2>
          <p>Visi kami adalah menjadi tempat makan mie ayam bakso terfavorit di Indonesia. Misi kami adalah menyajikan mie ayam bakso yang lezat dan berkualitas dengan harga yang bersahabat.</p>
          <h2>Testimoni Pelanggan</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"Pondok Mie Ayam Bakso Solo menyajikan mie ayam bakso yang sangat lezat dan harga yang terjangkau. Saya sangat puas dengan pelayanan mereka."</p>
              <h4>Arya</h4>
            </div>
            <div className="testimonial">
              <p>"Saya sangat senang dengan variasi menu yang ditawarkan oleh Pondok Mie Ayam Bakso Solo. Mereka selalu menyajikan makanan yang segar dan pelayanan yang cepat."</p>
              <h4>Dimas</h4>
            </div>
          </div>
          <h2>Galeri</h2>
          <div className="gallery">
            <img src={menu1} alt="Menu 1" />
            <img src={menu2} alt="Menu 2" />
            <img src={menu4} alt="Menu 4" />
          </div>
        </div>
        <div><Footer /></div>
    </div>
  );
};

export default About;
