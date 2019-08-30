import rectangleReducer from "./rectangleReducer";
import galleryReducer from "./galleryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers<any>({
  gallery: galleryReducer,
  rectangle: rectangleReducer
});

export default rootReducer;
