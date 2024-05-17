import React from 'react';
import './Products.css';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import menu1 from '../assets/menu1.jpg';
import menu2 from '../assets/menu2.jpeg';
import menu3 from '../assets/menu3.png';
import menu4 from '../assets/menu4.jpg';
import menu5 from '../assets/menu5.jpg';

const products = [
  { id: 1, name: 'Menu 1', description: 'Bakso Biasa.', imageUrl: menu1 },
  { id: 2, name: 'Menu 2', description: 'Bakso Jumbo.', imageUrl: menu2 },
  { id: 3, name: 'Menu 3', description: 'Mie Ayam Biasa.', imageUrl: menu3 },
  { id: 4, name: 'Menu 4', description: 'Mie Ayam Bakso.', imageUrl: menu4 },
  { id: 5, name: 'Menu 5', description: 'Mie Ayam Bakso Jumbo.', imageUrl: menu5 }
];

function ProductsPage() {
  return (
    <div>
        <Navbar />
    <div className="products-container">
        {products.map(product => (
        <ProductCard key={product.id} product={product} />
    ))}
    </div>
        <Footer />
    </div>
  );
}

export default ProductsPage;

