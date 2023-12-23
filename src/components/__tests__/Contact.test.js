import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  test("Loading Contact Us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should have name input inside Contact Us page", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("Name");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

//   test === it
  it("Should have 2 input boxes", () => {
    // Render
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    // Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
