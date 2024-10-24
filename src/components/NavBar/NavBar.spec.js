import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

describe("NavBar Component", () => {
  test("renders NavBar component", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Check if the logo text is rendered
    expect(screen.getByText("m@nev")).toBeInTheDocument();

    // Check if the navigation links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
    expect(screen.getByText("Projects")).toBeInTheDocument();

    // Check if the social icons are rendered
    expect(screen.getAllByRole("img").length).toBe(2);

    // Check if the "Let’s Connect" button is rendered
    expect(screen.getByText("Contact me")).toBeInTheDocument();

    // Check if the LinkedIn link is rendered
    expect(screen.getByAltText("Linkedin").closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/manevdusko/');

    // Check if the mailto link is rendered
    expect(screen.getByAltText("Email").closest('a')).toHaveAttribute('href', 'mailto:dushkomanev9@gmail.com');
  });

  test("updates active link on click", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Click on the "Skills" link
    fireEvent.click(screen.getByText("Skills"));

    // Check if the "Skills" link is now active
    expect(screen.getByText("Skills")).toHaveClass("active");

    // Click on the "Projects" link
    fireEvent.click(screen.getByText("Projects"));

    // Check if the "Projects" link is now active
    expect(screen.getByText("Projects")).toHaveClass("active");
  });

  test("navbar changes style on scroll", () => {
    render(
      <Router>
        <NavBar />
      </Router>
    );

    // Simulate scroll event
    fireEvent.scroll(window, { target: { scrollY: 100 } });

    // Check if the navbar has the scrolled class
    expect(screen.getByRole("navigation")).toHaveClass("scrolled");
  });
});