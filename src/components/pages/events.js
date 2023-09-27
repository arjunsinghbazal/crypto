import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../common/Header';
import Footer from '../common/Footer';
// import BackToTop from '../common/BackTTop';
import Loader from '../common/loader';
import UpcomingIcon from '@mui/icons-material/Upcoming';

const Event = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    const apiUrl = 'https://min-api.cryptocompare.com/data/v2/news/?lang=EN&apiKey=cb61428f173bd9dfe46ab55e0eed23fa04c30251eb044150e3e5731135e975fa';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNewsData(response.data.Data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="event-container">
      <Header />
      {loading ? ( 
        <Loader /> 
      ) : (
        <>
          {/* <BackToTop /> */}
          <div className="news-list">
            {newsData.map((article, index) => (
              <a href={article.url} className="news-item" key={index} target="_blank" rel="noopener noreferrer">
                <span><UpcomingIcon/></span>{article.title}
              </a>
            ))}
          </div>
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Event;
