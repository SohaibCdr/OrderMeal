import React from 'react';
import logo from '../assets/logo.png';
import { User, ShoppingCart, Search, Heart } from 'lucide-react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we're currently viewing favorites
  const isFavorites = location.pathname === '/restaurants' && location.search.includes('favorites=true');

  // Check if we're currently viewing orders
  const isOrders = location.pathname === '/dishes' && location.search.includes('orders=true');

  // Toggle between favorites view and normal restaurant list
  const handleHeartClick = () => {
    if (isFavorites) {
      navigate('/restaurants');
    } else {
      navigate('/restaurants?favorites=true');
    }
  };

  // Toggle between orders view and normal dishes list
  const handleCartClick = () => {
    if (isOrders) {
      navigate('/dishes');
    } else {
      navigate('/dishes?orders=true');
    }
  };

  return (
    <nav className="flex w-full bg-white shadow-md mt-2 lg:mt-0 z-20 items-center ">
      <div className="container mx-auto flex items-center justify-between px-6 flex-wrap ">
        {/* Left: Navigation links */}
        

        {/* Center: Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0 lg:mr-[245px]  lg:ml-0 ml-[50px]">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[60px]" />
          </Link>
          <h1 className="font-bold text-2xl font-serif tracking-wide">ORDER MEAL</h1>
        </div>
        <div className="flex items-center gap-4 mb-4 md:mb-0  mr-[390px]  lg:ml-0 ml-[50px]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? 'bg-orange-500 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium transition'
                : 'bg-gray-100 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium hover:bg-gray-200 cursor-pointer transition'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/restaurants"
            className={({ isActive }) =>
              isActive
                ? 'bg-orange-500 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium transition'
                : 'bg-gray-100 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium hover:bg-gray-200 cursor-pointer transition'
            }
          >
            Restaurants
          </NavLink>
          <NavLink
            to="/dishes"
            className={({ isActive }) =>
              isActive
                ? 'bg-orange-500 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium transition'
                : 'bg-gray-100 border border-gray-300 text-sm rounded-full px-4 py-1 font-medium hover:bg-gray-200 cursor-pointer transition'
            }
          >
            Dishes
          </NavLink>
        </div>
    
        {/* Right: Icons */}
        <div className="flex items-center gap-5 mb-4 lg:mb-0  lg:ml-0 ml-[140px]">
          <button onClick={handleHeartClick}>
            <Heart
              className={`w-5 h-5 transition cursor-pointer ${
                isFavorites ? 'text-red-500' : 'hover:text-red-500 text-black'
              }`}
            />
          </button>
          <button onClick={handleCartClick}>
            <ShoppingCart
              className={`w-5 h-5 transition cursor-pointer ${
                isOrders ? 'text-green-500' : 'hover:text-green-500 text-black'
              }`}
            />
          </button>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-500 border border-gray-300 text-sm rounded-full p-2 transition'
                : 'bg-gray-100 border border-gray-300 text-sm rounded-full p-2 hover:bg-gray-200 cursor-pointer transition'
            }
          >
            <User className="w-5 h-5" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
