/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ?Map Test
 */

import { render, screen } from "@testing-library/react";

import Maps from "./Maps";
import { Provider } from "react-redux";
import store from "../../store";

jest.mock("@react-google-maps/api", () => {
  return {
    withGoogleMap: (Component: any) => Component,
    withScriptjs: (Component: any) => Component,
    Polyline: (props: any) => <div {...props} />,
    Marker: (props: any) => <div {...props} />,
    GoogleMap: (props: any) => (
      <div>
        <div className="mock-google-maps" data-testid="google-map">
          {props.children}
        </div>
      </div>
    ),
  };
});

describe("<Map />", () => {
  it("should render", () => {
    render(
      <Provider store={store}>
        <Maps />
      </Provider>
    );
    expect(screen.getByTestId("google-map")).toBeInTheDocument();
  });
});
