import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Shop from './pages/Shop';

import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className='overflow-hidden'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;