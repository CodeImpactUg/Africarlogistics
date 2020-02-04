import React, { Component, Fragment } from "react";
import AppLoader from "../AppLoader";
import AppHeader from "../AppHeader";
import ContactForm from "./ContactsForm";

class Contacts extends Component {
  render() {
    return (
      <Fragment>
        <AppLoader />
        <AppHeader />
        <ContactForm />
      </Fragment>
    );
  }
}

export default Contacts;
