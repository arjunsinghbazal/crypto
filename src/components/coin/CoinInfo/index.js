import React, { useState } from "react";
import "./styles.css"

const CoinInfo=({heading,description})=>{
    const shortDesc =
    description.slice(0, 350) + "<span style='color:var(--grey)'> Read More...</span>";
  const longDesc =
    description + "<span style='color:var(--grey)'> Read Less...</span>";
    const [sort,setsort]=useState(false);
    return(
<>
    <div className="grey-wrapper">
    <h2 className="coin-info-heading">{heading}</h2>
      {description.length > 350 ? (
        <p
          onClick={() => setsort(!sort)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: !sort ? shortDesc : longDesc }}
        />
      ) : (
        <p dangerouslySetInnerHTML={{ __html: description }} />
      )}
    </div>
</>
    )
}

export default CoinInfo;