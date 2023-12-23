import { render, screen } from "@testing-library/react";
import RestaurantCard, { withOfferLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resData.mock.json";
import "@testing-library/jest-dom";

it("should render the restaurant card with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Pizza Hut");

  expect(restaurantName).toBeInTheDocument();
});

it("should render the restaurant card with offers with props data", () => {
  const RestaurantCardWithOffer = withOfferLabel(RestaurantCard);
  
  render(<RestaurantCardWithOffer resData={MOCK_DATA} />);

  const restaurantName = screen.getByText("Offers");

  expect(restaurantName).toBeInTheDocument();
});
