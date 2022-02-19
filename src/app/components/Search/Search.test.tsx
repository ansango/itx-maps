/**
 * ?Search Test
 */

import { render, screen } from "@testing-library/react";

import Search from "./Search";

describe("<Search />", () => {
  it("should render", () => {
    render(<Search />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  })
})