import React from "react";
import "./info.css";

function Info(){
    return (
        <section>
            <div className="container">
            
            <div className="card-deck cadr-deck">
  <div className="card">
    <img className="card-img-top" src={require("./images/pot1.png")} alt="Card"/>
    <div className="card-body body">
      <h5 className="card-title card-head">About Mina</h5>
      <p className="card-text text">Mina is a brand born out of a passion for ceramics.</p>
    </div>
    <button type="button" class="btn btn-btn btn-lg btn-outline-dark">Learn more</button>
  </div>
  <div className="card">
    <img className="card-img-top" src={require("./images/pot2.png")} alt="Cardca"/>
    <div className="card-body body">
      <h5 className="card-title card-head">Sustainability</h5>
      <p className="card-text text">Mina is an eco-friendly brand that cares about sustainability.</p>
    </div>
    <button type="button" class="btn btn-btn btn-lg btn-outline-dark">Learn more</button>
    </div>
    </div>

            </div>
        </section>
    )
}

export default  Info;