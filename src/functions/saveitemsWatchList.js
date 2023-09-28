import { toast } from "react-toastify";

// Define a function called saveItemToWatchlist that takes 'e' and 'id' as parameters
export const saveItemToWatchlist = (e, id) => {
  e.preventDefault();

  // Get the current watchlist from localStorage
  let watchlist = JSON.parse(localStorage.getItem("watchlist"));

  if (watchlist) {
    // Check if the 'id' is not already in the watchlist
    if (!watchlist.includes(id)) {
      // Add the 'id' to the watchlist
      watchlist.push(id);

      // Show a success toast message
      toast.success(
        `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
      );
    } else {
      // Show an error toast message if 'id' is already in the watchlist
      toast.error(
        `${id.substring(0, 1).toUpperCase() + id.substring(1)} - is already added to the watchlist!`
      );
    }
  } else {
    // If the watchlist doesn't exist, create a new one with the 'id'
    watchlist = [id];

    // Show a success toast message
    toast.success(
      `${id.substring(0, 1).toUpperCase() + id.substring(1)} - added to the watchlist`
    );
  }

  // Update the watchlist in localStorage
  localStorage.setItem("watchlist", JSON.stringify(watchlist));
};
