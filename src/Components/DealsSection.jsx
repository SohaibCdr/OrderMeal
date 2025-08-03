import React, { useRef, useEffect } from 'react';
import pizza from "../assets/pizza.jpg";
import dish1 from '../assets/pizza.jpg';
import dish2 from '../assets/burger9.png';
import dish3 from '../assets/burger4.png';
import seapasta from '../assets/seapasta.jpg'
import chorus from '../assets/churros.avif'
import vpizza from '../assets/Veggie-Pizza.webp'
import sburger from '../assets/spacy-burger.jpg'
import sushiRolls from '../assets/souchi.webp'
import biryani from '../assets/beryani.jpg'
import tacos from '../assets/tacos.avif'
import chocolateCake from '../assets/choclateckake.jpg'
import tempura from '../assets/shrimp.jpg'
import friedRice from '../assets/rice.jpg'

import { Link } from 'react-router-dom'
const dishes = [
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
  { id: 11, name: 'Sweet Churros', category: 'Dessert', wilaya: 'Tlemcen', image: chorus , restaurant: 'Sweet Tooth' },
  { id: 12, name: 'Vegetarian Pizza', category: 'Italian', wilaya: 'Algiers', image: vpizza, restaurant: 'Casa Pizzeria' },
];

// We’ll render dishes twice for looping
const looped = [...dishes, ...dishes];

export default function DealsCarousel() {
  const ref = useRef(null);

  // On mount, scroll to the start of the second half
  useEffect(() => {
    const el = ref.current;
    if (el) {
      // scroll to beginning of the second copy
      const half = el.scrollWidth / 2;
      el.scrollLeft = half;
    }
  }, []);

  const handleScroll = () => {
    const el = ref.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    // if we scroll past the second half, jump back
    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    }
    // if we scroll before the first half, jump forward
    else if (el.scrollLeft <= 0) {
      el.scrollLeft += half;
    }
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-6 uppercase tracking-wide">
        See Today&apos;s Best Deal !!!
      </h2>

      <div
        ref={ref}
        onScroll={handleScroll}
        className="flex space-x-8 overflow-x-auto no-scrollbar pb-4 mt-14 mb-8"
        style={{
          msOverflowStyle: 'none',  // IE/Edge
          scrollbarWidth: 'none',   // Firefox
        }}
      >
        {looped.map((dish, idx) => (
          <div
            key={`${dish.id}-${idx}`}
            className="flex-none w-60 h-80 rounded-[90px] overflow-hidden shadow-md"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to='/dishes'>
        <button className="px-20 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition font-bold">
          See All
        </button>
        </Link>
      </div>

      <div className="w-full bg-opacity-90">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#000"
            fillOpacity="3"
            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V100H0Z"
          ></path>
        </svg>
      </div>   

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
