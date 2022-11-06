import React from "react";
import { Link } from "react-router-dom";
import {  BsStars } from "react-icons/bs";


export function Services () {
    return ( 
    <div className="m-4 container ">
      <div className="container d-flex justify-content-center">
        <iframe width="1075" height="605" src="./src/Videos/Full-movie1.mp4" className="shadow-lg rounded mt-4" allow="autoplay"></iframe> 
      </div>
  <div className="container ">
    <Link className = "shadow-sm rounded text-decoration-none m-5 text-dark d-flex justify-content-center" to="/Services"><h1>Our Wide Range of Luxury Services</h1></Link>
  </div>  
  <div className="container ">
<div className="d-flex justify-content-center">
  <div>
  <ul className=" container">
  <Link to ="/Cars">
      <img src="./src/images/lambo-white .jpeg" width="400" height="270" className=" d-md-block shadow rounded-left " alt="..."/> 
    </Link>
    </ul>
  </div>
  <div>
  <ul className=" container">
    <Link to ="/Villas">
    <img src="./src/images/villa.webp" width="400" height="270" className=" d-md-block shadow rounded-top " alt="..."/> 
    </Link>
    </ul>
  </div>
  <div>
  <ul className=" container">
      <Link to ="/Yatchs">
      <img src="./src/images/yatch.jpeg" width="400" height="270" className=" d-md-block shadow rounded-right " alt="..."/> 
      </Link>
    </ul>
  </div>
</div>
<div className=" d-flex justify-content-center">
  <div>
  <ul className=" container">
      <Link to ="/Chef">
      <img src="./src/images/chef.webp" width="400" height="270" className="d-md-block shadow rounded " alt="..."/> 
      </Link>
    </ul>
  </div>
  <div>
  <ul className=" container">
    <Link to ="/Transfers">
    <img src="./src/images/chauffeur.webp" width="400" height="270" className=" d-md-block shadow rounded " alt="..."/> 
    </Link>
    </ul>
  </div>
  <div>
    <ul className=" container">
    <Link to ="/Jets">
    <img src="./src/images/Jet.jpeg" width="400" height="270" className=" d-md-block shadow rounded " alt="..."/> 
    </Link>
    </ul>
  </div>
</div>

<div className=" d-flex justify-content-around">
  <div>
  <ul className=" container">
      <Link to ="/Events">
      <img src="./src/images/events.jpeg" width="400" height="270" className="d-md-block shadow rounded " alt="..."/> 
      </Link>
    </ul>
  </div>
  <div>
  <ul className=" container">
    <Link to ="/Wellness">
    <img src="./src/images/wellness.jpeg" width="400" height="270" className="d-md-block shadow rounded " alt="..."/> 
    </Link>
    </ul>
  </div>
  <div>
    <ul className=" container">
    <Link to ="/Activities">
    <img src="./src/images/activities.webp" width="400" height="270" className="d-md-block shadow rounded " alt="..."/> 
    </Link>
    </ul>
  </div>
</div>
<br/>

  <div className=" mt-5 text-dark text-center d-flex justify-content-center">
      <div className="container text-center">
        <em><h2><BsStars/>Our job is to make sure you'll get the best services, the best conditions at the <b>best prices<BsStars/></b>.</h2></em>
      </div>  
  </div>
</div>

</div>
)}

export default Services;