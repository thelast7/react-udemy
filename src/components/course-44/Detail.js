import React, { Component } from "react";

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errMessage: "" };

    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude
        });
      },
      e => {
        this.setState({
          errMessage: e.message
        });
        console.log(e);
      }
    );
  }

  render() {
    if (this.state.errMessage && !this.state.lat) {
      return <div>Error : {this.state.errMessage}</div>;
    } else if (!this.state.errMessage && this.state.lat) {
      return <div>latitude : {this.state.lat}</div>;
    } else {
      return <div>Loading</div>;
    }
  }
}

export default Detail;
