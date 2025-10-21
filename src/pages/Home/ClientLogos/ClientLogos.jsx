// ✅ src/pages/Home/ClientLogos.jsx
import React from "react";
import Marquee from "react-fast-marquee";

import amazon from '../../../assets/brands/amazon.png';
import amazonVector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstart from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import startPeople from '../../../assets/brands/start-people 1.png';
import start from '../../../assets/brands/start.png';


const logos = [amazon, amazonVector, casio, moonstart, randstad, startPeople, start ];

const ClientLogos = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        {/* 🧭 Section title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-10 text-center">
          Trusted by Leading Companies
        </h2>

        {/* 🎠 Continuous Marquee */}
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={40} // Adjust speed (default 50)
        >
          <div className="flex items-center space-x-16">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogos;
