/**
 * ?SidebarToggle Test
 */

import { getByTestId, render, screen } from "@testing-library/react";

import SidebarToggle from "./SidebarToggle";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";

describe("<SidebarToggle />", () => {
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
        <SidebarToggle />
      </Provider>
    );

    const btn = getByTestId(container, "btn-sidebar-toggle");
    btn.click();
    expect(screen.getByTestId("btn-sidebar-toggle")).toHaveAttribute("aria-label", "Toggle Sidebar");
  });
});
