import React, { useEffect, useState } from "react";
import { FaFilter } from "react-icons/fa";
import Card from "../components/Card.jsx";

const Products = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); 
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    // Fetch data from the backend
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        setJsonData(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? jsonData
        : jsonData.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
  };

  const showAll = () => {
    setFilteredItems(jsonData);
    setSelectedCategory("all");
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    // Logic for sorting based on the selected option
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      {/* products card */}
      <div className="mt-32">
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8 border-t border-gray-300">
        <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4  flex-wrap ">
          <button
            onClick={showAll}
            className={selectedCategory === "all" ? "active" : ""}
          >
            All Products
          </button>
          <button
            onClick={() => filterItems("Dress")}
            className={selectedCategory === "Dress" ? "active" : ""}
          >
            Clothing
          </button>
          <button
            onClick={() => filterItems("Hoodies")}
            className={selectedCategory === "Hoodies" ? "active" : ""}
          >
            Hoodies
          </button>
          <button
            onClick={() => filterItems("Bag")}
            className={selectedCategory === "Bag" ? "active" : ""}
          >
            Bag
          </button>
        </div>

        <div className="flex justify-end mb-4 bg-gray-600 rounded-lg">
        <div className="p-2">
        <FaFilter className="text-white h-4 w-4"/>
        </div>
          <select
            id="sort"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sortOption}
            className="bg-gray-600 text-white px-2 py-1 border-r rounded-lg outline-none" 
          >
            <option value="default"> Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>
        </div>

        {/* product card */}
        <Card filteredItems={filteredItems}/>
      </div>
    </div>
  );
};

export default Products;
