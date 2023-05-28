import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-black">
              Strona stworzona przez: Sebastian Paw i Patryk Doktor
            </p>
            <p className="text-sm text-black">Projekt na przedmiot EBiznes</p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-black">
              &copy; {new Date().getFullYear()} EBiznesShop
            </p>
            <p className="text-sm text-black">All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
