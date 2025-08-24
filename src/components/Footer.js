import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHeart } from 'react-icons/fa'
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        {/* Grille principale responsive */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 sm:mb-12'>
          
          {/* Logo et description */}
          <div className='space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1'>
            <div className='flex items-center space-x-3'>
              <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-900 to-slate-900 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg sm:text-xl'>E</span>
              </div>
              <h3 className='text-xl sm:text-2xl font-bold text-white'>TopShop</h3>
            </div>
            <p className='text-gray-300 leading-relaxed text-sm sm:text-base max-w-xs sm:max-w-none'>
              Découvrez une expérience shopping unique avec nos produits de qualité et notre service client exceptionnel.
            </p>
            
            {/* Réseaux sociaux */}
            <div className='flex space-x-3 sm:space-x-4'>
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div key={index} className='w-8 h-8 sm:w-10 sm:h-10 bg-black/40 rounded-full flex items-center justify-center hover:bg-purple-900 hover:scale-110 transition-all duration-300 cursor-pointer group'>
                  <Icon className='text-white group-hover:text-white text-sm sm:text-base' />
                </div>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div className='space-y-4 sm:space-y-6'>
            <h4 className='text-lg sm:text-xl font-semibold text-white border-b border-purple-900 pb-2 inline-block'>
              Liens Rapides
            </h4>
            <ul className='space-y-2 sm:space-y-3'>
              {['Accueil', 'Produits', 'À propos', 'Contact'].map((link, index) => (
                <li key={index}>
                  <a href="#" className='text-gray-300 hover:text-purple-400 hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300 inline-block text-sm sm:text-base'>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Catégories */}
          <div className='space-y-4 sm:space-y-6'>
            <h4 className='text-lg sm:text-xl font-semibold text-white border-b border-purple-900 pb-2 inline-block'>
              Catégories
            </h4>
            <ul className='space-y-2 sm:space-y-3'>
              {['Mode Femme', 'Mode Homme', 'Électronique', 'Accessoires'].map((category, index) => (
                <li key={index}>
                  <a href="#" className='text-gray-300 hover:text-purple-400 hover:translate-x-1 sm:hover:translate-x-2 transition-all duration-300 inline-block text-sm sm:text-base'>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et Newsletter */}
          <div className='space-y-4 sm:space-y-6 sm:col-span-2 lg:col-span-1'>
            <h4 className='text-lg sm:text-xl font-semibold text-white border-b border-purple-900 pb-2 inline-block'>
              Contactez-nous
            </h4>
            
            {/* Informations de contact */}
            <div className='space-y-3 sm:space-y-4'>
              <div className='flex items-start space-x-3'>
                <IoLocationOutline className='text-purple-400 text-lg sm:text-xl mt-0.5 flex-shrink-0' />
                <span className='text-gray-300 text-sm sm:text-base leading-relaxed'>123 Rue Commerce, Yaoundé</span>
              </div>
              <div className='flex items-center space-x-3'>
                <IoCallOutline className='text-purple-400 text-lg sm:text-xl flex-shrink-0' />
                <a href="tel:+237691690285" className='text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors'>
                  +237 691 690 285
                </a>
              </div>
              <div className='flex items-start space-x-3'>
                <IoMailOutline className='text-purple-400 text-lg sm:text-xl mt-0.5 flex-shrink-0' />
                <a href="mailto:info@TopShop.com" className='text-gray-300 hover:text-purple-400 text-sm sm:text-base transition-colors break-all'>
                  info@TopShop.com
                </a>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className='mt-4 sm:mt-6'>
              <h5 className='text-white font-medium mb-3 text-sm sm:text-base'>Newsletter</h5>
              <div className='flex flex-col sm:flex-row gap-2'>
                <input 
                  type="email" 
                  placeholder="Votre email"
                  className='flex-1 px-3 sm:px-4 py-2 bg-black/50 border border-purple-900/50 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/70 transition-all duration-300 text-sm sm:text-base'
                />
                <button className='px-4 sm:px-6 py-2 bg-gradient-to-r from-purple-900 to-slate-900 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:from-purple-800 hover:to-slate-800 transition-all duration-300 font-medium text-sm sm:text-base whitespace-nowrap'>
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className='relative my-8'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-purple-900/50'></div>
          </div>
          <div className='relative flex justify-center'>
            <div className='bg-gradient-to-r from-purple-900 to-slate-900 w-16 sm:w-20 h-0.5'></div>
          </div>
        </div>

        {/* Copyright et liens légaux */}
        <div className='pt-4 sm:pt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row items-center justify-between'>
          <p className='text-gray-300 text-xs sm:text-sm flex flex-wrap items-center justify-center sm:justify-start text-center sm:text-left'>
            <span>Copyright © 2024 TopShop. Fait avec</span>
            <FaHeart className='text-purple-400 mx-1 sm:mx-2 animate-pulse text-xs sm:text-sm' />
            <span>Tous droits réservés.</span>
          </p>
          
          <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center'>
            <a href="#" className='text-gray-300 hover:text-purple-400 text-xs sm:text-sm transition-colors whitespace-nowrap'>
              Politique de confidentialité
            </a>
            <a href="#" className='text-gray-300 hover:text-purple-400 text-xs sm:text-sm transition-colors whitespace-nowrap'>
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer