import React from "react";
//import _ , { debounce } from "lodash";
import { RangeInputProps } from "../../../../types/components";

const RangeInput: React.FC<RangeInputProps> = ({ text, max, handleChange }) => (
  <div className="input-field col s12">
    <p>Select {text}: </p>
    <p className="range-field">
      <input
        className="form__input"
        type="range"
        min="0"
        max={max}
        defaultValue={"40"}
        //
        // onChange={({ target: { value } }) =>
        //   _.debounce(handleChange(value), 550)
        // }
        //
        onChange={({ target: { value } }) => handleChange(value)}
      />
    </p>
  </div>
);

export default RangeInput;
