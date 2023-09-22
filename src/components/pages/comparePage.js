import React,{useState,useEffect}from "react";
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
const ComparePage=()=>{
    const [crypto1, setCrypto1] = useState("bitcoin");
    const [crypto2, setCrypto2] = useState("ethereum");
    const [crypto1Data, setCrypto1Data] = useState({});
    const [crypto2Data, setCrypto2Data] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [days, setDays] = useState(60);
    const [priceType, setPriceType] = useState("prices");
    const [chartData, setChartData] = useState({});
  
    async function handleDaysChange(event) {
      setIsLoading(true);
  
      setDays(event.target.value);
      const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
      const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
  
    }
  
    const handlePriceTypeChange = async (event, newType) => {
      setIsLoading(true);
      setPriceType(newType);
      const prices1 = await getCoinPrices(crypto1, days, newType);
      const prices2 = await getCoinPrices(crypto2, days, newType);
      settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      setIsLoading(true);
      const data1 = await getCoinData(crypto1);
      if (data1) {
        const data2 = await getCoinData(crypto2);
        coinObject(setCrypto1Data, data1);
        if (data2) {
          coinObject(setCrypto2Data, data2);
          const prices1 = await getCoinPrices(crypto1, days, priceType);
          const prices2 = await getCoinPrices(crypto2, days, priceType);
          settingChartData(setChartData, prices1, prices2);
          console.log("both fetched", prices1, prices2);
          setIsLoading(false);
        }
      }
    }
  
    const handleCoinChange = async (event, isCoin2) => {
      setIsLoading(true);
      if (isCoin2) {
        setCrypto2(event.target.value);
        const data = await getCoinData(event.target.value);
        coinObject(setCrypto2Data, data);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
  
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        if (prices1.length > 0 && prices2.length > 0) {
          //   settingChartData(setChartData, prices);
          console.log("both fetched", prices1, prices2);
          setIsLoading(false);
        }
      } else {
        setCrypto1(event.target.value);
        const data = await getCoinData(event.target.value);
        coinObject(setCrypto1Data, data);
        setIsLoading(false);
      }
    };
    return (
      <div>
        <Header />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <div className="coins-days-flex">
              <SelectCoins
                crypto1={crypto1}
                crypto2={crypto2}
                handleCoinChange={handleCoinChange}
              />
              <SelectDays
                days={days}
                handleDaysChange={handleDaysChange}
                noPTag={true}
                daysText={true}
              />
            </div>
            <div className="grey-wrapper" style={{ padding: "0rem .5rem" }}>
              <List coin={crypto1Data} />
            </div>
            <div className="grey-wrapper" style={{ padding: "0rem .5rem" }}>
              <List coin={crypto2Data} />
            </div>
            <div className="grey-wrapper">
            <TogglePriceType
                priceType={priceType}
                handlePriceTypeChange={handlePriceTypeChange}
              />
              <LiveChart
                chartData={chartData}
                priceType={priceType}
                multiAxis={true}
              />
            </div>
  
            <CoinInfo heading={crypto1Data.name} description={crypto1Data.desc} />
            <CoinInfo heading={crypto2Data.name} description={crypto2Data.desc} />
          </>
        )}
      </div>
    )
    
  }
  
  export default ComparePage;