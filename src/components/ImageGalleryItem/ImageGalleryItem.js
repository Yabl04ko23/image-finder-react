import React from "react";
import PropTypes from "prop-types";

function ImageGalleryItem({ webformatURL, id, type, openModal, largeImageURL }) {
  return (
    <li key={id} className="ImageGalleryItem">
      <img src={webformatURL} alt={type} onClick={() => openModal(largeImageURL)} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  id: PropTypes.number,
  largeImageURL: PropTypes.string,
  type: PropTypes.string,
  openModal: PropTypes.func,
};

export default ImageGalleryItem;
