import React, { Component } from "react";

class Search extends Component {
  // onInputChange(e) {
  //   console.log(e.target.value);
  // }
  state = { text: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
  };

  render() {
    return (
      <div className="ui segment container">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Cari Gambar</label>
            {/* <input onChange={this.onInputChange} /> */}
            {/* <input onChange={e => console.log(e.target.value)} /> //sama aja kaya diatas             */}
            <input
              type="text"
              value={this.state.text}
              onChange={e => this.setState({ text: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
