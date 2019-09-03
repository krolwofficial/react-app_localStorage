import React from "react";
import { useSelector } from "react-redux";
import { RectangleProps, TRectangle } from "../../../../types/components";

const PreviewText: React.FC = () => {
  const rectangle = useSelector<RectangleProps, TRectangle>(
    state => state.rectangle
  );

  return (
    <ul>
      <li>rectangle's width = {rectangle.width} px</li>
      <li>rectangle's height = {rectangle.height} px</li>
      <li>rectangle's color = {rectangle.background}</li>
      <li>rectangle's border radius = {rectangle.borderRadius} %</li>
    </ul>
  );
};

export default PreviewText;
