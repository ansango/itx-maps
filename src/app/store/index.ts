import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { markerReducer, uiReducer } from "./reducers";

const reducers = combineReducers({
  markers: markerReducer,
  ui: uiReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
