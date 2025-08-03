"use client"

import { useState } from "react"
import sushiRolls from "../assets/souchi.webp"

export default function SignupPage() {
  const [role, setRole] = useState("restaurant")

  return (
    <div className="flex min-h-screen relative lg:pt-[1px] ">
      {/* Left visual panel */}
      <div className="w-1/2 hidden md:flex items-center justify-center relative bg-gradient-to-br from-orange-400 via-orange-500 to-red-500">
        <img src={sushiRolls || "/placeholder.svg"} alt="delicious food" className=" " />

        {/* Enhanced SVG wave divider with more curves */}
        <svg viewBox="0 0 120 1440" className="absolute right-0 h-full w-20 scale-x-[-1]" preserveAspectRatio="none">
          {/* Main wave layer with complex curves */}
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M80,0C85,25 75,50 70,75C65,100 75,125 80,150C85,175 75,200 65,225C55,250 65,275 75,300C85,325 75,350 65,375C55,400 65,425 75,450C85,475 75,500 70,525C65,550 75,575 85,600C95,625 85,650 75,675C65,700 75,725 85,750C95,775 85,800 75,825C65,850 75,875 85,900C95,925 85,950 75,975C65,1000 75,1025 85,1050C95,1075 85,1100 75,1125C65,1150 75,1175 85,1200C95,1225 85,1250 75,1275C65,1300 75,1325 85,1350C95,1375 85,1400 80,1425C75,1440 80,1440 80,1440H0V0Z"
          />

          {/* Secondary wave layer with different curve pattern */}
          <path
            fill="#ffffff"
            fillOpacity="0.7"
            d="M100,0C95,30 105,60 110,90C115,120 105,150 95,180C85,210 95,240 105,270C115,300 105,330 95,360C85,390 95,420 105,450C115,480 105,510 95,540C85,570 95,600 105,630C115,660 105,690 95,720C85,750 95,780 105,810C115,840 105,870 95,900C85,930 95,960 105,990C115,1020 105,1050 95,1080C85,1110 95,1140 105,1170C115,1200 105,1230 95,1260C85,1290 95,1320 105,1350C115,1380 105,1410 100,1440H0V0Z"
          />

          
        </svg>
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white ">
        <h2 className="text-4xl font-bold font-serif mb-4 text-gray-800">JOIN ORDER MEAL</h2>
        <p className="text-lg mb-6 text-gray-600">Sign up to deliver or serve with ease.</p>

        <div className="flex space-x-4 mb-8">
          <button
            onClick={() => setRole("restaurant")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              role === "restaurant"
                ? "bg-orange-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
            }`}
          >
            Restaurant
          </button>
          <button
            onClick={() => setRole("driver")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              role === "driver"
                ? "bg-orange-500 text-white shadow-lg transform scale-105"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md"
            }`}
          >
            Driver
          </button>
        </div>

        {role === "restaurant" ? <RestaurantForm /> : <DriverForm />}
      </div>
    </div>
  )
}

function RestaurantForm() {
  return (
    <form className="w-full max-w-md space-y-4">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Restaurant Name"
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Business License Number"
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Location / Wilaya"
      />
      <input
        type="email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Password"
      />
      <button className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Sign Up Restaurant
      </button>
    </form>
  )
}

function DriverForm() {
  return (
    <form className="w-full max-w-md space-y-4">
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Full Name"
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Vehicle Type / License Plate"
      />
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Wilaya / City"
      />
      <input
        type="email"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Email"
      />
      <input
        type="password"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
        placeholder="Password"
      />
      <button className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
        Sign Up Driver
      </button>
    </form>
  )
}
