import React, { useEffect, useState } from "react";
import Button from "../common/button";
import Header from "../common/Header";
import Tabs from "../Dashboard/Tabs";
import { get100coins } from "../../functions/get100coins";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Watchlist() {
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    if (watchlist) {
      getData();
    }
  }, [watchlist]);

  const getData = async () => {
    const allCoins = await get100coins();
    if (allCoins) {
      setCoins(allCoins.filter((coin) => watchlist.includes(coin.id)));
    }
  };

  return (
    <div>
      <Header />
      {watchlist?.length > 0 ? (
        <>
         <Tabs coins={coins} />
        <ToastContainer/>
        </>
       
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>
            Sorry, No Items In The Watchlist.
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem",
            }}
          >
            <a href="/dashboard">
              <Button text="Dashboard" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Watchlist;