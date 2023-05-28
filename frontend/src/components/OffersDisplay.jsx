import React, { useState, useEffect } from "react";
import ShoeCard from "./ShoeCard";

const Offers = () => {
  const [loading, setLoading] = useState(true);
  const [shoes, setShoes] = useState([]);
  const [filteredShoes, setFilteredShoes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true); // Set loading to true at the start of the fetch request
      const response = await fetch(
        "http://localhost:8000/products-set/?format=json"
      );
      const data = await response.json();
      setShoes(data);
      setFilteredShoes(data);
      setLoading(false); // Set loading to false once the data is loaded
    } catch (error) {
      console.error(error);
      setLoading(false); // Also set loading to false in case of an error
    }
  };

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setSelectedCategory(value);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  useEffect(() => {
    const filtered = shoes.filter((shoe) => {
      if (selectedCategory === "" && searchQuery === "") {
        return true;
      }
      if (
        selectedCategory !== "" &&
        shoe.category !== parseInt(selectedCategory)
      ) {
        return false;
      }
      const lowerCaseName = shoe.name.toLowerCase();
      const lowerCaseQuery = searchQuery.toLowerCase();
      return lowerCaseName.includes(lowerCaseQuery);
    });
    setFilteredShoes(filtered);
  }, [shoes, selectedCategory, searchQuery]);

  const categoryOptions = [
    { label: "Wszystkie buty", value: "" },
    { label: "Sandały", value: "1" },
    { label: "Buty sportowe", value: "2" },
    { label: "Buty zimowe", value: "3" },
    { label: "Sneakersy", value: "4" },
    { label: "Buty wyjściowe", value: "5" },
  ];

  if (loading) {
    return <div>Loading...</div>; // Render loading state if `loading` is true
  }

  return (
    <div className="flex flex-col xl:flex-row justify-evenly xl:justify-center p-8">
      <div className="w-50 flex flex-col justify-center sm:flex-row xl:flex-col xl:m-0 xl:justify-start min-w-0 sm:min-w-max items-center gap-5 mb-5">
        <select
          value={selectedCategory}
          className="w-full p-3 rounded-lg border-2 border-primary text-lg font-bold text-primary max-w-xs"
          onChange={handleDropdownChange}
        >
          {categoryOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchQuery}
          placeholder="Szukaj butów"
          className="w-full p-3 rounded-lg border-2 border-primary text-lg font-bold text-primary max-w-xs"
          onChange={handleSearch}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 gap-6">
        {filteredShoes.map((shoe) => (
          <ShoeCard key={shoe.id} imageUrl={`/static${shoe.image}`} {...shoe} />
        ))}
      </div>
    </div>
  );
};

export default Offers;
