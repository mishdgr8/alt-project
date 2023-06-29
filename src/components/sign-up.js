import React from "react";
import "./signup.css";




function Signup(){
    return ( <div  className="hero-section-sign">
   <h2 className="foot">Sign-up for our newsletter</h2>
   <form>
  <div class="form">
    <input type="email" className="email"  placeholder="enter your email"/>
  </div>
  
  <button type="submit" class="btn btn-light">Submit</button>
</form>

 
    </div>
    
       
    )
}

export default Signup;