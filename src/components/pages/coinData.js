import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../common/Header";
import Loader from "../common/loader";
import { coinObject } from "../../functions/convertObject";
import { getCoinData } from "../../functions/getCoinData";
import { getCoinPrices } from "../../functions/getCoinPrices";
import List from "../Dashboard/List";
import CoinInfo from "../coin/CoinInfo";
import LiveChart from "../coin/LiveChart";
import { convertDate } from "../../functions/convertDate";
import SelectDays from "../coin/selectDays";
import { settingChartData } from "../../functions/settingChartData";
import TogglePriceType from "../coin/priceType";

const CoinPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    // This useEffect runs when the 'id' parameter in the URL changes.
    if (id) {
      // Calls the 'getData' function when the 'id' parameter is available.
      getData();
    }
  }, [id]);

  async function getData() {
    // Fetches coin data based on the 'id' parameter from the URL.
    const data = await getCoinData(id);
    if (data) {
      // Processes and sets the fetched coin data.
      coinObject(setCoinData, data);

      // Fetches coin prices based on 'days' and 'priceType'.
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        // Sets the chart data for rendering.
        settingChartData(setChartData, prices);

        // Indicates that data loading is complete.
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    // Handles changes in the selected number of days.
    setIsLoading(true);
    setDays(event.target.value);

    // Fetches coin prices with the updated 'days' parameter.
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices.length > 0) {
      // Sets chart data with the updated prices.
      settingChartData(setChartData, prices);

      // Indicates that data loading is complete.
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    try {
      // Handles changes in the selected price type (e.g., 'prices', 'market_caps').
      setIsLoading(true);
      setPriceType(newType);

      // Fetches coin prices with the updated 'priceType' parameter.
      const prices = await getCoinPrices(id, days, newType);
      if (prices.length > 0) {
        // Sets chart data with the updated prices.
        settingChartData(setChartData, prices);

        // Indicates that data loading is complete.
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error is > ", error);
      // Handles any errors that may occur during the price type change.
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Header />

      {isLoading ? (
        // Display a loading spinner when data is being fetched.
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            {/* Display coin information in a list format. */}
            <List coin={coinData} />
          </div>

          <div className="grey-wrapper">
            {/* Allows users to select a specific number of days for the price chart. */}
            <SelectDays days={days} handleDaysChange={handleDaysChange} />

            {/* Allows users to toggle between different price types (e.g., prices, market caps). */}
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />

            {/* Renders a live price chart based on selected options. */}
            <LiveChart chartData={chartData} priceType={priceType} />
          </div>

          {/* Display additional coin information. */}
          <CoinInfo heading={coinData.name} description={coinData.desc} />
        </>
      )}
    </div>
  );
};

export default CoinPage;
