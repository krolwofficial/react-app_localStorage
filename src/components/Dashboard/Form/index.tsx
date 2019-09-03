import React from "react";
import InputRange from "./InputRange";
import InputSelect from "./InputSelect";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RectangleProps, TRectangle } from "../../../types/components";
import uuid from "uuid/v4";
import {
  AddRectangleAction,
  SetWidthRectangle,
  SetHeightRectangle,
  SetBackgroundRectangle,
  SetBRadiusRectangle
} from "../../../types/store";

const Form: React.FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const rectangle = useSelector<RectangleProps, TRectangle>(
    state => state.rectangle
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): any => {
    e.preventDefault();
    dispatch<AddRectangleAction>({
      type: "ADD_RECTANGLE",
      payload: {
        id: uuid(),
        width: rectangle.width,
        height: rectangle.height,
        background: rectangle.background,
        borderRadius: rectangle.borderRadius
      }
    });
    history.push("/gallery");
  };

  return (
    <div className="col s12 white dashboard">
      <div className="container">
        <form onSubmit={e => handleSubmit(e)} className="form">
          <InputRange
            handleChange={val =>
              dispatch<SetWidthRectangle>({
                type: "SET_WIDTH",
                payload: val
              })
            }
            max={200}
            text={"width"}
          />
          <InputRange
            handleChange={val =>
              dispatch<SetHeightRectangle>({
                type: "SET_HEIGHT",
                payload: val
              })
            }
            max={200}
            text={"height"}
          />
          <InputSelect
            handleChange={val =>
              dispatch<SetBackgroundRectangle>({
                type: "SET_BACKGROUND",
                payload: val
              })
            }
          />
          <InputRange
            handleChange={val =>
              dispatch<SetBRadiusRectangle>({
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
