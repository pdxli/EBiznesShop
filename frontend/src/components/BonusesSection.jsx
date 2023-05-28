import offers from "../data/BonusesData";

const BonusesSection = () => {
  return (
    <div className="bg-primary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-8">
          Najlepsza oferta na rynku!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:translate-y-[-5px] transition-transform duration-100 ease-in"
            >
              <img
                src={offer.icon}
                alt={offer.title}
                className="h-16 w-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-primary">
                {offer.title}
              </h3>
              <p className="text-text">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BonusesSection;
