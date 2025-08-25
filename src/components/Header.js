// Header.js
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowForward, IoMdTrash, IoMdClose, IoMdMenu } from 'react-icons/io';
import { BsWhatsapp, BsShieldCheck, BsTruck } from 'react-icons/bs';
import { HiOutlineShoppingBag, HiOutlineGift } from 'react-icons/hi';
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';

const Header = () => {
  const { isOpen, handleClose, handleOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleWhatsAppClick = async () => {
    setIsCheckingOut(true);
    
    try {
      const orderData = {
        items: cart.map((item) => ({
          title: item.title,
          price: item.price,
          quantity: item.amount,
        })),
        total: total,
      };

      // Créer le message WhatsApp
      const message = `🛍️ *Nouvelle Commande TopShop*\n\n` +
        `📋 *Détails de la commande:*\n` +
        `${orderData.items.map(item => 
          `• ${item.title}\n  Quantité: ${item.quantity}\n  Prix: $${item.price}\n`
        ).join('\n')}` +
        `\n💰 *Total: $${orderData.total.toFixed(2)}*\n\n` +
        `Merci pour votre commande! 🙏`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=237691690285&text=${encodeURIComponent(message)}`;
      
      // Ouvrir WhatsApp
      window.open(whatsappUrl, '_blank');
      
    } catch (error) {
      console.error('Erreur lors de l\'ouverture de WhatsApp:', error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  const handleClearCart = () => {
    if (window.confirm('Êtes-vous sûr de vouloir vider le panier ?')) {
      clearCart();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const NavLink = ({ to, children, mobile = false }) => {
    const active = isActive(to);
    const baseClasses = mobile 
      ? "text-xl font-medium transition-all duration-300 transform hover:scale-105 relative"
      : "text-sm font-medium transition-all duration-300 hover:scale-105 relative";
    
    const activeClasses = active 
      ? "text-purple-300 font-semibold" 
      : "text-white hover:text-purple-300";

    return (
      <Link 
        to={to} 
        className={`${baseClasses} ${activeClasses} group`}
        onClick={mobile ? closeMobileMenu : undefined}
      >
        {children}
        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full ${active ? 'w-full' : ''}`}></span>
      </Link>
    );
  };

  return (
    <>
      <header className="w-full bg-slate-900 shadow-sm py-3 px-4 sm:px-6 flex items-center justify-between fixed top-0 left-0 z-50">
        {/* Logo avec animation */}
        <Link to="/" className="flex items-center transition-all duration-300 hover:scale-105">
          <img
            src={require('../img/logo.png')}
            alt="TopShop Logo"
            className="h-12 w-auto drop-shadow-lg"
            style={{ maxHeight: 48 }}
          />
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 items-center">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/shop">Boutique</NavLink>
          <NavLink to="/about">À propos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* Icône panier Desktop avec animation */}
          <button
            onClick={() => navigate('/cart')}
            className="relative cursor-pointer ml-2 p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 group"
            title="Voir le panier"
          >
            <HiOutlineShoppingBag className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300" />
            <div className="bg-purple-600 absolute -top-1 -right-1 text-xs w-5 h-5 flex justify-center items-center text-white rounded-full font-semibold animate-pulse">
              {itemAmount}
            </div>
          </button>
        </nav>

        {/* Navigation Mobile */}
        <div className="md:hidden flex items-center space-x-3">
          {/* Icône panier Mobile avec animation */}
          <button
            onClick={() => navigate('/cart')}
            className="relative cursor-pointer p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 group"
            title="Voir le panier"
          >
            <HiOutlineShoppingBag className="text-xl text-white group-hover:text-purple-300 transition-colors duration-300" />
            <div className="bg-purple-600 absolute -top-1 -right-1 text-xs w-5 h-5 flex justify-center items-center text-white rounded-full font-semibold animate-pulse">
              {itemAmount}
            </div>
          </button>
          
          {/* Menu hamburger avec animation */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 group"
          >
            <div className="relative w-5 h-5">
              <span className={`absolute block h-0.5 w-5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'translate-y-0'}`}></span>
              <span className={`absolute block h-0.5 w-5 bg-white transform transition-all duration-300 translate-y-2 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute block h-0.5 w-5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-y-2' : 'translate-y-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Menu mobile overlay avec animations */}
        <div className={`md:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <IoMdClose className="text-2xl text-white" />
          </button>
          <nav className="flex flex-col space-y-8 items-center">
            <div className={`transform transition-all duration-700 delay-100 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <NavLink to="/" mobile>Accueil</NavLink>
            </div>
            <div className={`transform transition-all duration-700 delay-200 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <NavLink to="/shop" mobile>Boutique</NavLink>
            </div>
            <div className={`transform transition-all duration-700 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <NavLink to="/about" mobile>À propos</NavLink>
            </div>
            <div className={`transform transition-all duration-700 delay-400 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <NavLink to="/contact" mobile>Contact</NavLink>
            </div>
          </nav>
        </div>
      </header>

      {/* Panier latéral avec animations */}
      <div
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } w-full sm:w-[90vw] md:w-[80vw] lg:w-[60vw] xl:w-[45vw] 2xl:max-w-[40vw] bg-black fixed top-0 h-full shadow-xl transition-all duration-500 ease-in-out z-50 px-3 sm:px-4 lg:px-6 flex flex-col transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header du sidebar */}
        <div className="flex items-center justify-between py-4 sm:py-5 border-b border-purple-900">
          <div className="uppercase text-xs sm:text-sm font-semibold flex items-center gap-2 text-white">
            <HiOutlineShoppingBag className="text-base sm:text-lg text-white" />
            <span>Panier ({itemAmount})</span>
          </div>
          <button
            onClick={handleClose}
            className="cursor-pointer w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center hover:bg-purple-900 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
          >
            <IoMdClose className="text-lg sm:text-xl text-white" />
          </button>
        </div>

        {/* Contenu du panier avec animation */}
        <div className="flex-1 overflow-y-auto py-3 sm:py-4 space-y-2 sm:space-y-3">
          {cart.length === 0 ? (
            <div className={`flex flex-col items-center justify-center h-full text-center px-4 transform transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="animate-bounce">
                <HiOutlineShoppingBag className="text-3xl sm:text-4xl text-white mb-3" />
              </div>
              <p className="text-white mb-2 text-sm sm:text-base">Votre panier est vide</p>
              <p className="text-white text-xs sm:text-sm opacity-75">Ajoutez des produits pour commencer vos achats</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div 
                key={item.id} 
                className={`transform transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CartItem item={item} />
              </div>
            ))
          )}
        </div>

        {/* Footer du sidebar avec animations */}
        {cart.length > 0 && (
          <div className={`flex flex-col gap-y-3 py-3 sm:py-4 border-t border-purple-900 bg-black mt-auto transform transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Services */}
            <div className="flex items-center justify-between text-xs text-white mb-2">
              <div className="flex items-center gap-1">
                <BsShieldCheck className="text-white text-xs" />
                <span className="text-xs">Sécurisé</span>
              </div>
              <div className="flex items-center gap-1">
                <BsTruck className="text-white text-xs" />
                <span className="text-xs">Livraison</span>
              </div>
              <div className="flex items-center gap-1">
                <HiOutlineGift className="text-white text-xs" />
                <span className="text-xs">Garantie</span>
              </div>
            </div>

            {/* Total et actions */}
            <div className="flex w-full justify-between items-center mb-3">
              <div className="font-semibold text-white text-sm sm:text-base">
                <span className="mr-2">Total:</span> ${parseFloat(total).toFixed(2)}
              </div>
              <button
                onClick={handleClearCart}
                className="cursor-pointer p-2 bg-purple-900 text-white w-8 h-8 sm:w-10 sm:h-10 flex justify-center items-center text-base hover:bg-red-600 transition-all duration-300 rounded-full hover:scale-110 hover:rotate-12"
                title="Vider le panier"
              >
                <IoMdTrash className="text-sm sm:text-base" />
              </button>
            </div>

            {/* Boutons d'action avec animations */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
              <Link
                to="/checkout"
                className="bg-white flex-1 p-3 justify-center items-center text-black font-medium flex gap-2 hover:bg-purple-100 transition-all duration-300 rounded-lg text-xs sm:text-sm order-2 sm:order-1 transform hover:scale-105 hover:shadow-lg"
                onClick={handleClose}
              >
                <span>Voir le panier</span>
                <IoMdArrowForward className="text-sm sm:text-base transform transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              
              <button
                onClick={handleWhatsAppClick}
                disabled={isCheckingOut}
                className="bg-purple-900 flex-1 p-3 justify-center items-center text-white font-medium flex gap-2 hover:bg-purple-700 transition-all duration-300 rounded-lg text-xs sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2 transform hover:scale-105 hover:shadow-lg group"
              >
                {isCheckingOut ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Envoi...</span>
                  </div>
                ) : (
                  <>
                    <BsWhatsapp className="text-sm sm:text-base animate-pulse" />
                    <span>WhatsApp</span>
                  </>
                )}
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-white text-center mt-2 opacity-75 px-2">
              Cliquez sur WhatsApp pour finaliser votre commande
            </p>
          </div>
        )}
      </div>

      {/* Overlay pour fermer le panier avec animation */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-40 ${isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'}`}
        onClick={handleClose}
      />
    </>
  );
};

export default Header;