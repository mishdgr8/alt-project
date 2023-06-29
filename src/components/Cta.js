import React from "react";
import "./Cta.css";
import Card from "./Card";



function Cta(props){
    return ( <div className="hero-section-cta">
 <Card 
       heading="Home decor items"
            paragraph="Find your new favorite pieces."
            btn="Shop Now"
/>

    </div>
       
    )
}

export default Cta;