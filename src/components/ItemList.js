import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex justify-between my-4 border-b-2 p-5"
          data-testid="foodItem"
        >
          <div className="flex flex-col w-9/12">
            <div className="font-semibold w-4/5">{item?.card?.info?.name}</div>
            <div className="text-sm">₹ {item?.card?.info?.price / 100}</div>
            <div className="text-xs w-4/5">{item?.card?.info?.description}</div>
          </div>
          <div className="w-3/12">
            {item?.card?.info?.imageId && (
              <div className="absolute">
                <button
                  className="bg-white text-green-500 relative left-8 top-20 px-2 rounded-lg border-2 border-green-500"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
            )}
            {item?.card?.info?.imageId === undefined && (
              <div className="flex items-center ml-8">
                <button
                  className="bg-white text-green-500 px-2 rounded-lg border-2 border-green-500"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
              </div>
            )}
            {item?.card?.info?.imageId && (
              <img
                className="w-32 h-24 object-cover rounded-lg"
                src={CDN_URL + item?.card?.info?.imageId}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
