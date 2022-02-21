/**
 * ?ThemeToggle Test
 */

import { render, screen } from "@testing-library/react";

import ThemeToggle from "./ThemeToggle";
import { Provider } from "react-redux";
import store from "../../store";

describe("<ThemeToggle />", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });
});
