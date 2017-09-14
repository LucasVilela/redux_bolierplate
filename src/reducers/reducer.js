function reducer(state = [], action) {
  switch (action.type) {
    case "TEST_ACTION":
      return [...state, action.payload.name];
    default:
      return state;
  }
}

export default reducer;
