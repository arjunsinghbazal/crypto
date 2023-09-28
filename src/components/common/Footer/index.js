import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Define the Footer component
function Footer() {
  // Function to scroll to the top of the page when the logo is clicked
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Render the Footer component
  return (
    <div className="footer">
      {/* Logo with an onClick event to scroll to the top when clicked */}
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      {/* Social media links */}
      <div className="social-links">
        <a href="https://facebook.com">
          <FacebookIcon className="social-link" /> {/* Facebook icon */}
        </a>
        <a href="mailto:avivashishta@gmail.com">
          <EmailIcon className="social-link" /> {/* Email icon */}
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon className="social-link" /> {/* Twitter icon */}
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon className="social-link" /> {/* Instagram icon */}
        </a>
      </div>
    </div>
  );
}

export default Footer; // Export the Footer component
