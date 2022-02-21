/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ?Search Test
 */

import { mount } from "enzyme";

import Search from "./Search";
import { Provider } from "react-redux";
import store from "../../store";

jest.useFakeTimers("modern");

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

describe("<Search />", () => {
  beforeEach(() => {
    jest.clearAllTimers();
    global.google = getMaps();
    getPlacePredictions.mockClear();
  });

  it("should render", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Search map={{}} />
      </Provider>
    );
    expect(wrapper.find("input").length).toBe(1);
  });
});
