import TestButton from "./TestButton";
import { useState } from "react";
import ModalButton from "./ModalButton";

const ShoeCard = ({ name, price, stock, imageUrl, description }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="p-4 w-full bg-secondary rounded-lg shadow-md hover:shadow-4xl transition-all duration-200 ease-in">
      <div className="mb-2">
        <img src={imageUrl} alt={name} className="w-full h-auto rounded-lg" />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-lg mb-2">Cena: {price}ZŁ</p>

      <TestButton buttonText="Szczegóły" onClick={toggleModal} />

      {showModal ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
          <div className="bg-white rounded-lg p-8 flex flex-col">
            <h2 className="text-2xl font-bold mb-4">{name}</h2>
            <p className="text-xl mb-2">{description}</p>
            <p className="text-lg mb-2">Dostępne: {stock}</p>
            <p className="text-lg mb-2">Cena: {price}ZŁ</p>
            <img
              src={imageUrl}
              alt={name}
              className=" w-96 h-auto rounded-lg self-center"
            />
            <div className="mt-2 flex justify-between">
              <ModalButton
                color="red"
                text="Zamknij okno"
                onClick={toggleModal}
              />
              <ModalButton
                color="green"
                text="Dodaj do koszyka"
                onClick={toggleModal}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ShoeCard;
