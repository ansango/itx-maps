/**
 * ?SidebarToggle Test
 */

import { render, screen } from "@testing-library/react";

import SidebarToggle from "./SidebarToggle";
import { Provider } from "react-redux";
import store from "../../store";

describe("<SidebarToggle />", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <SidebarToggle />
      </Provider>
    );
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
  });
});
