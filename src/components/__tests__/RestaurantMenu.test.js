import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/restaurantMenu.mock.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("should render the restaurant menu", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Personal Slice Veg Pizza. (27)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItem");

  expect(foodItems.length).toBe(27);

  const addBtns = screen.getAllByText("ADD +");

  fireEvent.click(addBtns[0]);

  const incrementedCartItem1 = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "a" &&
      element.textContent.includes("🛒") &&
      element.textContent.includes("(1)")
    );
  });

  fireEvent.click(addBtns[1]);

  expect(incrementedCartItem1).toBeInTheDocument();

  const incrementedCartItem2 = screen.getByText((content, element) => {
    return (
      element.tagName.toLowerCase() === "a" &&
      element.textContent.includes("🛒") &&
      element.textContent.includes("(2)")
    );
  });

  expect(incrementedCartItem2).toBeInTheDocument();

  const cartHeader = screen.getByText("Cart");

  expect(cartHeader).toBeInTheDocument();

  const updatedFoodItems1 = screen.getAllByTestId("foodItem");

  expect(updatedFoodItems1.length).toBe(29);

  const clearCartBtn = screen.getByRole("button", { name: "❌ Clear Cart" });

  fireEvent.click(clearCartBtn);

  const updatedFoodItems2 = screen.getAllByTestId("foodItem");

  expect(updatedFoodItems2.length).toBe(27);

  const cartEmptyMsg = screen.getByText("Your cart is empty! Add some dishes to your cart.");

  expect(cartEmptyMsg).toBeInTheDocument();
});
