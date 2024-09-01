import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders text elements and images correctly", () => {
    const mockFn = jest.fn();
    const { getByText, getByAltText } = render(
      <ThemeProvider defaultTheme="light">
        <Hero onButtonClick={mockFn} />
      </ThemeProvider>
    );

    // check for images
    expect(getByAltText("Sad Brain")).toBeInTheDocument();
    expect(getByAltText("Relaxed Brain")).toBeInTheDocument();
  });

  it("calls onButtonClick when button is pressed", () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <ThemeProvider defaultTheme="light">
        <Hero onButtonClick={mockFn} />
      </ThemeProvider>
    );
    fireEvent.click(getByText("See More"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
