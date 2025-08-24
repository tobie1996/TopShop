import React from 'react'
import { HiSparkles, HiHeart, HiShieldCheck } from 'react-icons/hi'
import { BsTruck, BsAward, BsHeadset } from 'react-icons/bs'

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-black rounded-full mb-6 sm:mb-8 animate-pulse">
            <HiSparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            À propos de <span className="text-black animate-pulse">TopShop</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Votre destination privilégiée pour une expérience d'achat exceptionnelle, des produits de qualité premium et un service client incomparable.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden mb-12 sm:mb-16 transform hover:scale-105 transition-all duration-300 hover:border-black">
          <div className="bg-gradient-to-r from-black to-gray-800 p-1">
            <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
              <div className="text-center mb-8 sm:mb-10">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                  Notre Mission
                </h2>
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                  TopShop est né d'une vision simple : révolutionner votre façon de faire du shopping en ligne. 
                  Nous nous engageons à vous offrir une sélection curatée des meilleurs produits, 
                  une expérience utilisateur fluide et un service client qui dépasse vos attentes.
                </p>
              </div>

              <div className="border-t border-gray-500 my-6 sm:my-8"></div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
                {/* Qualité */}
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <BsAward className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Qualité Premium</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Sélection rigoureuse des meilleurs produits</p>
                </div>

                {/* Livraison */}
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300">
                  <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <BsTruck className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Livraison Rapide</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Expédition sous 24-48h partout</p>
                </div>

                {/* Support */}
                <div className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-gray-100 transition-colors duration-300">
                    <BsHeadset className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                  </div>
                  <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Support 24/7</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Assistance client dédiée et réactive</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Rejoignez des milliers de clients satisfaits qui font confiance à TopShop 
                  pour leurs achats quotidiens. Votre satisfaction est notre priorité absolue.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl hover:border-black transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">1000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Produits</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl hover:border-black transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">5000+</div>
            <div className="text-xs sm:text-sm text-gray-600">Clients</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl hover:border-black transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">99%</div>
            <div className="text-xs sm:text-sm text-gray-600">Satisfaction</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg border-2 border-gray-200 hover:shadow-xl hover:border-black transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-2">24h</div>
            <div className="text-xs sm:text-sm text-gray-600">Livraison</div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center border-2 border-gray-300">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="group">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white hover:bg-opacity-30 transition-all duration-300 border border-gray-400">
                <HiHeart className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Passion</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Nous aimons ce que nous faisons</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white hover:bg-opacity-30 transition-all duration-300 border border-gray-400">
                <HiShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Confiance</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Votre sécurité avant tout</p>
              </div>
            </div>
            <div className="group sm:col-span-1">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:bg-white hover:bg-opacity-30 transition-all duration-300 border border-gray-400">
                <HiSparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-white font-semibold text-sm sm:text-base mb-2">Innovation</h3>
                <p className="text-gray-300 text-xs sm:text-sm">Toujours à la pointe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border-2 border-gray-200 hover:border-black transition-all duration-300">
            <HiHeart className="w-8 h-8 sm:w-12 sm:h-12 text-black mx-auto mb-4 sm:mb-6 animate-pulse" />
            <p className="text-gray-900 text-base sm:text-lg lg:text-xl font-medium mb-4 sm:mb-6">
              Merci de faire confiance à TopShop pour vos besoins quotidiens.
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Nous sommes là pour vous servir et rendre votre expérience d'achat inoubliable !
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About