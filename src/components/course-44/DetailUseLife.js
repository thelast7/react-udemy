import React, { Component } from 'react'
import Detail from './Detail'

class DetailUseLife extends Component {
  state = { lat: null, errMessage: ""}
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      position=> this.setState({ lat: position.coords.latitude }),
      e => this.setState({ errMessage: e.message })
    )
  }

  render() {
    return (
      <div>
        {/* <Detail lat=/> */}
      </div>
    )
  }
}

export default DetailUseLife