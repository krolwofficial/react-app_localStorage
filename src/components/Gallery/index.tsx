import React from "react";
import Rectangle from "./Rectangle";
import { useSelector } from "react-redux";
import { IGalleryState, TRectangle } from "../../types/components";

const Gallery: React.FC = () => {
  const gallery = useSelector<IGalleryState, TRectangle[]>(
    state => state.gallery
  );

  return (
    <div className="row page">
      <div className="col s12">
        <div className="container white">
          {gallery.map((rectangle, key) => (
            <Rectangle rectangle={rectangle} key={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
