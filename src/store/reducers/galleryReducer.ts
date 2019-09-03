import { TGalleryActions } from "../../types/store";
import { TRectangle } from "../../types/components";

const initState: TRectangle[] = [
  {
    id: "1",
    width: "60",
    height: "60",
    background: "red",
    borderRadius: "5"
  }
];

const galleryReducer = (
  state = initState,
  { type, payload }: TGalleryActions
): TRectangle | TRectangle[] | (TRectangle | TRectangle[])[] => {
  switch (type) {
    case "ADD_RECTANGLE":
      localStorage.setItem("gallery", JSON.stringify([...state, payload]));
      return [...state, payload];
    case "REMOVE_RECTANGLE":
      localStorage.setItem("gallery", JSON.stringify(payload));
      return payload;
    case "GET_LOCALSTORAGE":
      return payload;
    default:
      return state;
  }
};

export default galleryReducer;
