import React from 'react';
import about from "../assets/about.jpeg";

const Aboutus = () => {
  return (
    <div className="min-h-screen w-full flex flex-col pt-16">
      
      
      <div className="relative w-full h-[28vh]">
        <img src={about} alt="About Us" className="h-full w-full object-cover" />
        
         
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white bg-black bg-opacity-40">
          About Us
        </h1>
      </div>

      
      <div className="p-6 max-w-4xl mx-auto text-gray-700 text-center">
        <p className="text-lg">
          Welcome to our e-commerce store! We provide a curated selection of top-quality products
          across various categories including electronics, fashion, and home essentials. Our goal is
          to make shopping smooth, affordable, and secure for everyone.
        </p>
      </div>

    </div>
  );
};

export default Aboutus;
