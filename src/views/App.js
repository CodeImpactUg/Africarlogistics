import React, { Component, Fragment } from "react";
import AppLoader from "../components/AppLoader";
import AppHeader from "../components/AppHeader";
import AppHeaderSlider from "../components/AppHeaderSlider";
import TravelPlaces from "../components/TravelPlaces";


import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppLoader />
        <AppHeader />
        <AppHeaderSlider />
        <TravelPlaces />
      </Fragment>
    );
  }
}

export default App;
