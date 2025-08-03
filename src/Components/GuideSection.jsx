import React from "react";
import step1 from "../assets/burger3.png"; // Add your own image
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full -z-10">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#000"
            d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,53.3C840,53,960,75,1080,80C1200,85,1320,75,1380,69.3L1440,64V0H0Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left content */}
        <div className="pt-8">
          <h2 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-tight">
            GET YOUR FOOD IN LESS
            <br />
            THAN AN HOUR
          </h2>
          <div className="w-1 h-16 bg-gray-300 mb-6"></div>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-md">
            Craving delicious meals without the hassle of cooking or leaving your home? Look no further than OrderMeal,
            your go-to food delivery app for satisfying your cravings with just a few taps.
          </p>
          <Link to='/dishes'>
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors">
            Explore Menu
          </button>
          </Link>
        </div>

        {/* Right side - Steps */}
        <div className="grid grid-cols-1 gap-8 pt-20">
          {/* Step 1 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <p className="text-6xl font-black text-gray-300">01</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-2xl text-black mb-4">Download the app</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Download the Order Meal App and order your food online to get the fastest delivery.
              </p>
              <p className="font-semibold text-black cursor-pointer hover:text-gray-700">Download Now →</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src={step1}
                  alt="Download app"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <p className="text-6xl font-black text-gray-300">02</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-2xl text-black mb-4">Select your food</h3>
              <p className="text-gray-600 leading-relaxed">Select food you want from thousands of restaurants.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src={step1}
                  alt="Select food"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <p className="text-6xl font-black text-gray-300">03</p>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-2xl text-black mb-4">Confirm your order</h3>
              <p className="text-gray-600 leading-relaxed">Select food you want from thousands of restaurants.</p>
            </div>
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center overflow-hidden">
                <img
                  src={step1}
                  alt="Confirm order"
                  className="w-20 h-20 object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="w-full">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#000"
            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V100H0Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default HowItWorks



