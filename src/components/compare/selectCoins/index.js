import React, { useEffect, useState } from "react";
import "./styles.css"

import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { get100coins } from "../../../functions/get100coins";

export default function SelectCoins({crypto1,crypto2,handleCoinChange}) {
  
    const [allCoins, setAllCoins] = useState([]);

    const styles = {
      height: "2.5rem",
      color: "var(--white)",
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "var(--white)",
      },
      "& .MuiSvgIcon-root": {
        color: "var(--white)",
      },
      "&:hover": {
        "& fieldset": {
          borderColor: "#3a80e9",
        },
      },
    };
  
    useEffect(() => {
      getData();
    }, []);
  
    async function getData() {
      const myCoins = await get100coins();
      setAllCoins(myCoins);
    }
  
    return (
      <div className="coins-flex">
        <p>Crypto 1</p>
        <div className="select-box">
          <Select
            sx={styles}
            value={crypto1}
            label="Crypto 1"
            onChange={(event) => handleCoinChange(event, false)}
          >
            {allCoins
              .filter((item) => item.id != crypto2)
              .map((coin, i) => (
                <MenuItem value={coin.id} key={i}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </div>
  
        <p>Crypto 2</p>
        <div className="select-box">
          <Select
            sx={styles}
            value={crypto2}
            label="Crypto 2"
            onChange={(event) => handleCoinChange(event, true)}
          >
            {allCoins
              .filter((item) => item.id !== crypto1)
              .map((coin, i) => (
                <MenuItem value={coin.id} key={i}>
                  {coin.name}
                </MenuItem>
              ))}
          </Select>
        </div>
      </div>
    );
}