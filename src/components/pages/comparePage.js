import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import SelectCoins from "../compare/selectCoins";
import SelectDays from "../coin/selectDays";
import { coinObject } from "../../functions/convertObject";
import { getCoinData } from "../../functions/getCoinData";
import { getCoinPrices } from "../../functions/getCoinPrices";
import Loader from "../common/loader";
import List from "../Dashboard/List";
import CoinInfo from "../coin/CoinInfo";
import LiveChart from "../coin/LiveChart";
import TogglePriceType from "../coin/priceType";
import { settingChartData } from "../../functions/settingChartData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BackToTop from "../common/BackTTop";
const ComparePage = () => {
  // State to manage the first selected cryptocurrency
  const [crypto1, setCrypto1] = useState("bitcoin");

  // State to manage the second selected cryptocurrency
  const [crypto2, setCrypto2] = useState("ethereum");

  // State to store data of the first cryptocurrency
  const [crypto1Data, setCrypto1Data] = useState({});

  // State to store data of the second cryptocurrency
  const [crypto2Data, setCrypto2Data] = useState({});

  // State to manage loading state
  const [isLoading, setIsLoading] = useState(true);

  // State to manage the number of days fo data
  const [days, setDays] = useState(60);

  // State to manage the type of price data (e.g., prices, market caps)
  const [priceType, setPriceType] = useState("prices");

  // State to store chart data for both cryptocurrencies
  const [chartData, setChartData] = useState({});

  // Function to handle changes in the number of days
  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);

    // Fetch price data for both cryptocurrencies with the updated number of days
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);

    // Update the chart data
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  // Function to handle changes in the type of price data
  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);

    // Fetch price data for both cryptocurrencies with the updated price type
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);

    // Update the chart data
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  // Fetch initial data when the component mounts
  useEffect(() => {
    getData();
  }, []);

  // Function to fetch data for both selected cryptocurrencies
  async function getData() {
    setIsLoading(true);

    // Fetch data for the first cryptocurrency
    const data1 = await getCoinData(crypto1);
    if (data1) {
      // Fetch data for the second cryptocurrency
      const data2 = await getCoinData(crypto2);

      // Process and set data for both cryptocurrencies
      coinObject(setCrypto1Data, data1);

      if (data2) {
        coinObject(setCrypto2Data, data2);

        // Fetch price data for both cryptocurrencies
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);

        // Update the chart data
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  }

  // Function to handle changes in the selected cryptocurrencies
  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);

    if (isCoin2) {
      // Update the second selected cryptocurrency
      setCrypto2(event.target.value);

      // Fetch data for the second cryptocurrency
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data);

      // Fetch price data for both cryptocurrencies
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);

      if (prices1.length > 0 && prices2.length > 0) {
        //   settingChartData(setChartData, prices);
        console.log("both fetched", prices1, prices2);
        setIsLoading(false);
      }
    } else {
      // Update the first selected cryptocurrency
      setCrypto1(event.target.value);

      // Fetch data for the first cryptocurrency
      const data = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data);
    }
  };

  return (
    <div>
      {/* Header component */}
      <Header />
      <BackToTop/>
      {isLoading ? (
        // Loader component while data is loading
        <Loader />
      ) : (
        <>
          <div className="coins-days-flex">
          
            {/* SelectCoins component to choose cryptocurrencies */}
            <SelectCoins
              crypto1={crypto1}
              crypto2={crypto2}
              handleCoinChange={handleCoinChange}
            />

            {/* SelectDays component to choose the number of days */}
            <SelectDays
              days={days}
              handleDaysChange={handleDaysChange}
              noPTag={true}
              daysText={true}
            />
          </div>

          {/* List component for the first cryptocurrency */}
          <div
            className="grey-wrapper"
            style={{
              padding: "0rem .5rem",
              // Add your custom styling here
            }}
          >
            <List coin={crypto1Data} />
          </div>

          {/* List component for the second cryptocurrency */}
          <div
            className="grey-wrapper"
            style={{
              padding: "0rem .5rem",
              // Add your custom styling here
            }}
          >
            <List coin={crypto2Data} />
          </div>

          <div
            className="grey-wrapper"
            style={{
              // Add your custom styling here
            }}
          >
            {/* TogglePriceType component to choose price data type */}
            <TogglePriceType
              priceType={priceType}
              handlePriceTypeChange={handlePriceTypeChange}
            />

            {/* LiveChart component to display the chart */}
            <LiveChart
              chartData={chartData}
              priceType={priceType}
              multiAxis={true}
            />
          </div>

          {/* CoinInfo component for the first cryptocurrency */}
          <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc} />

          {/* CoinInfo component for the second cryptocurrency */}
          <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc} />
          <ToastContainer/>
        </>
      )}
    </div>
  );
};

export default ComparePage;
