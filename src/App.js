import "./App.css";
import React, { Component } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Spinner from "./components/Spinner/Spinner";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import imageApi from "./services/imageApi";

class App extends Component {
  state = {
    query: "",
    page: 1,
    images: [],
    isLoading: false,
    largeImageURL: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page, query } = this.state;
    if (prevState.query !== query) {
      this.fetchImages();
    }

    if (page !== prevState.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  getQuery = (value) => {
    this.setState({ query: value, page: 1, images: [] });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    imageApi
      .getFetch(query, page)
      .then((data) => {
        if (data.length > 0) {
          this.setState((prev) => ({
            isLoading: false,
            images: [...prev.images, ...data],
            page: prev.page + 1,
          }));
        }
      })
      .catch((error) => console.log(error));
  };

  openModal = (url) => {
    this.setState({ largeImageURL: url });
  };

  closeModal = () => {
    this.setState({ largeImageURL: null });
  };

  render() {
    const { isLoading, images, largeImageURL } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.getQuery} />
        <ImageGallery props={images} openModal={this.openModal} />
        {isLoading && <Spinner />}
        {images.length > 0 && <Button loadMore={this.fetchImages} />}
        {largeImageURL && <Modal url={largeImageURL} onClose={this.closeModal} />}
      </>
    );
  }
}

export default App;
