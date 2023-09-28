import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import DarkMode from "../DarkMode/Darkmode";
import AnimatedCursor from "react-animated-cursor";

export default function TemporaryDrawer() {
  // State to control whether the drawer is open or closed
  const [open, setOpen] = useState(false);

  // Styling for the outer circle of the animated cursor
  const style = {
    borderRadius: '50%',
    border: "2px solid rgb(76, 76, 220)",
    backgroundColor: 'none'
  };

  return (
    <div>
      {/* IconButton to open the drawer when clicked */}
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      
      {/* The Drawer component */}
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
        <div className="drawer-div">
          {/* Links to various pages */}
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/compare">
            <p className="link">Compare</p>
          </Link>
          <Link to="/watchlist">
            <p className="link">Watchlist</p>
          </Link>
          <Link to="/events">
            <p className='link'>Events</p>
          </Link>
          <Link to="/dashboard">
            <p className="link">Dashboard</p>
          </Link>
          
          {/* Component for toggling dark mode */}
          <DarkMode />
          
          {/* AnimatedCursor component for custom cursor */}
          <AnimatedCursor
            innerSize={9}
            outerSize={29}
            color="76, 76, 220"
            zIndex={9999999999}
            outerAlpha={0.3}
            innerScale={0.7}
            outerScale={1.5}
            outerStyle={style}
          />
        </div>
      </Drawer>
    </div>
  );
}
