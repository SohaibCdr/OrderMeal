import React from 'react';
import chef from '../assets/chef.png';
import motor from '../assets/motor.jpg';
import { Link } from 'react-router-dom';

export default function JoinUsSection() {
  return (
    <div className=" text-white   bg-black ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 py-8 px-6 lg:px-0">
        
        {/* Main Call-to-Action */}
        <div className="flex flex-col ">
          <div>
            <p className="text-red-500 uppercase tracking-wide font-bold font-serif text-5xl">Join Us</p>
            <h2 className="text-4xl font-bold mt-2">Partner for Shared Success</h2>
            <p className="mt-4 text-gray-300">
              Whether you own a restaurant or deliver on two wheels, join our network and grow with us.
            </p>
          </div>
          <Link to='/signup'>
          <button className="w-32 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition mt-10">
            Join Now
          </button>
          </Link>
        </div>

        {/* Got a Restaurant? Card */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">Got a Restaurant?</h3>
          <p className="text-gray-300 mb-4">
            Join us as a partner and expand your reach in the culinary world. Showcase your delicious creations to a broader audience through our platform.
          </p>
          <div className="w-full h-[150px] overflow-hidden rounded-[100px] mb-4 ">
            <img
              src={chef}
              alt="Got a Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
          
          <button  className="text-white underline hover:text-red-400 self-start mt-4">
            Read More
          </button>
        </div>

        {/* Got a Bike or a Cycle? Card */}
        <div className="flex flex-col lg:ml-10 ">
          <div className="w-full h-[150px] overflow-hidden rounded-[100px] mb-4">
            <img
              src={motor}
              alt="Delivery Partner"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-2 mt-4">Got a Bike or a Cycle?</h3>
          <p className="text-gray-300 mb-4">
            Turn your wheels into earnings by joining our team. Delivering with us is not just a job.
          </p>
          <button className="text-white underline hover:text-red-400 self-start mt-4">
            Read More
          </button>
        </div>
        
      </div>
      <div className="w-full bg-opacity-90">
        <svg viewBox="0 0 1440 100" className="w-full h-[100px]" preserveAspectRatio="none">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L60,58.7C120,53,240,43,360,37.3C480,32,600,32,720,42.7C840,53,960,75,1080,74.7C1200,75,1320,53,1380,42.7L1440,32V100H0Z"
          ></path>
        </svg>
      </div>  
    </div>
  );
}
