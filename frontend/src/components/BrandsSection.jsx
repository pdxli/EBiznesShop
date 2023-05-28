import React from "react";
import brands from "../data/BrandsData.js";

const BrandsSection = () => {
  return (
    <div className="bg-secondary text-text py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8">
          Marki z którymi współpracujemy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center">
              <img
                src={brand.image}
                alt={brand.name}
                className="h-32 w-32 mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{brand.name}</h3>
              <p className="text-center">{brand.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsSection;
