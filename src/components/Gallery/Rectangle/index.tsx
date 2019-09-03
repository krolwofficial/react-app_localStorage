import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  RectangleProps,
  IGalleryState,
  TRectangle
} from "../../../types/components";
import { RemoveRectangleAction } from "../../../types/store";

const Rectangle: React.FC<RectangleProps> = ({ rectangle }) => {
  const dispatch = useDispatch();
  const gallery = useSelector<IGalleryState, TRectangle[]>(
    state => state.gallery
  );

  const styles = {
    div: {
      width: `${rectangle.width}px`,
      height: `${rectangle.height}px`,
      borderRadius: `${rectangle.borderRadius}%`,
      background: rectangle.background
    }
  };

  return (
    <div className="col s12 m6 xl4">
      <div className="card">
        <div className="card-image">
          <div style={styles.div} />
        </div>
        <div className="card-content">
          <ul>
            <li>rectangle's width = {rectangle.width} px</li>
            <li>rectangle's height = {rectangle.height} px</li>
            <li>rectangle's color = {rectangle.background}</li>
            <li>rectangle's border radius = {rectangle.borderRadius} %</li>
          </ul>
        </div>
        <div className="card-action">
          <span
            className="red-text card-link "
            onClick={() =>
              dispatch<RemoveRectangleAction>({
                type: "REMOVE_RECTANGLE",
                payload: gallery.filter(({ id }) => rectangle.id !== id)
              })
            }
          >
            REMOVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default Rectangle;
