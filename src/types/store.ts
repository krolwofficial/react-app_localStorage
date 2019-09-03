import { TRectangle } from "./components";

export const ADD_RECTANGLE = "ADD_RECTANGLE";
export const REMOVE_RECTANGLE = "REMOVE_RECTANGLE";
export const GET_LOCALSTORAGE = "GET_LOCALSTORAGE";
export const SET_WIDTH = "SET_WIDTH";
export const SET_HEIGHT = "SET_HEIGHT";
export const SET_BACKGROUND = "SET_BACKGROUND";
export const SET_BRADIUS = "SET_BRADIUS";

// gallery
export interface AddRectangleAction {
  type: typeof ADD_RECTANGLE;
  payload: TRectangle;
}

export interface RemoveRectangleAction {
  type: typeof REMOVE_RECTANGLE;
  payload: TRectangle[];
}

export interface GetLocalStorageAction {
  type: typeof GET_LOCALSTORAGE;
  payload: TRectangle[];
}

export type TGalleryActions =
  | AddRectangleAction
  | RemoveRectangleAction
  | GetLocalStorageAction;

// rectangle
export interface SetWidthRectangle {
  type: typeof SET_WIDTH;
  payload: string;
}

export interface SetHeightRectangle {
  type: typeof SET_HEIGHT;
  payload: string;
}

export interface SetBackgroundRectangle {
  type: typeof SET_BACKGROUND;
  payload: string;
}

export interface SetBRadiusRectangle {
  type: typeof SET_BRADIUS;
  payload: string;
}

export type TRectangleActions =
  | SetWidthRectangle
  | SetHeightRectangle
  | SetBackgroundRectangle
  | SetBRadiusRectangle;

// all
export type AppActions = TGalleryActions | TRectangleActions;
