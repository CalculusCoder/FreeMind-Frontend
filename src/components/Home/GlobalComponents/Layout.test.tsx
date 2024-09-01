import React from "react";
import { render } from "@testing-library/react";
import Layout from "./Layout";

// Mocking Navbar component for simplicity.
jest.mock("./Navbar", () => {
  return function DummyNavbar({ className }: any) {
    return <div className={className}>Navbar</div>;
  };
});

describe("Layout", () => {
  test("renders Navbar and child components", () => {
    const { getByText } = render(
      <Layout page="home">
        <div>Child Component</div>
      </Layout>
    );

    // Check if Navbar is rendered
    expect(getByText("Navbar")).toBeInTheDocument();

    // Check if child component is rendered
    expect(getByText("Child Component")).toBeInTheDocument();
  });

  test('assigns the home class to the Navbar when page prop is "home"', () => {
    const { getByText } = render(
      <Layout page="home">
        <div>Child Component</div>
      </Layout>
    );

    // Check if Navbar has the home class
    expect(getByText("Navbar")).toHaveClass("bg-same-as-home-div");
  });
});
