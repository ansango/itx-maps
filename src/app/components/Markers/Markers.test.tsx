/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ?Markers Test
 */

import { getByTestId, render, screen } from "@testing-library/react";

import configureStore from "redux-mock-store";
import Markers from "./Markers";
import { Provider } from "react-redux";

jest.mock("@react-google-maps/api", () => {
  return {
    Marker: (props: any) => <div {...props} />,
    InfoWindow: (props: any) => <div {...props} onClick={props.onCloseClick} />,
  };
});

describe("<Markers />", () => {
  it("should render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        theme: "light",
      },
      markers: [
        {
          id: "1",
          lat: "1",
          lng: "1",
          place: "1",
        },
      ],
    });
    render(
      <Provider store={store}>
        <Markers />
      </Provider>
    );
    expect(screen.getByTestId("marker-1")).toBeInTheDocument();
  });
  it("should render info window", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        theme: "light",
      },
      markers: [
        {
          id: "1",
          lat: "1",
          lng: "1",
          place: "1",
        },
      ],
    });
    const { container } = render(
      <Provider store={store}>
        <Markers />
      </Provider>
    );
    const marker = getByTestId(container, "marker-1");
    marker.click();
    expect(getByTestId(container, "info-window-1")).toBeInTheDocument();
    const infoWindow = getByTestId(container, "info-window-1");
    expect(infoWindow).toHaveTextContent("1");
    infoWindow.click();
  });
});
