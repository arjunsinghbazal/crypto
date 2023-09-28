import axios from "axios";

// Define a function called get100coins
export const get100coins = () => {
  // Make an Axios GET request to retrieve the top 100 coins data
  const mCoins = axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
    )
    .then((res) => {
      // Log the response data to the console
      console.log(res);
      // Return the data from the response
      return res.data;
    })
    .catch((err) => {
      // Log any errors to the console
      console.log(err);
    });

  // Return the Axios promise for further handling
  return mCoins;
};
