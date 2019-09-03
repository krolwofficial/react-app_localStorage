import React from "react";
import { useSelector } from "react-redux";
import { RectangleProps, TRectangle } from "../../../../types/components";

const DynamicRectangle: React.FC = () => {
  const rectangle = useSelector<RectangleProps, TRectangle>(
    state => state.rectangle
  );

  const styles = {
    div: {
      width: `${rectangle.width}px`,
      height: `${rectangle.height}px`,
      borderRadius: `${rectangle.borderRadius}%`,
      background: rectangle.background
    }
  };

  return <div style={styles.div} />;
};

export default DynamicRectangle;
