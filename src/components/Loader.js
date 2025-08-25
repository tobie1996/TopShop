// Loader.js
import React from 'react';
import loaderImg from '../img/logo.png';

const Loader = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'rgba(255,255,255,0.9)',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 9999
  }}>
    <img src={loaderImg} alt="Loading..." style={{ width: 180, height: 'auto', marginBottom: 20 }} />
    <span style={{ fontSize: 24, color: '#333', fontWeight: 'bold' }}>Chargement...</span>
  </div>
);

export default Loader;
