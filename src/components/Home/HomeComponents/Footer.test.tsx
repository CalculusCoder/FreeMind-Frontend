import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import { RouterContext } from "next/dist/shared/lib/router-context";
import React from "react";

describe("Footer", () => {
  test("renders correctly", () => {
    render(<Footer />);

    expect(screen.getByText("Privacy Policy")).toBeInTheDocument();
    expect(screen.getByText("Medical Disclaimer")).toBeInTheDocument();
    expect(screen.getByText("Credits")).toBeInTheDocument();
    expect(
      screen.getByText("FreeMind Recovery 2023. All Rights Reserved.")
    ).toBeInTheDocument();
  });

  test("renders social media links", () => {
    const { container } = render(<Footer />);

    const facebookIcon = container.querySelector(
      'a[href="https://www.facebook.com/people/FreeMind-Recovery/100093602744493/"]'
    );
    const youtubeIcon = container.querySelector(
      'a[href="https://youtube.com/@FreeMindRecovery"]'
    );

    expect(facebookIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });
});
