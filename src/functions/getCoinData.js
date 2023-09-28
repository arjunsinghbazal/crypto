import axios from "axios";

// Define a function called getCoinData that takes an 'id' parameter
export const getCoinData = (id) => {
  // Make an Axios GET request to retrieve coin data by its 'id'
  const myData = axios
    .get(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      // Return the data from the response
      return res.data;
    })
    .catch((error) => {
      // Log any errors to the console
      console.log(error);
    });

  // Return the Axios promise for further handling
  return myData;
};
