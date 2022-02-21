/**
 * ?Optionsbar Test
 */

import { render, screen } from "@testing-library/react";

import Optionsbar from "./Optionsbar";
import { Provider } from "react-redux";
import store from "../../store";
describe("<Optionsbar />", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <Optionsbar />
      </Provider>
    );
    expect(screen.getByTestId("optionsbar")).toBeInTheDocument();
  });
});
