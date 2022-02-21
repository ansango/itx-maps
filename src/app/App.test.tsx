import { render } from "@testing-library/react";
import { mount } from "enzyme";
import App from ".";
import { LocatorContext } from "./components/LocatorProvider/LocatorProvider";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/Search";

jest.mock("@react-google-maps/api", () => {
  return {
    withGoogleMap: (Component: any) => Component,
    withScriptjs: (Component: any) => Component,
    Polyline: (props: any) => <div {...props} />,
    Marker: (props: any) => <div {...props} />,
    GoogleMap: (props: any) => (
      <div>
        <div className="mock-google-maps">{props.children}</div>
      </div>
    ),
  };
});

const ok = "OK";
const error = "ERROR";
const data = [{ place_id: "0109" }];

const getPlacePredictions = jest.fn();
const getMaps = (type = "success", d = data): any => ({
  maps: {
    places: {
      AutocompleteService: class {
        getPlacePredictions =
          type === "opts"
            ? getPlacePredictions
            : (_: any, cb: (dataArg: any, status: string) => void) => {
                setTimeout(() => {
                  cb(type === "success" ? d : null, type === "success" ? ok : error);
                }, 500);
              };
      },
    },
  },
});

describe("App", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    global.google = getMaps();
    getPlacePredictions.mockClear();
  });

  it("renders without crashing", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("shouldn't render Search", () => {
    const wrapper = mount(
      <Provider store={store}>
        <LocatorContext.Provider
          value={{
            isLoaded: false,
            loadError: undefined,
            map: undefined,
            setMap: () => console.log(),
          }}
        >
          <App />
        </LocatorContext.Provider>
      </Provider>
    );
    expect(wrapper.find(Search)).toHaveLength(0);
  });
  it("should render Search", () => {
    const wrapper = mount(
      <Provider store={store}>
        <LocatorContext.Provider
          value={{
            isLoaded: true,
            loadError: undefined,
            map: {},
            setMap: () => console.log(),
          }}
        >
          <App />
        </LocatorContext.Provider>
      </Provider>
    );
    expect(wrapper.find(Search)).toHaveLength(1);
  });
  it("should render error", () => {
    const wrapper = mount(
      <Provider store={store}>
        <LocatorContext.Provider
          value={{
            isLoaded: true,
            loadError: {
              message: "error",
              name: "error",
            },
            map: undefined,
            setMap: () => console.log(),
          }}
        >
          <App />
        </LocatorContext.Provider>
      </Provider>
    );
    expect(wrapper.find(Search)).toHaveLength(0);
  });
});
