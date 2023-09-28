import axios from "axios";

// Define a function called getCoinPrices that takes 'id', 'days', and 'priceType' as parameters
export const getCoinPrices = (id, days, priceType) => {
  // Make an Axios GET request to retrieve historical coin prices
  const prices = axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`
    )
    .then((res) => {
      // Log the prices data to the console
      console.log("prices>> ", res.data.prices);
      // Return the specified price type data from the response
      return res.data[priceType];
    })
    .catch((error) => {
      // Log any errors to the console
      console.log(error);
    });

  // Return the Axios promise for further handling
  return prices;
};
