import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Collaborate } from "./Collaborate";

export function About  () {
    return (
<div className="container">
    <div className="shadow-sm rounded m-5 text-dark d-flex justify-content-around">
        <h1>About Us</h1>
    </div>
    <div className="m-5 text-dark d-flex justify-content-center">
        <h4>We are a VIP concierge company working especialized in Ibiza Island and Europe expanding aswell all over the world. 
        <p/>We're encharge of organizing your vacations with a wide range of VIP Luxury Services, we want to answer to all your needs and we'll just want you to worry about having fun and that you wont lose not even a second of it. 
        <p/>We also want you to know that we are free of charge of any services at all,  we work with the best and liable companies. </h4>
    </div>
    <p/> 
    <div className="rounded m-5 text-dark text-center d-flex justify-content-center">
        <em><h2><BsStars/>Our job is to make sure you'll get the best services, the best conditions at the <b>best prices<BsStars/></b>.</h2></em>
    </div>
    <div className=" text-center d-flex justify-content-center">
        <iframe width="1050" height="515" src="./src/Videos/Full-movie2.mp4" className="shadow-lg rounded mt-4" allow="autoplay"></iframe> 
    </div>

<div className="mt-5 container marketing">
    <div className="ms-5 d-flex justify-content-center row">
        <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2>Heading</h2>
    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div className="col-lg-4">
    <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2>Heading</h2>
    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
</div>
</div>


</div>
)}
export default About;

//<em>Our job is to make sure you'll get the best services, the best conditions at the best prices.</em></h4>
