import React, { Component, Fragment } from "react";
import AppLoader from "../components/AppLoader";
import AppHeader from "../components/AppHeader";
import Footer from "../components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import About from '../components/About/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Fragment>
            <AppLoader />
            <AppHeader />
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Footer />
          </Fragment>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
