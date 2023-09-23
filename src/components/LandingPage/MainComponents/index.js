import React from "react";
import "./styles.css";
import Button from "../../common/button";
import phone from "../../images/IMG-20230919-WA0000__1_-removebg-preview.png";
import phoneback from "../../images/yk3rjrsplpfek7si2pkh.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Track crypto through a public API in real-time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
           <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={()=> console.log("btn clicked")} />
        </Link> 
        
      <Button text={"Share"} onClick={() => toast.error("This link is not working")} outlined={true} />
    
          </motion.div>
      </div>
      
      <div className="phone-container">
        <motion.img src={phone} alt="phone" className="iphone" initial={{ y: -20 }}
          animate={{ y: 20 }}
          transition={{
            duration: 2,
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
          }}/>
        <img src={phoneback} alt="phoneback" className="iphoneback" />
      </div><ToastContainer position="bottom-center"/>
    </div>
  );
}

export default MainComponent;
