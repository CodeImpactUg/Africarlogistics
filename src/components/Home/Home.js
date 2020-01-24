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
        <AppHeaderSlider />
        <TravelPlaces />
        <ClientsReviews />
      </Fragment>
    );
  }
}

export default Home;
