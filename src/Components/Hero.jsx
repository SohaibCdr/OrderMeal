import React from 'react';
import burger from '../assets/burger4.png';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        
        {/* Top Wave - same as bottom wave */}
        <div className="absolute top-0 left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 90"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V0H0Z"
            ></path>
          </svg>
        </div>

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 "
          style={{ backgroundImage: `url(${burger})` }}
        ></div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
        
        {/* Content */}
        <div className="relative z-10 mt-20 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-start px-10">
            <h1 className="text-white font-bold text-4xl lg:text-6xl font-poppins">
              ORDER FOOD <br /> TO YOUR DOOR
            </h1>
            <div className="mt-10 md:mt-0 text-white text-right">
              <h1 className="font-bold text-3xl lg:text-5xl font-poppins">12K+</h1>
              <p className="font-poppins">
                Users using our <br /> Services
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start px-10 mt-10 lg:mt-40">
            <div>
              <h1 className="text-white text-3xl font-bold font-poppins">
                FIND YOUR FAVORITE DISH
              </h1>
              <p className="text-white mt-3">
                Discover culinary delights and find your <br />
                favorite dish with our swift and savory <br />
                food delivery service
              </p>
              <Link to='/dishes'>
                <button className="bg-white border border-gray-300 text-sm font-bold rounded-full px-4 py-2 mt-7">
                Explore Menu
                </button>
              </Link>
            </div>
            <div className="mt-10 md:mt-0 text-white text-right">
              <p>
                With Order Meal, get <br />
                your food delivered to <br />
                your doorstep within <br />
                an hour!
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave SVG - placed AFTER the content and overlay */}
        <div className="relative z-10" >
          <svg
            viewBox="0 0 1440 100"
            className="w-full"
            preserveAspectRatio="none"
            
            
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V100H0Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Hero;