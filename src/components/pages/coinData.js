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
    if (id) {
      getData()}
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        // settingChartData(setChartData, prices);
      settingChartData(setChartData,prices)
        setIsLoading(false);
      }
    }
  }


  const handleDaysChange =async (event) => {
    setIsLoading(true)
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value,priceType);
    if (prices.length > 0){
      settingChartData(setChartData,prices);
      setIsLoading(false)
    }
  };
  return (
    <div>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
            <List coin={coinData} />
          </div>
          <div className="grey-wrapper">
          <SelectDays days={days} handleDaysChange={handleDaysChange}/>
          <TogglePriceType/>
          <LiveChart chartData={chartData}/></div>
          <CoinInfo heading={coinData.name} description={coinData.desc}/>
         
        </>
      )}
    </div>
  );
};

export default CoinPage;