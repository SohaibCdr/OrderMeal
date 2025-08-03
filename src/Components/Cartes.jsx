import React, { useState, useEffect, useRef } from 'react';
import pizza from "../assets/pizza.jpg";
import { Menu } from 'lucide-react';

const Cartes = ({ name = "Boulivard Diner",
                  img = pizza,
                  description = "Enjoy handcrafted meals made with quality ingredients.",
                  location = "📍 Constantine – Emir Abdelkader Boulevard" }) => {
  const [drop, setDrop] = useState(false);
  const ref = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDrop(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setDrop(prev => !prev);
  };

  return (
    <div className='flex justify-center mb-8'>
      <div ref={ref} className='relative border border-gray-200 h-[350px] w-[250px] rounded-2xl bg-white shadow-lg p-4'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold text-xl'>{name}</h2>
          <button onClick={toggleDropdown}>
            <Menu className='text-orange-600 w-8 h-8' />
          </button>
        </div>
        {drop && (
          <ul className='absolute top-12 right-4 bg-white border border-gray-200 rounded-md shadow-md w-40'>
            {[ 'Menu', 'Events', 'Contact'].map((item) => (
              <li
                key={item}
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => {
                  console.log(item);
                  setDrop(false);
                }}
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

export default Cartes;
