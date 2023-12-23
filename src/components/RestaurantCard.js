import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, sla, costForTwo, cloudinaryImageId} = resData?.info;

    const { loggedInUser } = useContext(UserContext);
     return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] h-[350px] bg-gray-100 rounded-xl hover:bg-gray-200 hover:scale-95 transition">
            <img alt="res-logo" className="object-cover h-[50%] w-full rounded-xl" src={`${CDN_URL + cloudinaryImageId}`} />
            <h3 className="font-bold my-4 text-xl">{name.slice(0, 18) + (name.length > 18 ? ` ...` : "")}</h3>
            <h4>{cuisines.join(", ").length > 25 ? cuisines.join(", ").slice(0, 25) + "..." : cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4>
            <h5 className="text-xs">User: {loggedInUser}</h5>
        </div>
    )
}

export const withOfferLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="hover:scale-95 transition">
                <label className="absolute z-50 bg-green-300 text-purple-600 rounded p-1 text-sm">Offers</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard;