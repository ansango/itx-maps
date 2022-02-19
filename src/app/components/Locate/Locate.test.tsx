/**
 * ?Locate Test
 */

import { render, screen } from "@testing-library/react";

import Locate from "./Locate";

describe("<Locate />", () => {
  it("should render", () => {
    render(<Locate />);
    expect(screen.getByText("Locate")).toBeInTheDocument();
  })
})