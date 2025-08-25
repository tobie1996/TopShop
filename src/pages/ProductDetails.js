import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { BsWhatsapp } from 'react-icons/bs';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // pour scroller jusqu'à l'entête
  useEffect(() => {
    if (id) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id]);

  // récupérer l'id de détails pour afficher le produit
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // filtrer les produits de la même catégorie
  const filteredProducts = products.filter((item) => item.category === product?.category);

  if(!product){
    return <section className='min-h-screen flex justify-center items-center px-4'>
      <div className='text-lg'>Loading...</div>
    </section>
  }

  // destructuration product - adapter selon votre structure JSON
  const {title, price, category, description} = product;
  
  // Gérer les images (soit "image" soit "images")
  const productImages = product.images || [product.image];
  const currentImage = productImages[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
  <div className="min-h-screen">
      {/* Section principale du produit */}
      <section className='pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12'>
            
            {/* Section Images du produit */}
            <div className='flex-1 w-full'>
              <div className='space-y-4'>
                {/* Image principale */}
                <div className='relative flex justify-center items-center'>
                  <div className='w-full max-w-[400px] sm:max-w-[500px] aspect-square bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center overflow-hidden relative'>
                    <img 
                      className='w-full h-full object-contain transition-transform duration-300 hover:scale-105 drop-shadow-lg'
                      src={currentImage} 
                      alt={title}
                      style={{maxWidth: '100%', maxHeight: '100%'}}
                    />
                    {/* Navigation boutons */}
                    {productImages.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className='absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200 z-10'
                        >
                          <HiChevronLeft className='w-5 h-5 text-gray-700' />
                        </button>
                        <button
                          onClick={nextImage}
                          className='absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border border-gray-200 rounded-full p-2 shadow-md transition-all duration-200 z-10'
                        >
                          <HiChevronRight className='w-5 h-5 text-gray-700' />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Miniatures */}
                {productImages.length > 1 && (
                  <div className='flex justify-center gap-2 mt-2'>
                    {productImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-14 h-14 rounded-lg overflow-hidden border-2 shadow-sm transition-all duration-200 flex items-center justify-center bg-white ${
                          index === currentImageIndex 
                            ? 'border-red-400 ring-2 ring-red-200 scale-105' 
                            : 'border-gray-200 hover:border-gray-400 opacity-80 hover:opacity-100'
                        }`}
                        style={{outline: 'none'}}
                      >
                        <img 
                          src={img} 
                          alt={`${title} ${index + 1}`}
                          className='w-full h-full object-contain'
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Détails du produit */}
            <div className='flex-1 w-full flex flex-col h-full text-center lg:text-left space-y-4 lg:space-y-6'>
              <div>
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight max-w-full lg:max-w-[500px] mx-auto lg:mx-0'>
                  {title}
                </h1>
                <div className='text-2xl sm:text-3xl text-red-500 font-semibold'>
                  {price}€
                </div>
                {/* Description du produit */}
                {description && (
                  <div className='text-base sm:text-lg text-gray-700 leading-relaxed max-w-full lg:max-w-[500px] mx-auto lg:mx-0'>
                    {description}
                  </div>
                )}
              </div>
              {/* Boutons d'action */}
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 sm:pt-72  mt-auto'>
                <button 
                  onClick={() => addToCart(product, product.id)}
                  className='w-full sm:w-auto bg-black hover:bg-gray-800 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md font-medium transition-colors duration-200 text-sm sm:text-base'
                >
                  Ajouter au panier
                </button>
                <a
                  href={`https://wa.me/237696926972?text=Bonjour,%20je%20souhaite%20commander%20le%20produit%20:%20${encodeURIComponent(title)}%20au%20prix%20de%20${price}€`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md font-medium transition-colors duration-200 text-sm sm:text-base"
                >
                  <BsWhatsapp className='w-4 h-4 mr-2' />
                  Commander sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des produits similaires */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center mb-6 sm:mb-8 lg:mb-12">
            Produits similaires
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((item) => (
              <div key={item.id} className="w-full">
                <Product product={{ ...item, image: item.images && item.images[0] }} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails