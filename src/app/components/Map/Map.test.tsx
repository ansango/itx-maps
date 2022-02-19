/**
 * ?Map Test
 */

import { render, screen } from "@testing-library/react";

import Map from "./Map";

describe("<Map />", () => {
  it("should render", () => {
    render(<Map />);
    expect(screen.getByText("Map")).toBeInTheDocument();
  })
})