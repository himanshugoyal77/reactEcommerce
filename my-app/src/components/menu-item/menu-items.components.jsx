import React from "react";
import Directory from "../dirctory/dirctory.component";
import "./menu-items.styles.scss"

const MenuItem = ({title, imageUrl, size})=>  (
    <div  className={`${size}  menu-item`}
    >
        <div className="backgroung-image" style={
            {
                backgroundImage: `url(${imageUrl})`
            }
        }></div>
    <div className="content">
     <h1 className="title">{title.toUpperCase()}</h1>
     <span className="subtitle">SHOP NOW</span>
     </div> 
 </div>

);

export default MenuItem;