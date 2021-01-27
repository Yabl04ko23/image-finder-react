import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <>
        <button type="button" className="Button" onClick={this.props.loadMore}>
          Load More
        </button>
      </>
    );
  }
}

Button.propTypes = {
  loadMore: PropTypes.func,
};

export default Button;
