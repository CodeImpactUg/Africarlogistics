import React, { Component, Fragment } from "react";
import AppLoader from "../components/AppLoader";
import AppHeader from "../components/AppHeader";
import AppHeaderSlider from "../components/AppHeaderSlider";
import TravelPlaces from "../components/TravelPlaces";
import ClientsReviews from "../components/ClientsReviews";
import Footer from "../components/Footer/Footer"

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppLoader />
        <AppHeader />
        <AppHeaderSlider />
        <TravelPlaces />
        <ClientsReviews />
        <Footer />
      </Fragment>
    );
  }
}

export default App;
