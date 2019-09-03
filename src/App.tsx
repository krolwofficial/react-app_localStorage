import React from "react";
import NavBar from "./components/NavBar";
import Router from "./Router";
import { useDispatch } from "react-redux";
import { GetLocalStorageAction } from "./types/store";

const App: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    localStorage.getItem("gallery") &&
      dispatch<GetLocalStorageAction>({
        type: "GET_LOCALSTORAGE",
        payload: JSON.parse(localStorage.getItem("gallery") || "{}")
      });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
};

export default App;
