import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

// Mock Carousel component
jest.mock("react-multi-carousel", () => {
  return ({ children }) => <div>{children}</div>;
});

describe("Skills Component", () => {
  test("renders Skills component", () => {
    render(<Skills />);

    // Check if the background image is rendered
    expect(screen.getByAltText("left")).toBeInTheDocument();
  });

  test("renders skill items with correct images and text", () => {
    render(<Skills />);

    // Check if the React JS skill item is rendered
    expect(screen.getByText("React JS")).toBeInTheDocument();

    // Check if the TypeScript skill item is rendered
    expect(screen.getByText("TypeScript")).toBeInTheDocument();

    // Check if the JavaScript skill item is rendered
    expect(screen.getByText("JavaScript")).toBeInTheDocument();

    // Check if the HTML skill item is rendered
    expect(screen.getByText("HTML")).toBeInTheDocument();

    // Check if the CSS skill item is rendered
    expect(screen.getByText("CSS")).toBeInTheDocument();

    // Check if the BootStrap skill item is rendered
    expect(screen.getByText("BootStrap")).toBeInTheDocument();
  });
});
