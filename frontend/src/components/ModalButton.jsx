import classNames from "classnames";

const ModalButton = ({ color, text, onClick }) => {
  const buttonClasses = classNames(
    "py-3 px-2 rounded-lg font-bold transition-all duration-150 ease-in hover:text-white",
    {
      "text-red-600 hover:bg-red-600": color === "red",
      "text-green-600 hover:bg-green-600": color === "green",
    }
  );

  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
    </button>
  );
};

export default ModalButton;
