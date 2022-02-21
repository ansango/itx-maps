import { markerProps } from "../../types/maps";
import { markerTypes } from "../types";

type action = {
  type: string;
  payload?: any;
};

const initialState: markerProps[] = [];

const markerReducer = (state = initialState, { type, payload }: action) => {
  switch (type) {
    case markerTypes.ADD_MARKER:
      return [...state, payload];
    case markerTypes.REMOVE_ALL_MARKERS:
      return [];
    case markerTypes.REMOVE_MARKER:
      return state.filter((marker) => marker.id !== payload);
    default:
      return state;
  }
};

export default markerReducer;
