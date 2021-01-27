import React, { Component } from "react";
import PropTypes from "prop-types";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.props.onClose();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.removeListener);
  }

  removeListener = (evt) => {
    if (evt.key === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    const { url } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={url} alt="largeImage" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
