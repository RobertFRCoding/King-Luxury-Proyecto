import { Link } from "react-router-dom";
import { MdRoomService } from "react-icons/md";

export function Wellness  () {
    return <div className="container">
        <div className="container text-end">
  <div className="dropdown">
    <button className=" shadow-sm bg-white text-dark btn btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <MdRoomService/> Services
    </button>
    <ul className="bg-light dropdown-menu dropdown-menu-end dropdown-menu-flush shadow rounded" aria-labelledby="dropdownMenuButton1">
      <li><a className=" text-center dropdown-item" href="/Cars">Cars</a></li>
      <li><a className=" text-center dropdown-item" href="/Villas">Villas</a></li>
      <li><a className=" text-center dropdown-item" href="/Yatchs">Yatchs</a></li>
      <li><a className=" text-center dropdown-item" href="/Transfers">Transfers</a></li>
      <li><a className=" text-center dropdown-item" href="/Chef">Private Chefs</a></li>
      <li><a className=" text-center dropdown-item" href="/Jets">Jets</a></li>
      <li><a className=" text-center dropdown-item disabled" href="/Wellness" tabIndex="-1" aria-disabled="true">Wellness</a></li>
      <li><a className=" text-center dropdown-item" href="/Events">Exclusive Events</a></li>
      <li><a className=" text-center dropdown-item" href="/Activities">Outdoor Activities</a></li>
    </ul>
  </div>  
</div>
<div className="m-4 text-dark d-flex justify-content-around"><h1>Private Beauty Services</h1></div>
    <div className="m-5 text-dark d-flex justify-content-between"><h2>Your Wellness Is Important To Us </h2></div>
    <div className="d-flex">
    This exclusive service is 
  <div>
  <ul className=" container">
  <div className="container">

</div>
    </ul>
  </div>
  <div>
    <ul>
    <img src="./src/images/wellness.jpeg" width="600" className="shadow-lg rounded img-fluid" alt="..."/> 
    </ul>
  </div>
</div>
    
    </div>
}
export default Wellness;
