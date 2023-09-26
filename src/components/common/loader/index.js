import React from "react";
import { CircularProgress } from "@mui/material";
import "./styles.css"
import AnimatedCursor from "react-animated-cursor";
const style={ 
    borderRadius:'50%',border:"2px solid rgb(58, 128, 233)",
    backgroundColor: 'none'
    }
const Loader=()=>{
    return(
        <div className="loader-container">
            <CircularProgress/>
            <AnimatedCursor  innerSize={9}
      outerSize={29}
      color="255,255,255"
      zIndex={9999999999}
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={1.5}
      outerStyle={style}
      
/>
        </div>
    )
}
export default Loader;