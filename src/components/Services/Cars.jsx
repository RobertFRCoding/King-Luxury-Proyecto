import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { MdRoomService } from "react-icons/md";

export function Cars () {
    return (
<div className="container">
<div className="container text-end">
  <div className="dropdown">
    <button className=" shadow-sm bg-white text-dark btn btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <MdRoomService/> Services
    </button>
    <ul className="bg-light dropdown-menu dropdown-menu-end shadow-lg rounded" aria-labelledby="dropdownMenuButton1">
      <li><a className="text-center dropdown-item disabled" href="#" tabIndex="-1" aria-disabled="true">Cars</a></li>
      <li><a className="text-center dropdown-item" href="/Villas">Villas</a></li>
      <li><a className="text-center dropdown-item" href="/Yatchs">Yatchs</a></li>
      <li><a className="text-center dropdown-item" href="/Transfers">Transfers</a></li>
      <li><a className="text-center dropdown-item" href="/Chef">Private Chefs</a></li>
      <li><a className="text-center dropdown-item" href="/Jets">Jets</a></li>
      <li><a className="text-center dropdown-item" href="/Wellness">Wellness</a></li>
      <li><a className="text-center dropdown-item" href="/Events">Exclusive Events</a></li>
      <li><a className="text-center dropdown-item" href="/Activities">Outdoor Activities</a></li>
    </ul>
  </div>  
</div>
  <div className="m-3 text-dark d-flex justify-content-around">
    <h1>Luxury Cars</h1>
  </div>
  <div className="m-4 text-dark d-flex justify-content-between">
    <h2>Why rent with Us? </h2>
  </div>

  <div className="bg-light rounded shadow d-flex">
  <div>
  <ul className=" container">
  <div className="container">
    <h4>We work with the best and liable companies to provide the best services, we have a wide range of Luxury & Exotic Cars to your disposition.</h4>
    </div>
    </ul>
  </div>
  <div>
    <ul>
    <img src="./src/images/lambo-white .jpeg" width="500" className="shadow-lg mt-3 rounded img-fluid" alt="..."/> 
    </ul>
  </div>
</div>


  <div className="m-5 d-flex justify-content-center">
    <iframe width="890" height="500" src="./src/Videos/Lambo-logo.mp4" className="shadow-lg rounded m-5" allow="autoplay"></iframe> 
  
  </div>

  <div className="mt-5 text-dark text-center d-flex justify-content-center">
    <h1>Click here <Link to="/Enquires" className=" m-2 text-dark text-decoration-none"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/></Link> to see our wide range of <Link to="/Enquires" className="text-dark text-decoration-none"><em>Luxury Cars</em></Link>.</h1>
</div>


</div>
)}

export default Cars;