import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID TvKFQlc6mH3fwDJSmDbmX8p8iM2wj7VutfmkIBa_HWI`
  }
});
