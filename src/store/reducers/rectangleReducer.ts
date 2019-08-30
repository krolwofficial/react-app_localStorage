const initState = {
  width: 60,
  height: 60,
  background: "red",
  borderRadius: 5
};

const rectangleReducer = (state: any = initState, { type, payload }): void => {
  switch (type) {
    case "SET_WIDTH":
      return { ...state, width: payload };
    case "SET_HEIGHT":
      return { ...state, height: payload };
    case "SET_BACKGROUND":
      return { ...state, background: payload };
    case "SET_BRADIUS":
      return { ...state, borderRadius: payload };
    default:
      return state;
  }
};

export default rectangleReducer;
