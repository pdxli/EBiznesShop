import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-primary text-text">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Witamy w naszym sklepie
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8">
            Znajdź perfekcyjne buty dla siebie
          </p>
          <Link
            to="/offers"
            className="bg-accent hover:bg-secondary text-primary font-bold py-2 px-4 rounded-full transition duration-300"
          >
            Sprawdź naszą ofertę
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
