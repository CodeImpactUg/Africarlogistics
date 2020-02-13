import React, { Component, Fragment } from "react";
import AppHeaderSlider from "../AppHeaderSlider";
import TravelPlaces from "./TravelPlaces";
import ClientsReviews from "./ClientReviews";
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
