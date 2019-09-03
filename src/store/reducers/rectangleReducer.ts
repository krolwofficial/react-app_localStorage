import { TRectangleActions } from "../../types/store";
import { TRectangleStyle } from "../../types/components";

const initState: TRectangleStyle = {
  width: "40",
  height: "40",
  background: "red",
  borderRadius: "40"
};

const rectangleReducer = (
  state = initState,
  { type, payload }: TRectangleActions
): TRectangleStyle => {
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
