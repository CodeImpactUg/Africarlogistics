import React, { Component, Fragment } from "react";
import AppLoader from "../AppLoader";
import AppHeader from "../AppHeader";
import AppHeaderSlider from "../AppHeaderSlider";
import TravelPlaces from "./TravelPlaces";
import ClientReviews from "./ClientReviews";
import Gallery from "./Gallery";

class Home extends Component {
  render() {
    return (
      <Fragment>
<<<<<<< HEAD
        <AppHeaderSlider />
        <TravelPlaces />
        <ClientsReviews />
=======
        <AppLoader />
        <AppHeader />
        <AppHeaderSlider />
        <TravelPlaces />
        <ClientReviews />
        <Gallery />
>>>>>>> feature gallery
      </Fragment>
    );
  }
}

export default Home;
