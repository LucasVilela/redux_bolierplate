import { createStore } from "redux";

import reducer from "./reducers/reducer";

const defaultState = {
  test: {
    data: 1,
    text: "lorem"
  }
};
const store = createStore(reducer, defaultState);

export default store;
