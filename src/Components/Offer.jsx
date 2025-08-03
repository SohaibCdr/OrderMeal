import React from 'react';
import step1 from "../assets/medium-rare-steak.jpg";
import pizza from "../assets/pizza.jpg";
import burger from '../assets/burger9.png'; // Update this if you're using a new image path
import { Link } from 'react-router-dom';
const Offer = () => {
  return (
    <div
      className=" w-full bg-no-repeat bg-center bg-cover z-0 bg-opacity-80"
      style={{
        backgroundImage: `url(${burger})`,
        minHeight: '500px', // Adjust height as needed
        backgroundSize: 'cover',
        backfaceVisibility:'inherit'
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute  bg-black bg-opacity-0 z-0"></div>

      <div className="relative z-10 w-full px-8 md:px-16 py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-8  ">
            8 BURGERS+ <br /> FRENCH FRIES
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white lg:ml-16 leading-tight">
            Enjoy Burgers <br /> at home!
          </h3>
        </div>

        <div className="flex items-center mt-10">
          <img
            src={step1}
            alt="Download app"
            className="w-[100px] h-[100px] object-cover rounded-full mr-4"
          />
          <p className="text-lg md:text-xl text-white font-serif font-light">
            Tender, flame-grilled beef, seasoned <br />
            to perfection for a rich, smoky taste <br />
            that melts in your mouth.
          </p>
        </div>
        <div className="flex items-center mt-10">
          <img
            src={pizza}
            alt="Download app"
            className="w-[100px] h-[100px] object-cover rounded-full mr-4"
          />
          <p className="text-lg md:text-xl text-white font-serif font-light">
            Crisp, blistered crust topped with tangy tomato sauce, <br />
            bubbling fresh mozzarella, and fragrant basil leaves <br />
            for a perfectly balanced, irresistible slice.
          </p>
        </div>
        <Link to='/dishes'>
        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 hover:text-white transition-colors mt-10 mb-10 ">
          Explore Menu
        </button>
        </Link>
      </div>
      <div className="w-full bg-opacity-90">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            fillOpacity="3"
            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V100H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Offer;
