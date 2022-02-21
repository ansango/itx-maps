import React from "react";
import "@testing-library/jest-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({ adapter: new Adapter() });



global.React = React;

global.google = {
  maps: {
    LatLngBounds: () => ({
      extend: () => {},
    }),
    MapTypeId: {
      ROADMAP: "rdmap",
      SATELLITE: "stllte",
    },
    ControlPosition: {
      BOTTOM_CENTER: "BC",
      BOTTOM_LEFT: "BL",
      BOTTOM_RIGHT: "BR",
      LEFT_BOTTOM: "LB",
      LEFT_CENTER: "LC",
      LEFT_TOP: "LT",
      RIGHT_BOTTOM: "RB",
      RIGHT_CENTER: "RC",
      RIGHT_TOP: "RT",
      TOP_CENTER: "TC",
      TOP_LEFT: "TL",
      TOP_RIGHT: "TR",
    },
    Size: function (w, h) {},
    Data: class {
      setStyle() {}
      addListener() {}
      setMap() {}
    },
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
};
