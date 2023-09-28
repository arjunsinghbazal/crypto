import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./styles.css"

// Define a functional component called PagiNation that takes 'page' and 'handleChange' props
export default function PagiNation({ page, handleChange }) {
  // Render the Pagination component
  return (
    <div className='pagination-component'>
      <Pagination
        count={10} // Total number of pages
        page={page} // Current active page
        onChange={(event, value) => handleChange(event, value)} // Handle page change
        sx={{
          color: "var(--white)",
          "& .Mui-selected": {
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
