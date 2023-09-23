import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Home from './components/pages/Home';
import Dashboard from './components/pages/Dashboard';
import CoinPage from './components/pages/coinData';
import ComparePage from './components/pages/comparePage';
import Watchlist from './components/pages/watchList';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>
  <Route path="/coin/:id" element={<CoinPage/>} />
  <Route path="/compare" element={<ComparePage/>} />
  <Route path="/watchlist" element={<Watchlist/>} />
  
</Routes>

  </BrowserRouter>
  );
}

export default App;
