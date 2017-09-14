import { createStore } from "redux";

import reducer from "./reducers/reducer";

const defaultState = {
  test: []
};
const store = createStore(reducer, defaultState);

export default store;
