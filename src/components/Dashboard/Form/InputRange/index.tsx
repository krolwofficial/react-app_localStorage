import React from "react";
//import { debounce } from "lodash";
//import _ from "lodash";

const RangeInput: any = ({ text, max, handleChange }) => (
  <div className="input-field col s12">
    <p>Select {text}: </p>
    <p className="range-field">
      <input
        className="form__input"
        type="range"
        min="0"
        max={max}
        // onChange={({ target: { value } }) =>
        //   _.debounce(handleChange(value), 550)
        // }
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </p>
  </div>
);

export default RangeInput;
