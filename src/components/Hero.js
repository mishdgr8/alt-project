import React from "react";
import "./Hero.css";
import Card from "./Card";



function Hero(props){
    return (
        <div className="hero-section-hero">
 <Card 
        heading="Handmade ceramics"
        paragraph="Painted clay ceramics made with love."
        btn="Shop Now"
    />
        </div>
       


    )
}

export default Hero;