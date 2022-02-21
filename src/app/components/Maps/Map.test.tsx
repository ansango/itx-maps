/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ?Map Test
 */

import configureStore from "redux-mock-store";
import { mount } from "enzyme";
import Maps from "./Maps";
import { Provider } from "react-redux";
import ThemeToggle from "../ThemeToggle";

jest.mock("@react-google-maps/api", () => {
  return {
    withGoogleMap: (Component: any) => Component,
    withScriptjs: (Component: any) => Component,
    Polyline: (props: any) => <div {...props} />,
    Marker: (props: any) => <div {...props} />,
    GoogleMap: (props: any) => {
      return (
        <div>
          <div className="mock-google-maps" data-testid="google-map">
            {props.children}
          </div>
        </div>
      );
    },
  };
});

describe("<Map />", () => {
  it("should render", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        theme: "light",
      },
      markers: [],
    });

    const wrapper = mount(
      <Provider store={store}>
        <ThemeToggle />
        <Maps />
      </Provider>
    );

    expect(wrapper.find('[data-testid="google-map-light"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="google-map-dark"]').exists()).toBe(false);
  });
  it("should render dark theme", () => {
    const mockStore = configureStore();
    const store = mockStore({
      ui: {
        theme: "dark",
      },
      markers: [],
    });

    const wrapper = mount(
      <Provider store={store}>
        <ThemeToggle />
        <Maps />
      </Provider>
    );

    expect(wrapper.find('[data-testid="google-map-light"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="google-map-dark"]').exists()).toBe(true);
  });
});
