import React from "react";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard Component", () => {
  const props = {
    title: "Sample Project",
    description: "This is a sample project description.",
    imgUrl: "https://via.placeholder.com/150",
    githubLink: "https://github.com/sample/sample-project",
  };

  test("renders ProjectCard component with title, description, and image", () => {
    render(<ProjectCard {...props} />);

    // Check if the title is rendered
    expect(screen.getByText(props.title)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(props.description)).toBeInTheDocument();

    // Check if the image is rendered with correct alt text
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
  });

  test("renders GitHub link when provided", () => {
    render(<ProjectCard {...props} />);

    // Check if the GitHub link is rendered
    expect(screen.getByText("Check this project")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(screen.getByText("Check this project").closest("a")).toHaveAttribute(
      "href",
      props.githubLink
    );
  });

  test("does not render GitHub link when not provided", () => {
    const { githubLink, ...propsWithoutLink } = props;
    render(<ProjectCard {...propsWithoutLink} />);

    // Check if the GitHub link is not rendered
    expect(screen.queryByText("Check this project")).not.toBeInTheDocument();
  });
});
