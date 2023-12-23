import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-4/5 m-auto py-6 border">
      <h1 className="text-3xl font-bold text-center">Cart</h1>
      {cartItems.length === 0 ? (
          <h2 className="text-center">Your cart is empty! Add some dishes to your cart.</h2>
      ) : (
        <div className="w-6/12 m-auto">
          <ItemList items={cartItems} />
          <div className="flex justify-around">
            <button
              className="bg-red-300 p-3 rounded-lg"
              onClick={handleClearCart}
            >
              ❌ Clear Cart
            </button>
            <button className="bg-green-300 p-3 rounded-lg">✅ Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
