
# Crypto Tracker 


CryptoTracker is the tracker you always needed. Compare different crypto currencies, look at their graphs - prices, total volumes, market cap, etc. Search from the top 100 Crypto currencies in real time and add them to your watchlist aswell.

## API Reference

#### Get all coins

 "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

### get coin data
"https://api.coingecko.com/api/v3/coins/${id}"

### get prices
"https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily"

### get events
'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa'





## key Features

- Light/dark mode toggle
- Live previews
- Fullscreen mode
- Cross platform

## Features
#### Initial Setup 
###### Custom scroll Bar
###### Custom selection.
###### Disabling Image dragging + Folder Structure and code organisation.
#### Landing page -
###### Header - Mui Drawer.
###### Text Stroke Hover animation - landing page.
###### Framer Motion - The animation for phone and entrance animation for text.
#### Dashboard page -
###### Mui Tab component - for dashboard tabs (custom themed)

###### ToLocaleString() - adds commas to numbers and ToFixed(2) - adds 2 decimal places

###### Converting numbers - custom function

###### Search functionality - accomplished using .filter()

#### Pagination Mui - 
###### Slicing the data in correspondence to the page number

Wrote a js function to take us to the top of the page.

#### Coin page -
###### Used router params to get the id of the bitcoin

###### Used react-chartjs-2 to make the graphs.

###### Made a function to get the array of dates in x number of days.

###### Used Mui Select to get the number of days, and had a function to get prices accordingly.

###### Mui Toggle buttons for getting prices,mkt_cap,volume values.

###### Used dangerouslySetInnerHTML attribute to render a string having html tags in it.

###### Made a Loading component to make sure all the data was there, before rendering the components.

###### Made a custom styled object to style Mui Components + Read More or Read Less functionality.

#### Compare Page -
###### For the 2 simultaneous graphs, we made 2 y-axis and 2 datasets.
###### Select component mui, having the list of 100 coins.
###### Also since comparison of the same coin makes no sense, we made sure that both selects have every coin other than the coin selected.
#### Light Mode Dark Mode -

######  Using local storage and data-theme variable in css
###### Updating root variables according to the theme.
#### Watchlist-
###### localstorage - adding coins in an array
###### localstorage - removing as well.
###### useEffect -> watchlist page
#### Other features -
###### Using RWebShare npm package.

###### Mui icons


###### Added toasts - react-toastify for every action.
## Demo



https://crypto-steel.vercel.app/