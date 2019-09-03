import { AppActions } from "../types/store";
import { AppState } from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk, { ThunkMiddleware } from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>),
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
      compose
  )
);

export default store;
