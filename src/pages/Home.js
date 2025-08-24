import { useContext } from "react"
import { FaBolt, FaFire, FaMobileAlt, FaShippingFast, FaEnvelope } from "../components/HomeIcons"
import { HiSparkles } from "react-icons/hi"
import Product from "../components/Product"
import { ProductContext } from "../contexts/ProductContext"
import Hero from "../components/Hero"

const Home = () => {
  const {products} = useContext(ProductContext)
  
  const filteredProducts = products.filter((item) => {
    const clothingCategories = ["men's clothing", "women's clothing","jewelery","electronics"];
    return clothingCategories.includes(item.category);
  });

  // Sélection des nouveautés (5 derniers produits)
  const nouveautes = filteredProducts.slice(-5);
  
  // Sélection des plus populaires (5 premiers produits avec les meilleures notes)
  const populaires = filteredProducts
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 5);

  return (
    <div>
      <Hero />
      
      {/* Section Nouveautés */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <HiSparkles className="text-yellow-400 text-2xl sm:text-3xl" /> 
              <span>Nouveautés</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">Découvrez nos derniers arrivages</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {nouveautes.map((product) => (
              <div key={product.id} className="w-full">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Publicitaire 2 */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center justify-between text-white gap-6 lg:gap-8">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2">
                <FaShippingFast className="text-xl sm:text-2xl" /> 
                <span>Livraison Gratuite</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl px-2 sm:px-0">Pour toute commande supérieure à 50€</p>
            </div>
            <div className="w-full lg:w-1/2 text-center">
              <div className="inline-flex items-center bg-white text-gray-900 px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm sm:text-base">
                <FaBolt className="text-lg sm:text-xl lg:text-2xl mr-2" />
                <span>Livraison en 24-48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Produits Populaires */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
              <FaFire className="text-red-500 text-2xl sm:text-3xl" /> 
              <span>Les Plus Populaires</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-600 px-4">Les coups de cœur de nos clients</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {populaires.map((product) => (
              <div key={product.id} className="w-full">
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Publicitaire 3 */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2">
            <FaMobileAlt className="text-2xl sm:text-3xl" /> 
            <span>Téléchargez Notre App</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 px-4">Accédez à des offres exclusives et suivez vos commandes</p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md mx-auto sm:max-w-none">
            <div className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-3 rounded-lg flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-800 transition duration-300">
              <FaMobileAlt className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs">Télécharger sur</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">App Store</div>
              </div>
            </div>
            <div className="w-full sm:w-auto bg-black text-white px-4 sm:px-6 py-3 rounded-lg flex items-center justify-center space-x-2 cursor-pointer hover:bg-gray-800 transition duration-300">
              <FaMobileAlt className="text-lg sm:text-xl lg:text-2xl flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs">Disponible sur</div>
                <div className="text-sm sm:text-base lg:text-lg font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Newsletter */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 flex flex-col sm:flex-row items-center justify-center gap-2">
            <FaEnvelope className="text-xl sm:text-2xl" /> 
            <span>Restez Informé</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 px-4">Inscrivez-vous à notre newsletter pour recevoir nos dernières offres</p>
          <div className="max-w-full sm:max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-2">
              <input 
                type="email" 
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-sm sm:text-base"
              />
              <button className="bg-blue-600 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 text-sm sm:text-base whitespace-nowrap">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home