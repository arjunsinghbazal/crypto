import { toast } from "react-toastify";

// Define a function called removeItemToWatchlist that takes 'e', 'id', and 'setIsCoinAdded' as parameters
export const removeItemToWatchlist = (e, id, setIsCoinAdded) => {
  e.preventDefault();

  // Display a confirmation dialog to confirm removal
  if (window.confirm("Are you sure you want to remove this coin?")) {
    // Get the current watchlist from localStorage
    let watchlist = JSON.parse(localStorage.getItem("watchlist"));

    // Create a new list that excludes the specified 'id'
    const newList = watchlist.filter((coin) => coin !== id);

    // Set the 'isCoinAdded' state to false to indicate removal
    setIsCoinAdded(false);

    // Update the watchlist in localStorage with the new list
    localStorage.setItem("watchlist", JSON.stringify(newList));

    // Show a success toast message
    toast.success(
      `${id.substring(0, 1).toUpperCase() + id.substring(1)} - has been removed!`
    );

    // Reload the window (you might want to update this part)
    window.location.reload();
  } else {
    // Show an error toast message if removal is canceled
    toast.error(
      `${id.substring(0, 1).toUpperCase() + id.substring(1)} - could not be removed!`
    );

    // Set the 'isCoinAdded' state to true
    setIsCoinAdded(true);
  }
};
