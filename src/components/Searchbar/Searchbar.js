import React, { Component } from "react";
import PropTypes from "prop-types";

class Searchbar extends Component {
  state = {
    inputValue: "",
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.setState({ inputValue: value });
  };

  handleSubmit = (evt) => {
    const { onSubmit } = this.props;
    const { inputValue } = this.state;
    evt.preventDefault();
    onSubmit(inputValue);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func
}

export default Searchbar;
