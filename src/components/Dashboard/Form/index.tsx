import React from "react";
import InputRange from "./InputRange";
import InputSelect from "./InputSelect";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import uuid from "uuid/v4";

const Form: React.FC<any> = ({ history }) => {
  const dispatch = useDispatch();
  const rectangle = useSelector<any, any>(state => state.rectangle);
  const gallery = useSelector<any, any>(state => state.gallery);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch({
      type: "ADD_RECTANGLE",
      payload: {
        id: uuid(),
        width: rectangle.width,
        height: rectangle.height,
        background: rectangle.background,
        borderRadius: rectangle.borderRadius
      }
    });
    localStorage.setItem("gallery", JSON.stringify(gallery));
    history.push("/gallery");
  };

  return (
    <div className="col s12 white dashboard">
      <div className="container">
        <form onSubmit={e => handleSubmit(e)} className="form">
          <InputRange
            handleChange={val =>
              dispatch({
                type: "SET_WIDTH",
                payload: val
              })
            }
            storeVariable={"width"}
            max={200}
            text={"width"}
          />
          <InputRange
            handleChange={val =>
              dispatch({
                type: "SET_HEIGHT",
                payload: val
              })
            }
            max={200}
            text={"height"}
          />
          <InputSelect
            handleChange={val =>
              dispatch({
                type: "SET_BACKGROUND",
                payload: val
              })
            }
          />
          <InputRange
            handleChange={val =>
              dispatch({
                type: "SET_BRADIUS",
                payload: val
              })
            }
            max={50}
            text={"border radius"}
          />
          <input
            type="submit"
            className=" form__input btn btn-med red"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default withRouter(Form);
