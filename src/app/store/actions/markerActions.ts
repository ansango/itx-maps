import { markerProps } from "../../types/maps";
import { markerTypes } from "../types";

export const addMarker = (marker: markerProps) => ({
  type: markerTypes.ADD_MARKER,
  payload: marker,
});

export const removeMarker = (id: string) => ({
  type: markerTypes.REMOVE_MARKER,
  payload: id,
});

export const removeAllMarkers = () => ({
  type: markerTypes.REMOVE_ALL_MARKERS,
});
