import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const handleClick =() => {
        setShowIndex();
    }
  return (
    <div className="w-3/5 m-auto bg-gray-100 mb-4 p-2 items-center rounded shadow-lg">
      <div className="flex justify-between hover:cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="bold mr-3 text-center">{showItems ? "🔼" : "🔽"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
