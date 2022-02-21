import { uiTypes } from "../types";

export const toggleSideBar = () => ({
  type: uiTypes.TOGGLE_SIDEBAR,
});

export const toggleTheme = () => ({
  type: uiTypes.TOGGLE_THEME,
});

export const openOptions = () => ({
  type: uiTypes.OPEN_OPTIONS,
});

export const closeOptions = () => ({
  type: uiTypes.CLOSE_OPTIONS,
});
