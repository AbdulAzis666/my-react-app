import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css'; // Import file CSS untuk styling
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div>
      <div><Navbar /></div>
      <div className="contact-container">
        <h1>Hubungi Kami</h1>
        <p>Ikuti kami di sosial media: <a href="https://www.instagram.com/pondokmieayambaksosolo">Instagram</a> | <a href="https://www.facebook.com/pondokmieayambaksosolo">Facebook</a></p>
        <p>Telepon: 082312628691</p>
        <p>Email: pondokmieayambaksosolo@gmail.com</p>
        <form className="contact-form">
          <label>Nama</label>
          <input type="text" placeholder="Masukkan nama Anda" />
          <label>Email</label>
          <input type="email" placeholder="Masukkan email Anda" />
          <label>Pesan</label>
          <textarea placeholder="Tulis pesan Anda"></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default Contact;