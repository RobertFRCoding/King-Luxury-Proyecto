import { Link } from "react-router-dom";
import { MdRoomService } from "react-icons/md";

export function Chef  () {
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
      <li><a className=" text-center dropdown-item disabled" href="/Chef" tabIndex="-1" aria-disabled="true">Private Chefs</a></li>
      <li><a className=" text-center dropdown-item" href="/Jets">Jets</a></li>
      <li><a className=" text-center dropdown-item" href="/Wellness">Wellness</a></li>
      <li><a className=" text-center dropdown-item" href="/Events">Exclusive Events</a></li>
      <li><a className=" text-center dropdown-item" href="/Activities">Outdoor Activities</a></li>
    </ul>
  </div>  
</div>
<div className="m-5 text-dark d-flex justify-content-around"><h1>Private Chefs</h1></div>
    <div className="m-5 text-dark d-flex justify-content-between"><h2>What Is This Service All About? </h2></div>
    <div className="d-flex">
    This exclusive service is just for the text and image to relocate
  <div>
  <ul className=" container">
  <div className="container">

</div>
    </ul>
  </div>
  <div>
    <ul>
    <img src="./src/images/Chef.webp" width="600" className="shadow-lg rounded img-fluid" alt="..."/> 
    </ul>
  </div>
</div>

    </div>
}
export default Chef;

//foto champagne
//<img src="/src/images/champagne-bottles.webp" alt="" width="300" height="400" className="align-content: flex-end "/>
