import React, { useState, useEffect, useRef } from 'react';
import pizza from '../assets/pizza.jpg';
import { Menu, Heart, HeartOff, Search } from 'lucide-react';
import burger from '../assets/burger9.png';
import burger1 from '../assets/burger4.png';
import { useSearchParams } from 'react-router-dom';
import rest1 from '../assets/rest1.jpg'
import rest2 from '../assets/rest2.jpg'
import rest3 from '../assets/rest3.jpg'
import rest4 from '../assets/rest4.jpg'
import rest5 from '../assets/rest5.jpg'
import rest6 from '../assets/rest6.avif'
import rest7 from '../assets/rest7.jpg'
import rest8 from '../assets/rest8.jpg'
import rest9 from '../assets/rest9.jpg'
// --- Card Component ---
const Cartes = ({ id, name, img, description, location, isFavorite, onToggleFavorite }) => {
  const [drop, setDrop] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDrop(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex justify-center mb-8'>
      <div ref={ref} className='relative border border-gray-200 h-[350px] w-[250px] rounded-2xl bg-white shadow-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-xl'>{name}</h2>
          <div className='flex items-center gap-2'>
            <button onClick={() => onToggleFavorite(id)} className="text-red-500">
              {isFavorite ? <Heart className="fill-red-500 stroke-red-500" /> : <Heart />}
            </button>
            <button onClick={() => setDrop(!drop)}>
              <Menu className='text-orange-600 w-6 h-6' />
            </button>
          </div>
        </div>
        {drop && (
          <ul className='absolute top-12 right-4 bg-white border border-gray-200 rounded-md shadow-md w-40'>
            {['Menu', 'Events', 'Contact'].map(item => (
              <li
                key={item}
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => setDrop(false)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <img src={img} alt='restaurant' className='mt-4 h-32 w-full object-cover rounded-lg' />
        <p className='px-2 text-center mt-2 font-semibold text-sm'>{description}</p>
        <div className='border-t border-gray-200 my-2'></div>
        <p className='text-center text-sm text-gray-600'>{location}</p>
      </div>
    </div>
  );
};

// --- RestaurantsPage Component ---
const RestaurantsPage = () => {
  const allRestaurants = [
    { id: 1, name: 'Boulivard Diner', imageUrl: rest1, description: 'Enjoy handcrafted meals made with quality ingredients.', location: '📍 Constantine – Emir Abdelkader Boulevard' },
    { id: 2, name: 'Le Gourmet', imageUrl:rest2, description: 'Fine dining with a modern twist.', location: '📍 El Madania, Algiers' },
    { id: 3, name: 'Casa Pizzeria', imageUrl: rest3, description: 'Authentic wood-fired pizzas.', location: '📍 Oran City Center' },
    { id: 4, name: 'Spice Hub', imageUrl: rest4, description: 'Bold flavors from around the world.', location: '📍 Bab Ezzouar, Algiers' },
    { id: 5, name: 'Veggie Delight', imageUrl: rest5, description: 'Fresh and healthy vegetarian dishes.', location: '📍 Sidi Bel Abbès Centre' },
    { id: 6, name: 'Seafood Palace', imageUrl: rest6, description: 'The best catches of the day.', location: '📍 Annaba Corniche' },
    { id: 7, name: 'Urban Grill', imageUrl: rest7, description: 'Grilled to perfection.', location: '📍 Tlemcen Downtown' },
    { id: 8, name: 'Sweet Tooth', imageUrl: rest8, description: 'Decadent desserts and pastries.', location: '📍 Algiers City Center' },
    { id: 9, name: 'Bistro Corner', imageUrl: rest9, description: 'Cozy bistro classics.', location: '📍 Bir Mourad Raïs' }
  ];

  const [searchParams] = useSearchParams();
  const showFavoritesOnly = searchParams.get("favorites") === "true";

  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
  });

  const handleToggleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter(fid => fid !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem('favorites', JSON.stringify(updated));
  };

  const filtered = allRestaurants
    .filter(r =>
      (!showFavoritesOnly || favorites.includes(r.id)) &&
      (r.name.toLowerCase().includes(search.toLowerCase()) ||
        r.location.toLowerCase().includes(search.toLowerCase()))
    );

  const itemsPerPage = 20;
  const pageCount = Math.ceil(filtered.length / itemsPerPage);
  const start = page * itemsPerPage;
  const currentItems = filtered.slice(start, start + itemsPerPage);

  const handlePrev = () => setPage(prev => Math.max(prev - 1, 0));
  const handleNext = () => setPage(prev => Math.min(prev + 1, pageCount - 1));

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-4xl font-bold font-serif  mb-8 text-center uppercase text-orange-700'>
        {showFavoritesOnly ? "Your Favorite Restaurants" : "welcome to Our Restaurants"}
      </h1>

      <div className='max-w-md mx-auto mb-8 relative'>
        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
        <input
          type='text'
          placeholder='Search restaurants...'
          className='w-full pl-10 p-2 border border-gray-300 bg-white rounded-[100px] focus:outline-none focus:ring-2 focus:ring-orange-600 shadow-md'
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(0); }}
        />
      </div>

      {filtered.length === 0 ? (
        <p className='text-center text-gray-500'>No restaurants found.</p>
      ) : (
        <>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1'>
            {currentItems.map(rest => (
              <Cartes
                key={rest.id}
                id={rest.id}
                name={rest.name}
                img={rest.imageUrl}
                description={rest.description}
                location={rest.location}
                isFavorite={favorites.includes(rest.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>

          <div className='flex justify-center items-center mt-6 space-x-4'>
            <button onClick={handlePrev} disabled={page === 0} className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>Previous</button>
            <span>Page {page + 1} of {pageCount}</span>
            <button onClick={handleNext} disabled={page === pageCount - 1} className='px-4 py-2 bg-gray-200 rounded disabled:opacity-50'>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export { RestaurantsPage, Cartes };
