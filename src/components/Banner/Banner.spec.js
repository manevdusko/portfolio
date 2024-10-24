import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Banner } from "./Banner";

describe("Banner Component", () => {
  test("renders Banner component", () => {
    render(
      <Router>
        <Banner />
      </Router>
    );

    // Check if the welcome text is rendered
    expect(screen.getByText("Welcome to my Portfolio")).toBeInTheDocument();

    // Check if the initial rotating text is rendered
    expect(screen.getByText("Hi! I'm Dushko,")).toBeInTheDocument();

    // Check if the description is rendered
    expect(
      screen.getByText(/I'm a front-end developer with/)
    ).toBeInTheDocument();

    // Check if the "Contact me" button is rendered
    expect(screen.getByText("Contact me")).toBeInTheDocument();
  });

  test("Contact me button has correct link", () => {
    render(
      <Router>
        <Banner />
      </Router>
    );

    // Check if the "Contact me" button has the correct link
    expect(screen.getByText("Contact me").closest("a")).toHaveAttribute(
      "href",
      "/#connect"
    );
  });
});
