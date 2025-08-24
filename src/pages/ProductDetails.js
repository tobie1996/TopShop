import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../components/Product';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  const {id} = useParams();
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // pour scroller jusqu'a l'ente
  useEffect(() => {
    if (id) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    }
  }, [id]);

  // recuperer l'id de details pour afficher le produit
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // filtrer les produits de la meme categorie
  const filteredProducts = products.filter((item) => item.category === product.category);

  if(!product){
    return <section className='min-h-screen flex justify-center items-center px-4'>
      <div className='text-lg'>Loading...</div>
    </section>
  }

  // destructuration product
  const {title, price, description, image} = product;

  return (
    <div className="min-h-screen">
      {/* Section principale du produit */}
      <section className='pt-20 pb-8 sm:pt-24 sm:pb-12 lg:pt-32 lg:pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='container mx-auto max-w-6xl'>
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12'>
            
            {/* Image du produit */}
            <div className='flex-1 w-full flex justify-center items-center'>
              <div className='w-full max-w-[280px] sm:max-w-[320px] lg:max-w-md'>
                <img 
                  className='w-full h-auto object-contain rounded-lg shadow-sm'
                  src={image} 
                  alt={title}
                />
              </div>
            </div>
            
            {/* Détails du produit */}
            <div className='flex-1 w-full text-center lg:text-left space-y-4 lg:space-y-6'>
              <h1 className='text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight max-w-full lg:max-w-[500px] mx-auto lg:mx-0'>
                {title}
              </h1>
              
              <div className='text-2xl sm:text-3xl text-red-500 font-semibold'>
                ${price}
              </div>
              
              <p className='text-sm sm:text-base text-gray-600 leading-relaxed max-w-full lg:max-w-[500px] mx-auto lg:mx-0'>
                {description}
              </p>
              
              {/* Boutons d'action */}
              <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4'>
                <button 
                  onClick={() => addToCart(product, product.id)}
                  className='w-full sm:w-auto bg-black hover:bg-gray-800 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md font-medium transition-colors duration-200 text-sm sm:text-base'
                >
                  Ajouter au panier
                </button>
                
                <a
                  href={`https://wa.me/237696926972?text=Bonjour,%20je%20souhaite%20commander%20le%20produit%20:%20${encodeURIComponent(title)}%20au%20prix%20de%20${price}$`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-block text-center bg-green-500 hover:bg-green-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-md font-medium transition-colors duration-200 text-sm sm:text-base"
                >
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
                <Product product={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetails