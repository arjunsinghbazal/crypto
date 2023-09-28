import React, { useEffect, useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import BackToTop from '../common/BackTTop';
import Loader from '../common/loader';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import { fetchNewsData } from '../../functions/getEventsdata'; // Import the fetchNewsData function

const Event = () => {
  // State to store news data
  const [newsData, setNewsData] = useState([]);

  // State to manage loading state
  const [loading, setLoading] = useState(true); // Add a loading state
  const error="NO Events Found"

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call the fetchNewsData function from the imported module
        const data = await fetchNewsData();
        setNewsData(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        // You can handle the error here or in any way you prefer
        console.error(error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []); // This effect runs only once on component mount

  return (
    <div className="event-container">
      <Header />
      {loading ? ( 
        // Display a loader while data is being fetched
        <Loader /> 
      ) : (
        <>
          <BackToTop />
          <div className="news-list">
          
            {newsData ? newsData.map((article, index) => (
              // Render each news article as a clickable link
              <a href={article.url} className="news-item" key={index} target="_blank" rel="noopener noreferrer">
                <span><UpcomingIcon/></span>{article.title}
              </a>
            )):<h1>{error}</h1> }
          </div>
          
          <Footer />
        </>
      )}
    </div>
  );
};

export default Event;
