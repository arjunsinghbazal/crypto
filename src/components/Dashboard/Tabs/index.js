import * as React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from '../Grid';
import  List  from '../List';
import "./styles.css"
export default function Tabs({coins}) {
  const [value, setValue] = React.useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "var(--white)",
    width: "50vw",
    fontSize: "1.2rem",
    fontWeight: 600,
    fontFamily: "Inter",
    textTransform: "capitalized",
  };
  return (
    <div>
      <TabContext value={value}>
        <div >
          <TabList onChange={handleChange} variant='fullWidth'>
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>
        <TabPanel value="Grid">
            <div className="grid-flex">{coins.map((item,i)=>{return(<Grid coin={item} key={i}/>)})}</div>
        </TabPanel>
        <TabPanel value="List">
        <table className="list-table">
        {coins.map((item,i)=>{return(<List coin={item} key={i}/>)})}</table>
        </TabPanel>
      </TabContext>
    </div>
  );
}