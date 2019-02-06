import React, { Component } from "react";

class Search extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment container">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Cari Gambar</label>
            <input onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
