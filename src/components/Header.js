import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnTitle, setBtnTitle] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // subscribing to the store using selector
  const cart = useSelector((store) => store.cart.items);

  // console.log(cart);

  return (
    <div className="flex justify-between shadow-lg mb-2 bg-red-100">
      <div className="logo-container">
        <Link to="/" className="link">
          <img className="w-44" src={LOGO_URL} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center">
          <li className="px-4 text-lg font-bold text-zinc-700">
            {onlineStatus === true ? "Online 🟢" : "Offline 🔴"}
          </li>
          <li className="px-4">
            <Link to="/" className="text-lg font-bold text-zinc-700">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery" className="text-lg font-bold text-zinc-700">
              Grocery
            </Link>
          </li>
          <li className="px-4">
            <Link to="/about" className="text-lg font-bold text-zinc-700">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link to="/contact" className="text-lg font-bold text-zinc-700">
              Contact
            </Link>
          </li>
          <li className="px-4 text-3xl font-bold text-zinc-700">
            <Link to="/cart" className="text-lg font-bold text-zinc-700">
              🛒 <span className="text-lg">({cart.length})</span>
            </Link>
          </li>
          <li className="px-4 text-lg font-bold text-zinc-700">
            <button
              className="login-btn"
              onClick={() => {
                btnTitle === "Login"
                  ? setBtnTitle("Logout")
                  : setBtnTitle("Login");
              }}
            >
              {btnTitle}
            </button>
          </li>
          <li className="px-4 text-lg font-bold text-black">
            👤
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
