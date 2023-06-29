import React from "react";
import "./Products.css";


function Products(){
    return (
<section>
<div className="container">

        <h3>
            Our Bestsellers
        </h3>
      <div className="row">
      <div className="card-deck"> 

      <div className="col-lg-3 col-md-6">
      <div className="card">
    <img className="card-img-top" src={require("./images/pot1.png")} alt="Card"/>
    <div className="card-body">
      <h5 className="card-title">'Candy' Flowerpot</h5>
      <p className="card-text">$59.99</p>
    </div>
  </div>
      </div>
 

 <div className="col-lg-3 col-md-6">
 <div className="card">
    <img className="card-img-top" src={require("./images/pot2.png")} alt="Cardca"/>
    <div className="card-body">
      <h5 className="card-title">'Drop' Vase</h5>
      <p className="card-text">$49.99</p>
    </div>
  </div>
      </div>
 

  <div className="col-lg-3 col-md-6">
  <div className="card">
    <img className="card-img-top" src={require("./images/pot3.png")} alt="Card cp"/>
    <div className="card-body">
      <h5 className="card-title">'Wave' Vase</h5>
      <p className="card-text">$69.99</p>
    </div>
  </div>
        </div>
  

  <div className="col-lg-3 col-md-6">
  <div className="card">
    <img className="card-img-top" src={require("./images/pot4.png")} alt="Card  ap"/>
    <div className="card-body">
      <h5 className="card-title">'Sun' Vase</h5>
      <p className="card-text">$49.99</p>
    </div>
    </div>
        </div>
 


</div>
</div>
<button type="button" class="btn btn-buy btn-lg btn-outline-dark">Buy Now</button>
</div>
   
</section>
    )
}

export default Products;