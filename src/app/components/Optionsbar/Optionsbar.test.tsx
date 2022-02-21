/**
 * ?Optionsbar Test
 */

import { getByTestId, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Optionsbar from "./Optionsbar";
import { Provider } from "react-redux";

describe("<Optionsbar />", () => {
  it("should render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: true,
      },
      markers: [],
    });
    render(
      <Provider store={store}>
        <Optionsbar />
      </Provider>
    );
    expect(screen.getByTestId("optionsbar")).toHaveClass("absolute");
  });
  it("should render closed", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: false,
      },
      markers: [],
    });
    render(
      <Provider store={store}>
        <Optionsbar />
      </Provider>
    );
    expect(screen.queryByTestId("optionsbar")).toHaveClass("hidden");
  });
  it("should be closed on click", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: true,
      },
      markers: [],
    });
    const { container } = render(
      <Provider store={store}>
        <Optionsbar />
      </Provider>
    );
    const closebutton = getByTestId(container, "close-options");
    closebutton.click();
    expect(screen.queryByTestId("optionsbar")).toHaveClass("w-72");
  });
  it("should render markers", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: true,
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
        <Optionsbar />
      </Provider>
    );
    expect(screen.getByTestId("marker-1")).toBeInTheDocument();
  });
  it("should be remove marker on click", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: true,
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
        <Optionsbar />
      </Provider>
    );
    const marker = getByTestId(container, "remove-marker-1");
    marker.click();
    expect(screen.queryByTestId("marker-1")).toBeInTheDocument();
  });
  it("should be remove all markers on click", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        optionsBarOpen: true,
      },
      markers: [
        {
          id: "1",
          lat: "1",
          lng: "1",
          place: "1",
        },
        {
          id: "2",
          lat: "1",
          lng: "1",
          place: "1",
        },
      ],
    });
    const { container } = render(
      <Provider store={store}>
        <Optionsbar />
      </Provider>
    );
    const removeAll = getByTestId(container, "remove-all-markers");
    removeAll.click();
    expect(screen.queryByTestId("marker-1")).toBeInTheDocument();
    expect(screen.queryByTestId("marker-2")).toBeInTheDocument();
  });
});
