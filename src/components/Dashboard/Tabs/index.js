import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid'; // Import the Grid component
import List from '../List'; // Import the List component
import "./styles.css"

// Define a functional component called Tabs that takes 'coins' as a prop
export default function Tabs({ coins }) {
  const [value, setValue] = React.useState('Grid'); // Initialize the active tab value to 'Grid'

  // Handle tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Style for the tabs
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalized",
  };

  // Render the Tabs component
  return (
    <div>
      <TabContext value={value}>
        <div>
          {/* TabList for switching between Grid and List */}
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="Grid" sx={style} /> {/* Grid tab */}
            <Tab label="List" value="List" sx={style} /> {/* List tab */}
          </TabList>
        </div>
        <TabPanel value="Grid">
          {/* Display a grid of coins */}
          <div className="grid-flex">
            {coins.map((item, i) => {
              return (<Grid coin={item} key={i} />);
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          {/* Display a table list of coins */}
          <table className="list-table">
            {coins.map((item, i) => {
              return (<List coin={item} key={i} />);
            })}
          </table>
        </TabPanel>
      </TabContext>
    </div>
  );
}
