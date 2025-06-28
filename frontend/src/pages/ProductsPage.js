import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Search, Star, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductsPage = () => {
  const { category } = useParams();
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'weights', name: 'Weights', count: 5 },
    { id: 'supplements', name: 'Supplements', count: 4 },
    { id: 'equipment', name: 'Equipment', count: 3 }
  ];

  const products = [
    // Weights
    {
      id: 1,
      name: 'Professional Dumbbell Set',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1672344048213-76b6e77304bd',
      category: 'weights',
      rating: 4.8,
      reviews: 124,
      description: 'Premium quality adjustable dumbbells with ergonomic grip',
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: 'Olympic Barbell Set',
      price: 499,
      originalPrice: 599,
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      category: 'weights',
      rating: 4.9,
      reviews: 89,
      description: 'Professional-grade Olympic barbell with weight plates',
      featured: false,
      inStock: true
    },
    {
      id: 3,
      name: 'Kettlebell Collection',
      price: 199,
      originalPrice: 249,
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      category: 'weights',
      rating: 4.7,
      reviews: 156,
      description: 'Complete kettlebell set for functional training',
      featured: false,
      inStock: true
    },
    {
      id: 4,
      name: 'Resistance Bands Set',
      price: 49,
      originalPrice: 69,
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      category: 'weights',
      rating: 4.6,
      reviews: 203,
      description: 'Premium resistance bands with multiple resistance levels',
      featured: false,
      inStock: true
    },
    {
      id: 5,
      name: 'Weight Plates Set',
      price: 299,
      originalPrice: 359,
      image: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      category: 'weights',
      rating: 4.8,
      reviews: 97,
      description: 'Durable weight plates for all your lifting needs',
      featured: false,
      inStock: true
    },
    
    // Supplements
    {
      id: 6,
      name: 'Premium Whey Protein',
      price: 49,
      originalPrice: 59,
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d',
      category: 'supplements',
      rating: 4.9,
      reviews: 234,
      description: 'High-quality whey protein for muscle building',
      featured: true,
      inStock: true
    },
    {
      id: 7,
      name: 'Creatine Monohydrate',
      price: 29,
      originalPrice: 39,
      image: 'https://images.pexels.com/photos/1212845/pexels-photo-1212845.jpeg',
      category: 'supplements',
      rating: 4.8,
      reviews: 189,
      description: 'Pure creatine monohydrate for enhanced performance',
      featured: false,
      inStock: true
    },
    {
      id: 8,
      name: 'Pre-Workout Energy',
      price: 39,
      originalPrice: 49,
      image: 'https://images.pexels.com/photos/1212845/pexels-photo-1212845.jpeg',
      category: 'supplements',
      rating: 4.7,
      reviews: 145,
      description: 'Clean energy pre-workout formula',
      featured: false,
      inStock: true
    },
    {
      id: 9,
      name: 'Post-Workout Recovery',
      price: 35,
      originalPrice: 45,
      image: 'https://images.pexels.com/photos/1212845/pexels-photo-1212845.jpeg',
      category: 'supplements',
      rating: 4.6,
      reviews: 112,
      description: 'Advanced recovery formula with BCAAs',
      featured: false,
      inStock: true
    },
    
    // Equipment
    {
      id: 10,
      name: 'Home Gym Starter Kit',
      price: 599,
      originalPrice: 799,
      image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f',
      category: 'equipment',
      rating: 4.9,
      reviews: 78,
      description: 'Complete home gym setup with everything you need',
      featured: true,
      inStock: true
    },
    {
      id: 11,
      name: 'Adjustable Bench',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1674834727206-4bc272bfd8da',
      category: 'equipment',
      rating: 4.8,
      reviews: 134,
      description: 'Multi-position adjustable workout bench',
      featured: false,
      inStock: true
    },
    {
      id: 12,
      name: 'Power Rack System',
      price: 899,
      originalPrice: 1199,
      image: 'https://images.unsplash.com/photo-1674834727206-4bc272bfd8da',
      category: 'equipment',
      rating: 4.9,
      reviews: 56,
      description: 'Professional power rack for serious training',
      featured: false,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.name.localeCompare(b.name);
    }
  });

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Premium Fitness Products
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our complete collection of professional-grade fitness equipment and supplements
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 sticky top-24">
              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-purple-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className="text-sm opacity-75">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="name">Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-300">
                Showing {sortedProducts.length} of {products.length} products
              </p>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white"
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>

            <AnimatePresence>
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all hover:shadow-xl hover:shadow-purple-500/10 group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.featured && (
                        <div className="absolute top-3 left-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm rounded-full p-2">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-white text-sm">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-purple-400">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">${product.originalPrice}</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Star className="w-4 h-4 fill-current" />
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => addItem(product)}
                        className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add to Cart</span>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;