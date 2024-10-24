import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Contact } from "./Contact";
import { addDoc } from "firebase/firestore";

// Mock the addDoc function
jest.mock("firebase/firestore", () => ({
  getFirestore: jest.fn(),
  collection: jest.fn(),
  addDoc: jest.fn(),
}));

describe("Contact Component", () => {
  let consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  test("updates form fields correctly", () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello!" },
    });

    expect(screen.getByPlaceholderText("First Name").value).toBe("John");
    expect(screen.getByPlaceholderText("Last Name").value).toBe("Doe");
    expect(screen.getByPlaceholderText("Email Address").value).toBe(
      "john.doe@example.com"
    );
    expect(screen.getByPlaceholderText("Message").value).toBe("Hello!");
  });

  test("submits the form successfully", async () => {
    addDoc.mockResolvedValueOnce({ id: "123" });

    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello!" },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByText("Send"));
    });

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(addDoc).toHaveBeenCalledWith(undefined, {
      email: "john.doe@example.com",
      firstName: "John",
      lastName: "Doe",
      message: "Hello!",
    });

    await screen.findByText("Message sent successfully");
  });

  test("handles form submission error", async () => {
    addDoc.mockRejectedValueOnce(new Error("Failed to send message"));

    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(screen.getByPlaceholderText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email Address"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Message"), {
      target: { value: "Hello!" },
    });

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.click(screen.getByText("Send"));
    });

    expect(addDoc).toHaveBeenCalledTimes(1);
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);

    await screen.findByText("Something went wrong, please try again later.");
  });
});
