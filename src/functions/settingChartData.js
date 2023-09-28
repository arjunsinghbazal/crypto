import { convertDate } from "./convertDate";

// Define a function called settingChartData that takes 'setChartData', 'prices1', and 'prices2' as parameters
export const settingChartData = (setChartData, prices1, prices2) => {
  try {
    if (prices2) {
      // If prices2 is available, set chart data for two cryptocurrencies
      setChartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            label: "Crypto 1",
            data: prices1.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisID: 'crypto1' // Assign yAxisID to distinguish between y-axes
          },
          {
            label: "Crypto 2",
            data: prices2.map((price) => price[1]),
            borderColor: "#61c96f",
            borderWidth: 2,
            fill: false,
            tension: 0.25,
            pointRadius: 0,
            yAxisID: 'crypto2' // Assign yAxisID to distinguish between y-axes
          },
        ],
      });
    } else {
      // If prices2 is not available, set chart data for a single cryptocurrency
      setChartData({
        labels: prices1.map((price) => convertDate(price[0])),
        datasets: [
          {
            data: prices1.map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 2,
            fill: true,
            tension: 0.25,
            backgroundColor: "rgba(58,128,233,0.1)",
            pointRadius: 0,
            yAxisID: 'crypto1' // Assign yAxisID to distinguish between y-axes
          },
        ],
      });
    }
  } catch (error) {
    // Handle any errors and log them
    console.log(error);
  }
};
