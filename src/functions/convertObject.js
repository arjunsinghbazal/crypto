// Define a function called coinObject that takes two parameters: 'setState' and 'data'
export const coinObject = (setState, data) => {
    // Update the state using 'setState' with properties extracted from 'data'
    setState({
      id: data.id,
      name: data.name,
      Symbol: data.Symbol,
      image: data.image.large,
      desc: data.description.en,
      price_change_percentage_24h: data.market_data.price_change_percentage_24h,
      total_volume: data.market_data.total_volume.usd,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
    });
  };
  