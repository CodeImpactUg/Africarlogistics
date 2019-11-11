import React, { Component } from "react";
import { Sugar } from "react-preloaders";

class AppLoader extends Component {
  render() {
    return (
      <div>
        <Sugar
          color={"rgb(4, 4, 53)"}
          time={3000}
          animation="slide-right"
          text="Africa"
        />
      </div>
    );
  }
}

export default AppLoader;
