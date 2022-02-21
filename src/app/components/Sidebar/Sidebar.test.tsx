/**
 * ?Sidebar Test
 */

import { getByTestId, render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import Sidebar from "./Sidebar";
import { Provider } from "react-redux";

describe("<Sidebar />", () => {
  it("should render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        sidebarOpen: false,
      },
      markers: [],
    });
    const { container } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    const btn = getByTestId(container, "btn-sidebar-toggle");
    const btnOptions = getByTestId(container, "btn-sidebar-options");
    btn.click();
    btnOptions.click();
    expect(screen.getByTestId("btn-sidebar-toggle")).toHaveAttribute(
      "aria-label",
      "Toggle Sidebar"
    );
    expect(screen.getByTestId("btn-sidebar-options")).toHaveAttribute("aria-label", "Open Options");
  });
  it("should render with sidebarOpen true", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        sidebarOpen: true,
      },
      markers: [],
    });
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    expect(screen.getByTestId("sidebar")).toHaveClass(
      "w-64 absolute z-30 h-full px-3 py-4 overflow-y-auto rounded bg-white dark:bg-gray-800 dark:text-gray-200"
    );
  });
  it("should render with markersLength > 0", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        sidebarOpen: true,
      },
      markers: [
        {
          id: "1",
          name: "Test Marker",
          lat: 0,
          lng: 0,
          color: "red",
          draggable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    });
    render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
    expect(screen.getByTestId("sidebar")).toHaveClass(
      "w-64 absolute z-30 h-full px-3 py-4 overflow-y-auto rounded bg-white dark:bg-gray-800 dark:text-gray-200"
    );
  });
});
