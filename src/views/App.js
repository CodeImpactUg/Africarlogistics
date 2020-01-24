<<<<<<< HEAD
import React, { Component, Fragment } from "react";
import AppLoader from "../components/AppLoader";
import AppHeader from "../components/AppHeader";
import AppHeaderSlider from "../components/AppHeaderSlider";
import TravelPlaces from "../components/TravelPlaces";
import ClientsReviews from "../components/ClientsReviews";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";

=======
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
>>>>>>> feature gallery

class App extends Component {
  render() {
    return (
<<<<<<< HEAD

      <BrowserRouter>
        <Switch>
        <Fragment>
        <AppLoader />
        <AppHeader />
        <Route path="/" exact component={Home} />
        <Footer />
        </Fragment>
=======
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
>>>>>>> feature gallery
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
