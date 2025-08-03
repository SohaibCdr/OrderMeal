import React from 'react';
import burger from '../assets/burger.avif'; // replace with your image path

const features = [
  { id: 1, title: 'Wide culinary selection', text: "Choose from a diverse range of cuisines, ensuring there's something for every craving." },
  { id: 2, title: 'Fast delivery', text: 'Our efficient network ensures your food arrives fresh and hot, right on time.' },
  { id: 3, title: 'Real-time tracking', text: 'Stay informed with live order tracking, so you know exactly where your meal is.' },
  { id: 4, title: '24/7 support', text: 'Need assistance? Our support team is available around the clock to assist you.' }
];

export default function WhyBestSection() {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-5xl font-bold uppercase">Why We Are Best</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center py-8 px-6">
        {/* Left features */}
        <div className="space-y-8">
          {features.slice(0, 2).map(f => (
            <div key={f.id} className="flex items-start mb-[100px]">
              <div className="flex-shrink-0 mr-4">
                <span className="inline-block bg-black text-white rounded-xl w-20 h-20 flex items-center text-4xl justify-center font-bold">
                  {f.id.toString().padStart(2, '0')}
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-4xl font-bold mb-1 font-serif">{f.title}</h3>
                <p className="">{f.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center image */}
        <div className="flex justify-center">
          <img
            src={burger}
            alt="Delicious burger"
            className="w-[450px] h-[320px] lg:w-[390px] lg:h-[600px] object-cover rounded-[150px] shadow-lg"
          />
        </div>

        {/* Right features */}
        <div className="space-y-8">
          {features.slice(2).map(f => (
            <div key={f.id} className="flex items-start justify-end mb-[100px]">
              <div className="text-left">
                <h3 className="text-4xl font-bold mb-1 font-serif">{f.title}</h3>
                <p className="">{f.text}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <span className="inline-block bg-black text-white rounded-xl w-20 h-20 flex items-center text-4xl justify-center font-bold">
                  {f.id.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
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
    </section>
  );
}
