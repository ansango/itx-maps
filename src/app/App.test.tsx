import { screen, render } from "@testing-library/react";

import App from ".";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("should render the title", () => {
    render(<App />);
    expect(screen.getByText("Hello World")).toBeInTheDocument();
  });
});
