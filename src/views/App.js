import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../components/Home/Home";
import Contacts from "../components/Contacts/Contacts";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" exact component={Contacts} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
