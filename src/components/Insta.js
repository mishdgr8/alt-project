import React from "react";
import "./insta.css";


function Insta(){
    return (
<section>
<div className="container">

        <h3>
           Follow us on Insta
        </h3>
      <div className="row">
      <div className="card-deck"> 

      <div className="col-lg-4 col-md-6 img">
      <div className="card imgs">
    <img className="card-img-top" src={require("./images/kettle.png")} alt="Card"/>

  </div>
      </div>
 

 <div className="col-lg-4 col-md-6 img">
 <div className="card imgs">
    <img className="card-img-top" src={require("./images/nig.png")} alt="Cardca"/>

  </div>
      </div>
 

  <div className="col-lg-4 col-md-6 img">
  <div className="card imgs">
    <img className="card-img-top" src={require("./images/hands.avif")} alt="Card cp"/>

  </div>
        </div>
 


</div>
</div>
<p>@mina_studios</p>
</div>
   
</section>
    )
}

export default Insta;