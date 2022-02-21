/**
 * ?Sidebar Test
 */

import { render, screen } from "@testing-library/react";

import Sidebar from "./Sidebar";
import { Provider } from "react-redux";
import store from "../../store";
describe("<Sidebar />", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
});
