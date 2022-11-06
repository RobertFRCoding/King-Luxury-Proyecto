import { BsStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Collaborate } from "./Collaborate";

export function About  () {
    return <div className="container">
<div className="shadow-sm rounded m-5 text-dark d-flex justify-content-around"><h1>About Us</h1></div>
<div className="m-5 text-dark d-flex justify-content-center">
    <h3>We are a VIP concierge company working especialized in Ibiza Island and Europe expanding aswell all over the world. 
    <p/>   We're encharge of organizing your vacations with a wide range of VIP Luxury Services, we want to answer to all your needs and we'll just want you to worry about having fun and that you wont lose not even a second of it. 
    <p/>We also want you to know that we are free of charge of any services at all,  we work with the best and liable companies. </h3>    </div>
    <p/> 
<div className=" shadow-sm rounded m-5 text-dark text-center d-flex justify-content-center">
    <em><h2><BsStars/>Our job is to make sure you'll get the best services, the best conditions at the <b>best prices<BsStars/></b>.</h2></em>
</div>
<div className=" text-center d-flex justify-content-center">
    <iframe width="1075" height="605" src="./src/Videos/Full-movie2.mp4" className="shadow-lg rounded mt-4" allow="autoplay"></iframe> 
</div>
<div className="m-5 text-dark text-center d-flex justify-content-center">
    <h1>Click in <Link to="/Collaborate" className=" m-4 text-dark text-decoration-none"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/></Link> if you'd like to know more about how to <Link to="/Collaborate" className="text-dark text-decoration-none"><em>Collaborate</em></Link> with us.</h1>
</div>

</div>
}
export default About;

//<em>Our job is to make sure you'll get the best services, the best conditions at the best prices.</em></h4>
