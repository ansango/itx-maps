/**
 * ?ThemeToggle Test
 */

import { getByTestId, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import ThemeToggle from "./ThemeToggle";
import { Provider } from "react-redux";

describe("<ThemeToggle />", () => {
  it("should render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        theme: "light",
      },
      markers: [],
    });
    const { container } = render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>
    );

    const btn = getByTestId(container, "btn-theme-toggle");
    btn.click();
    expect(screen.getByTestId("btn-theme-toggle")).toHaveAttribute("aria-label", "light");
  });
});
