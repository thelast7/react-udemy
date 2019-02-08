import React from "react";
import Api from "./api/Api";
import Search from "./Search";
import ImageList from "./ImageList";

class Index extends React.Component {
  state = { images: [] };

  onSubmitIt = async text => {
    const response = await Api.get("/search/photos", {
      params: { query: text }
    });
    // .then(response => {
    //   console.log(response.data.results);
    // });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.onSubmitIt} />
        total : {this.state.images.length}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default Index;
