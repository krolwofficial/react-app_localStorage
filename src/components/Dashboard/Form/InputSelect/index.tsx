import React, { useEffect } from "react";
import M from "materialize-css";
import { SelectInputProps } from "../../../../types/components";

const SelectInput: React.FC<SelectInputProps> = ({ handleChange }) => {
  useEffect(() => {
    // init the MaterializeCSS <select> styling
    let elem = document.querySelector("select");
    M.FormSelect.init(elem);
  }, []);

  return (
    <div className="input-field col s12">
      <p>Select color: </p>
      <select
        onChange={({ target: { value } }) => handleChange(value)}
        defaultValue={"red"}
      >
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
        <option value="teal">Teal</option>
        <option value="aqua">Aqua</option>
        <option value="blue">Blue</option>
        <option value="black">Black</option>
        <option value="gray">Gray</option>
      </select>
    </div>
  );
};

export default SelectInput;
