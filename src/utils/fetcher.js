const axios = require("axios");

const fetchDataFromApi = async (
  url,
  options = {
    method: "GET",
  }
) => {
  if (options.method === "GET") {
    const response = await axios.get(url);

    if (response.status >= 200 && response.status < 300) {
      return response.data;
    }
  }
};

module.exports = {
  fetchDataFromApi,
};
