// Define a function called convertDate that takes a 'number' parameter
export const convertDate = (number) => {
    // Create a new Date object from the 'number' (assumed to be a timestamp)
    var myDate = new Date(number);
  
    // Get the day of the month and month (adding 1 to month as it is zero-based)
    return myDate.getDate() + "/" + (myDate.getMonth() + 1);
  };
  