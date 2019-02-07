import React from "react";
import axios from "axios";
import Search from "./Search";

class Index extends React.Component {
  async onSubmitIt(text) {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: text },
      headers: {
        Authorization:
          "Client-ID c4745c8f63217540d9877547ec1272f3afd43b0bf49e21f00018b6ec653e55cd"
      }
    });
    console.log(response.data.results);
    // .then(response => {
    //   console.log(response.data.results);
    // });
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.onSubmitIt} />
      </div>
    );
  }
}

export default Index;
