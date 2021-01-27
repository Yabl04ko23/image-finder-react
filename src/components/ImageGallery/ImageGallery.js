import React from "react";
import PropTypes from "prop-types";

import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

function ImageGallery({ props, openModal }) {
  return (
    <ul className="ImageGallery">
      {props.map((item) => {
        return (
          <ImageGalleryItem
            id={item.id}
            webformatURL={item.webformatURL}
            largeImageURL={item.largeImageURL}
            type={item.type}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  props: PropTypes.array,
  openModal: PropTypes.func,
};
 
export default ImageGallery;
