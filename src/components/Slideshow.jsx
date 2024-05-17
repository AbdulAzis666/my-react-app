import React, { useState } from 'react';
import './Slideshow.css';
import Image1 from '../assets/foto1.jpg';
import Image2 from '../assets/foto2.jpg';
import Image3 from '../assets/foto3.jpg';
import Image4 from '../assets/foto4.jpg';
import Image5 from '../assets/foto5.jpg';
import Image6 from '../assets/foto6.jpg';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: Image1,
      caption: 'Tempat Kami',
    },
    {
      id: 2,
      image: Image2,
      caption: 'Meja Makan',
    },
    {
      id: 3,
      image: Image3,
      caption: 'Gerobak Bakso',
    },
    {
      id: 4,
      image: Image4,
      caption: 'Daftar Menu',
    },
    {
      id: 5,
      image: Image5,
      caption: 'Tempat Kami',
    },
    {
      id: 6,
      image: Image6,
      caption: 'Daftar Menu',
    }
  ];

  const changeSlide = (direction) => {
    setCurrentSlide(prevSlide => {
      const increment = direction === 'next' ? 1 : -1;
      const nextSlide = (prevSlide + increment + slides.length) % slides.length;
      return nextSlide;
    });
  };

  return (
    <div className="slideshow">
      <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
      <div className="caption">{slides[currentSlide].caption}</div>
      <div className="controls">
        <button onClick={() => changeSlide('prev')}>Previous</button>
        <button onClick={() => changeSlide('next')}>Next</button>
      </div>
    </div>
  );
};

export default Slideshow;
