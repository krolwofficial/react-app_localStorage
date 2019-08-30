import React from "react";
import DynamicRectangle from "./DynamicRectangle";
import DynamicText from "./DynamicText";

const Preview: React.FC = () => (
  <div className="col s12 white dashboard preview">
    <div className="container">
      <p className="preview__title">Preview:</p>
      <DynamicText />
    </div>
    <div className="preview__box">
      <DynamicRectangle />
    </div>
  </div>
);

export default Preview;
