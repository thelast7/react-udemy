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
    return (
      <div>
        <div>latitude: {this.state.lat}</div>
        <div>error: {this.state.errMessage}</div>
      </div>
    );
  }
}

export default Detail;
