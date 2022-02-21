import { uiProps } from "../../types/ui";
import { uiTypes } from "../types";

type action = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

const initialState: uiProps = {
  sidebarOpen: false,
  theme: "light",
  optionsBarOpen: false,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const uiReducer = (state = initialState, { type, payload }: action) => {
  switch (type) {
    case uiTypes.TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen,
      };
    case uiTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case uiTypes.OPEN_OPTIONS:
      return {
        ...state,
        optionsBarOpen: true,
      };
    case uiTypes.CLOSE_OPTIONS:
      return {
        ...state,
        optionsBarOpen: false,
      };

    default:
      return state;
  }
};

export default uiReducer;
