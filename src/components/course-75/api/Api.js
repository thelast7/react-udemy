import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID c4745c8f63217540d9877547ec1272f3afd43b0bf49e21f00018b6ec653e55cd"
  }
});
