import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Tabs from "../Dashboard/Tabs";
import Search from "../Dashboard/Search";
import PagiNation from "../Dashboard/pagination";
import Loader from "../common/loader";
import BackToTop from "../common/BackTTop";
import { get100coins } from "../../functions/get100coins";
import Footer from '../common/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  // State to store the coin data
  const [coinData, setData] = useState([]);
  
  // State to store the paginated coin data
  const [paginatedcoins, setpaginatedcoins] = useState([]);
  
  // State to store the user's search input
  const [search, setsearch] = useState("");
  
  // State to manage the current page of pagination
  const [page, setPage] = React.useState(1);
  
  // State to manage loading state
  const [isLoading, setisLoading] = useState(true);

  // Function to handle page change in pagination
  const handleChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setpaginatedcoins(coinData.slice(previousIndex, previousIndex + 10));
  };

  // Function to handle search input change
  const OnSearchChange = (e) => {
    setsearch(e.target.value);
  };

  // Filter the coins based on the user's search input
  var filteredCoins = coinData.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.symbol.toLowerCase().includes(search.toLowerCase())
  );

  // Function to fetch initial data
  const shotData = async () => {
    const myCoins = await get100coins();
    if (myCoins) {
      setData(myCoins);
      setpaginatedcoins(myCoins.slice(0, 10));
      setisLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    shotData();
  }, []);

  return (
    <>
      <Header />
      <BackToTop />
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {/* Search component */}
          <Search search={search} OnSearchChange={OnSearchChange} />
          
          {/* Tabs component with filtered or paginated coins */}
          <Tabs coins={search ? filteredCoins : paginatedcoins} />
          <ToastContainer />
          
          {/* Pagination component (displayed when not searching) */}
          {!search && <PagiNation page={page} handleChange={handleChange} />}
        </div>
      )}
      <Footer />
    </>
  );
}

export default Dashboard;
