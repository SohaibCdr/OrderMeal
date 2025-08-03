// components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand & Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4">OrderMeal</h3>
          <p className="text-gray-400 mb-4">
            Delicious food delivered fast to your door.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-full bg-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 rounded-r-full hover:bg-red-600 transition"
            >
              <Mail className="w-5 h-5 text-white" />
            </button>
          </form>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-between md:justify-center md:gap-16">
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#"><Facebook className="w-6 h-6 hover:text-blue-600" /></a>
            <a href="#"><Twitter className="w-6 h-6 hover:text-blue-400" /></a>
            <a href="https://www.instagram.com/sohaib_cdr?igsh=MWxoNW1xd2ppdTFhMw%3D%3D&utm_source=qr" target="_blank"rel="noopener noreferrer">
            <Instagram className="w-6 h-6 hover:text-pink-500" /></a>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} OrderMeal. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
