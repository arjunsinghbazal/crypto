import axios from "axios"
export const get100coins=()=>{
 const mCoins=   axios.get(  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
    .then((res)=>{
        console.log(res)
       return res.data;
    }).catch((err)=>{
        console.log(err)
        
    })
    return mCoins;
}