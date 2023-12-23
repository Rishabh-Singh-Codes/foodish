import RestaurantCard, { withOfferLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantList);
  const [searchTerm, setSearchTerm] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_URL);
    const json = await data.json();

    setRestaurantList(
      json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const {setUserName} = useContext(UserContext);

  if (onlineStatus === false) {
    return (
      <div className="offline-message">
        <h1>Looks like you're offline!</h1>
        <h3>Please check your internet connection.</h3>
      </div>
    );
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto">
      <div className="flex justify-around items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-black rounded h-8"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredRestaurants = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchTerm.toLowerCase())
              );
              setFilteredRestaurantList(filteredRestaurants);
              console.log(searchTerm);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-black rounded h-8"
            placeholder="Enter your name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div>
          <button
            className="px-4 py-2 bg-violet-100 rounded-lg"
            onClick={() => {
              let topRatedRestaurants = restaurantList.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurantList(topRatedRestaurants);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <button
          className="px-4 py-2 bg-gray-100 rounded-lg"
          onClick={() => {
            setFilteredRestaurantList(restaurantList);
            setSearchTerm("");
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="flex justify-center w-full pl-4">
        <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            {
              restaurant?.info?.aggregatedDiscountInfoV3?.header ? <RestaurantCardWithOffer resData={restaurant} /> : <RestaurantCard resData={restaurant} />
            }
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
