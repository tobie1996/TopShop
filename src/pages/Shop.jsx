import React, { useContext, useState, useMemo } from 'react'
import Product from '../components/Product'
import { ProductContext } from '../contexts/ProductContext'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

const Shop = () => {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  
  const productsPerPage = 12; // Nombre de produits par page

  // Récupérer toutes les catégories uniques
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return ["Toutes", ...uniqueCategories];
  }, [products]);

  // Filtrer les produits selon la recherche et la catégorie
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "Toutes" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // Calcul de la pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Réinitialiser la page lors du changement de filtre
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Navigation pagination
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPrevious = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const goToNext = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  // Générer les numéros de pages à afficher
  const getVisiblePages = () => {
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    return Array.from(
      { length: endPage - startPage + 1 }, 
      (_, i) => startPage + i
    );
  };

  return (
    <div className='mt-40'>
      {/* En-tête */}
      <div className="text-center py-8 mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          COLLECTION FEMME
        </h1>
        <p className="text-gray-600 text-lg">
          Découvrez notre sélection de vêtements tendance
        </p>
        <div className="mt-4 text-sm text-gray-500">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
        </div>
      </div>

      {/* Barre de recherche et filtres */}
      <div className="container mx-auto px-4 mb-8">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Barre de recherche */}
          <div className="w-full lg:w-1/2">
            <input
              type="text"
              placeholder="Rechercher un vêtement..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>

          {/* Filtre par catégorie */}
          <div className="w-full lg:w-1/2 lg:max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-white"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grille des produits */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          {currentProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
              {currentProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <Product product={{ ...product, image: product.images && product.images[0] }} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination */}
      {totalPages > 1 && (
        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center space-y-4">
              
              {/* Informations sur la page actuelle */}
              <div className="text-sm text-gray-600">
                Affichage de {startIndex + 1} à {Math.min(endIndex, filteredProducts.length)} sur {filteredProducts.length} produits
              </div>

              {/* Navigation pagination */}
              <div className="flex items-center space-x-1">
                
                {/* Bouton Précédent */}
                <button
                  onClick={goToPrevious}
                  disabled={currentPage === 1}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === 1
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'
                  }`}
                >
                  <HiChevronLeft className="w-4 h-4 mr-1" />
                  Précédent
                </button>

                {/* Numéros de pages */}
                <div className="flex space-x-1">
                  {getVisiblePages().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => goToPage(pageNumber)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pageNumber === currentPage
                          ? 'bg-pink-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}
                </div>

                {/* Bouton Suivant */}
                <button
                  onClick={goToNext}
                  disabled={currentPage === totalPages}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === totalPages
                      ? 'text-gray-400 cursor-not-allowed'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-pink-600'
                  }`}
                >
                  Suivant
                  <HiChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              {/* Saut rapide aux pages */}
              {totalPages > 10 && (
                <div className="flex items-center space-x-2 text-sm">
                  <span className="text-gray-600">Aller à la page:</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      const page = parseInt(e.target.value);
                      if (page >= 1 && page <= totalPages) {
                        goToPage(page);
                      }
                    }}
                    className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <span className="text-gray-600">sur {totalPages}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default Shop