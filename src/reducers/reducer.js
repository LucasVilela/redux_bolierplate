function reducer(state = [], action) {
  switch (action.type) {
    case "TEST_ACTION":
      console.log("TEST ACTION received on the reducer");
      break;
    default:
      return state;
  }
}

export default reducer;
