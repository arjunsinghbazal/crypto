import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./styles.css"
export default function TogglePriceType({priceType,handlePriceTypeChange}) {


  return (
  <div className="pricesType">
  <ToggleButtonGroup
    value={priceType}
    exclusive
    onChange={handlePriceTypeChange}
    sx={{
      "&.Mui-selected": {
        color: "var(--blue) !important",
      },
      borderColor: "var(--blue) !important",
      border: "unset !important",
      "& .MuiToggleButtonGroup-grouped": {
        border: "1px solid !important",
        borderColor: "unset",
        color: "var(--blue) !important",
      },
      "& .MuiToggleButton-standard": {
        color: "var(--blue) !important",
      },
    }}
  >
    <ToggleButton value="prices" className="price-btn">
      Price
    </ToggleButton>
    <ToggleButton value="market_caps" className="price-btn">
      market Cap
    </ToggleButton>
    <ToggleButton value="total_volumes" className="price-btn">
      Total Volume
    </ToggleButton>
  </ToggleButtonGroup></div>
  );
}