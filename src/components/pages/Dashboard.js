import React, { useEffect, useState } from "react";
import Header from "../common/Header";
import Tabs from "../Dashboard/Tabs";
import axios from "axios";
import Search from "../Dashboard/Search";
import PagiNation from "../Dashboard/pagination";
import Loader from "../common/loader";
import BackToTop from "../common/BackTTop";
const Dashboard=()=>{
    const [coinData,setData]=useState([]);
    const [paginatedcoins,setpaginatedcoins]=useState([]);
    const [search,setsearch]=useState("");
    const [page, setPage] = React.useState(1);
    const [isLoading,setisLoading]=useState(true);
    const handleChange = (event, value) => {
      setPage(value);
      var previousIndex=(value-1)*10;
      setpaginatedcoins(coinData.slice(previousIndex,previousIndex+10))
    };
    const OnSearchChange=(e)=>{
setsearch(e.target.value);
console.log(search)
    }
    var filteredCoins = coinData.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.symbol.toLowerCase().includes(search.toLowerCase())
      );

    const shotData=()=>{
        axios.get(  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
.then((res)=>{
    console.log(res)
    setData(res.data);
    setpaginatedcoins(res.data.slice(0,10));
    setisLoading(false);
}).catch((err)=>{
    console.log(err)
    setisLoading(false)
})
    }
    useEffect(()=>{
shotData()
    },[])

    return(
       <><Header/>
       <BackToTop/> 
        {isLoading?(<Loader/>):(<div>
        <Search search={search} OnSearchChange={OnSearchChange}/>
        <Tabs coins={search?filteredCoins: paginatedcoins}/>
       {!search&& <PagiNation page={page} handleChange={handleChange}/>}
        </div>)}
       </>
    )
}

export default Dashboard;