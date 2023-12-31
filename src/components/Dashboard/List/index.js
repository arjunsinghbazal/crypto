import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { convertNumber } from "../../../functions/convertNumbers";
import { Tooltip } from "@mui/material";
import { saveItemToWatchlist } from "../../../functions/saveitemsWatchList";
import { removeItemToWatchlist } from "../../../functions/removeitemWatchList";
import { motion } from "framer-motion";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

// Define a functional component called List that takes a 'coin' prop
const List = ({ coin }) => {
  // Retrieve the watchlist from local storage
  const watchlist = JSON.parse(localStorage.getItem("watchlist"));

  // Initialize state for tracking whether the coin is added to the watchlist
  const [isCoinAdded, setIsCoinAdded] = React.useState(watchlist?.includes(coin.id));

  // Render the List component
  return (
    <Link to={`/coin/${coin.id}`}>
      {/* Using Framer Motion to animate the row */}
      <motion.tr className="list-row">
        {/* Coin Logo */}
        <Tooltip title="Coin Logo" placement="bottom-start">
          <td className="td-image">
            <img src={coin.image} alt={coin.name} className="coin-logo" />
          </td>
        </Tooltip>

        {/* Coin Info */}
        <Tooltip title="Coin Info" placement="bottom-start">
          <td>
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </td>
        </Tooltip>

        {/* Price Change in 24 Hours */}
        <Tooltip title="Price Change In 24Hrs" placement="bottom-start">
          {coin.price_change_percentage_24h > 0 ? (
            <td className="chip-flex">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>

              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </td>
          ) : (
            <td className="chip-flex">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)} %
              </div>

              <div className="icon-chip chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </td>
          )}
        </Tooltip>

        {/* Current Price */}
        <Tooltip title="Current Price">
          <td>
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </td>
        </Tooltip>

        {/* Total Volume */}
        <Tooltip title="Total Volume" placement="bottom-end">
          <td>
            <p className="total-volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        {/* Market Cap (Desktop) */}
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="desktop-td-mkt">
            <p className="total-volume td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </td>
        </Tooltip>

        {/* Market Cap (Mobile) */}
        <Tooltip title="Market Cap" placement="bottom-end">
          <td className="mobile-td-mkt">
            <p className="total-volume td-right-align">
              ${convertNumber(coin.market_cap)}
            </p>
          </td>
        </Tooltip>

        {/* Watchlist */}
        <Tooltip title="Watchlist" placement="bottom-end">
          <td
            className={`watchlist-icon ${
              coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
            }`}
            onClick={(e) => {
              if (isCoinAdded) {
                // Remove the coin from the watchlist
                removeItemToWatchlist(e, coin.id, setIsCoinAdded);
              } else {
                // Add the coin to the watchlist
                setIsCoinAdded(true);
                saveItemToWatchlist(e, coin.id);
              }
            }}
          >
            {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
          </td>
        </Tooltip>
      </motion.tr>
    </Link>
  );
};

export default List; // Export the List component
