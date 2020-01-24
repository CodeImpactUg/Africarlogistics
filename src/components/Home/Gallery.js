import React, { Component } from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./GalleryPhotos";
import "../../assets/css/bootstrap/css/bootstrap.min.css";
import "../../assets/css/media-queries.css";
import "../../views/App.css";

class GalleryImages extends Component {
  render() {
    return (
      <div className="placetop">
        <div className="section-title text-center">
          <h2>Gallery</h2>
          <div className="title-separator-outer ">
            <div className="title-separator bg-primary style-liner"></div>
          </div>
        </div>
        <Gallery photos={photos} />
      </div>
    );
  }
}

export default GalleryImages;
