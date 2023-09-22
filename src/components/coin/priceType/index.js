import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./styles.css"
export default function TogglePriceType({priceType,handlePriceChange}) {


  return (<div className='pricesType'>
    <ToggleButtonGroup
      value={priceType}
      exclusive
      onChange={handlePriceChange}
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
      <ToggleButton value="prices" className='price-btn'>Price</ToggleButton>
      <ToggleButton value="market-caps" className='price_btn'>Market Cap</ToggleButton>
      <ToggleButton value="total-volumes" className='price_btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup></div>
  );
}