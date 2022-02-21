/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * ?LocatorState Component
 */

import { useJsApiLoader } from "@react-google-maps/api";
import { FC, useContext, useEffect, useReducer } from "react";
import { createContext } from "react";

type LocatorState = {
  isLoaded: boolean;
  loadError: Error | undefined;
  map: any | google.maps.Map;
  setMap: (map: google.maps.Map) => void;
};

const initialState: LocatorState = {
  isLoaded: false,
  loadError: undefined,
  map: undefined,
  setMap: (map: google.maps.Map) => map,
};

const libraries: ("drawing" | "geometry" | "localContext" | "places" | "visualization")[] = [
  "places",
];

const LocatorContext = createContext(initialState);

const locatorReducer = (state: any, { type, payload }: { type: any; payload?: any }) => {
  switch (type) {
    case "isLoaded": {
      return {
        ...state,
        isLoaded: true,
      };
    }
    case "loadError": {
      return {
        ...state,
        loadError: payload,
      };
    }
    case "setMap": {
      console.log("setMap", payload);
      return {
        ...state,
        map: payload,
      };
    }
    default: {
      return state;
    }
  }
};

const LocatorProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(locatorReducer, initialState);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: `${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`,
    libraries,
  });

  useEffect(() => {
    if (isLoaded) {
      dispatch({ type: "isLoaded" });
    }

    if (loadError) {
      dispatch({ type: "loadError", payload: loadError });
    }
  }, [isLoaded, loadError]);

  const setMap = (map: google.maps.Map) => dispatch({ type: "setMap", payload: map });

  const contextValue = {
    ...state,
    setMap,
  };

  return <LocatorContext.Provider value={contextValue}>{children}</LocatorContext.Provider>;
};

const useLocator = () => useContext(LocatorContext);
export {
  LocatorProvider,
  useLocator,
  LocatorContext,
  locatorReducer,
  initialState,
  libraries,
  type LocatorState,
};
