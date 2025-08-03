import React, { useEffect, useState } from 'react';
import { Heart, Search } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import dish1 from '../assets/pizza.jpg';
import dish2 from '../assets/burger9.png';
import dish3 from '../assets/burger4.png';
import seapasta from '../assets/seapasta.jpg';
import chorus from '../assets/churros.avif';
import vpizza from '../assets/Veggie-Pizza.webp';
import sburger from '../assets/spacy-burger.jpg';
import sushiRolls from '../assets/souchi.webp';
import biryani from '../assets/beryani.jpg';
import tacos from '../assets/tacos.avif';
import chocolateCake from '../assets/choclateckake.jpg';
import tempura from '../assets/shrimp.jpg';
import friedRice from '../assets/rice.jpg';

const dishesData = [
  { id: 1, name: 'Sushi Rolls', category: 'Asian', wilaya: 'Bejaia', image: sushiRolls, restaurant: 'Tokyo Dine' },
  { id: 2, name: 'Chicken Biryani', category: 'Indian', wilaya: 'Setif', image: biryani, restaurant: 'Spice Route' },
  { id: 3, name: 'Tacos', category: 'Mexican', wilaya: 'Oran', image: tacos, restaurant: 'El Taco Loco' },
  { id: 4, name: 'Chocolate Cake', category: 'Dessert', wilaya: 'Blida', image: chocolateCake, restaurant: 'Cake & Bake' },
  { id: 5, name: 'Shrimp Tempura', category: 'Seafood', wilaya: 'Tipaza', image: tempura, restaurant: 'Ocean Bites' },
  { id: 6, name: 'Fried Rice', category: 'Asian', wilaya: 'Tizi Ouzou', image: friedRice, restaurant: 'Wok & Roll' },
  { id: 7, name: 'Margherita Pizza', category: 'Italian', wilaya: 'Algiers', image: dish1, restaurant: 'Casa Pizzeria' },
  { id: 8, name: 'Cheese Burger', category: 'Fast Food', wilaya: 'Oran', image: dish2, restaurant: 'Urban Grill' },
  { id: 9, name: 'Spicy Chicken Burger', category: 'Fast Food', wilaya: 'Constantine', image: sburger, restaurant: 'Boulivard Diner' },
  { id: 10, name: 'Seafood Pasta', category: 'Seafood', wilaya: 'Annaba', image: seapasta, restaurant: 'Seafood Palace' },
  { id: 11, name: 'Sweet Churros', category: 'Dessert', wilaya: 'Tlemcen', image: chorus, restaurant: 'Sweet Tooth' },
  { id: 12, name: 'Vegetarian Pizza', category: 'Italian', wilaya: 'Algiers', image: vpizza, restaurant: 'Casa Pizzeria' },
  
];

const ITEMS_PER_PAGE = 20;

const DishesPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ordersView = queryParams.get('orders') === 'true';

  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [wilayaFilter, setWilayaFilter] = useState('All');
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showOrdersOnly, setShowOrdersOnly] = useState(ordersView);
  const [page, setPage] = useState(0);

  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('dishFavorites');
    return stored ? JSON.parse(stored) : [];
  });

  const [orders, setOrders] = useState(() => {
    const stored = localStorage.getItem('dishOrders');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    setPage(0);
  }, [search, categoryFilter, wilayaFilter, showFavoritesOnly, showOrdersOnly]);

  const toggleFavorite = (id) => {
    const updated = favorites.includes(id)
      ? favorites.filter(fid => fid !== id)
      : [...favorites, id];
    setFavorites(updated);
    localStorage.setItem('dishFavorites', JSON.stringify(updated));
  };

  const handleOrder = (id) => {
    if (!orders.includes(id)) {
      const updated = [...orders, id];
      setOrders(updated);
      localStorage.setItem('dishOrders', JSON.stringify(updated));
    }
  };

  const filteredDishes = dishesData.filter(dish =>
    (!showFavoritesOnly || favorites.includes(dish.id)) &&
    (!showOrdersOnly || orders.includes(dish.id)) &&
    dish.name.toLowerCase().includes(search.toLowerCase()) &&
    (categoryFilter === 'All' || dish.category === categoryFilter) &&
    (wilayaFilter === 'All' || dish.wilaya === wilayaFilter)
  );

  const pageCount = Math.ceil(filteredDishes.length / ITEMS_PER_PAGE);
  const start = page * ITEMS_PER_PAGE;
  const currentItems = filteredDishes.slice(start, start + ITEMS_PER_PAGE);

  const uniqueCategories = ['All', ...new Set(dishesData.map(d => d.category))];
  const uniqueWilayas = ['All', ...new Set(dishesData.map(d => d.wilaya))];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold mb-6 text-orange-700 text-center uppercase">
        {showOrdersOnly
          ? 'Your Ordered Dishes'
          : showFavoritesOnly
          ? 'Your Favorite Dishes'
          : 'Explore Our Dishes !!'}
      </h1>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6 justify-center">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 p-2 border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-md"
          />
        </div>

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="p-2	border border-gray-300 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-md">
          {uniqueCategories.map(cat => <option key={cat}>{cat}</option>)}
        </select>

        <select value={wilayaFilter} onChange={(e) => setWilayaFilter(e.target.value)} className="p-2	border border-gray-300	bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-md">
          {uniqueWilayas.map(w => <option key={w}>{w}</option>)}
        </select>

        {!ordersView && (
          <button
            onClick={() => setShowFavoritesOnly(prev => !prev)}
            className={`px-4 py-2 rounded-full text-sm border transition ${showFavoritesOnly ? 'bg-orange-500 text-white' : 'bg-gray-100'}`}>
            {showFavoritesOnly ? 'Show All Dishes' : 'Show Favorites'}
          </button>
        )}
      </div>

      {/* Dish Cards Grid */}
      {currentItems.length === 0 ? (
        <p className="text-center text-gray-500">No dishes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1  ">
          {currentItems.map(dish => (
            <div key={dish.id} className="relative border border-gray-200 h-[360px] w-[240px] rounded-2xl bg-white shadow-lg p-4 mb-10">
              <img src={dish.image} alt={dish.name} className="h-40 w-full object-cover rounded-md mb-4" />
              <h2 className="text-lg font-semibold truncate">{dish.name}</h2>
              <p className="text-sm text-gray-500 mb-2 truncate">{dish.restaurant}</p>
              <p className="text-xs text-gray-400 mb-4">{dish.category} - {dish.wilaya}</p>

              {!ordersView && (
                <div className="absolute top-4 right-4 cursor-pointer" onClick={() => toggleFavorite(dish.id)}>
                  <Heart className={`w-5 h-5 transition ${favorites.includes(dish.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                </div>
              )}

              {!ordersView && (
                <button
                  onClick={() => handleOrder(dish.id)}
                  className={`mt-2 w-full ${orders.includes(dish.id) ? 'bg-green-700 hover:bg-green-600' : 'bg-orange-700 hover:bg-orange-600'} text-white py-2 rounded transition`}>
                  {orders.includes(dish.id) ? 'Ordered' : 'Order Now'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {Math.ceil(filteredDishes.length / ITEMS_PER_PAGE) > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button onClick={() => setPage(prev => Math.max(prev - 1, 0))} disabled={page === 0} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Previous</button>
          <span>Page {page + 1} of {Math.ceil(filteredDishes.length / ITEMS_PER_PAGE)}</span>
          <button onClick={() => setPage(prev => Math.min(prev + 1, Math.ceil(filteredDishes.length / ITEMS_PER_PAGE) - 1))} disabled={page === Math.ceil(filteredDishes.length / ITEMS_PER_PAGE) - 1} className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50">Next</button>
        </div>
      )}
    </div>
  );
};

export default DishesPage;
