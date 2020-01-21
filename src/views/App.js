import React, { Component, Fragment } from "react";
import About from '../components/About/About'
// import AppLoader from "../components/AppLoader";
// import AppHeader from "../components/AppHeader";
// import AppHeaderSlider from "../components/AppHeaderSlider";
// import TravelPlaces from "../components/TravelPlaces";

class App extends Component {
  render() {
    return (
      <Fragment>
        <About />
        {/* <AppLoader />
        <AppHeader />
        <AppHeaderSlider />
        <TravelPlaces /> */}
      </Fragment>
    );
  }
}

export default App;
