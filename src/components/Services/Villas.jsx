import { Link } from "react-router-dom";
import { MdRoomService } from "react-icons/md";

export function Villas () {
    return <div className="container">
        <div className="container text-end">
  <div className="dropdown">
    <button className=" shadow-sm bg-white text-dark btn btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <MdRoomService/> Services
    </button>
    <ul className="bg-light dropdown-menu dropdown-menu-end dropdown-menu-flush shadow rounded" aria-labelledby="dropdownMenuButton1">
      <li><a className=" text-center dropdown-item" href="/Cars">Cars</a></li>
      <li><a className=" text-center dropdown-item disabled" href="/Villas" tabIndex="-1" aria-disabled="true">Villas</a></li>
      <li><a className=" text-center dropdown-item" href="/Yatchs">Yatchs</a></li>
      <li><a className=" text-center dropdown-item" href="/Transfers">Transfers</a></li>
      <li><a className=" text-center dropdown-item" href="/Chef">Private Chefs</a></li>
      <li><a className=" text-center dropdown-item" href="/Jets">Jets</a></li>
      <li><a className=" text-center dropdown-item" href="/Wellness">Wellness</a></li>
      <li><a className=" text-center dropdown-item" href="/Events">Exclusive Events</a></li>
      <li><a className=" text-center dropdown-item" href="/Activities">Outdoor Activities</a></li>
    </ul>
  </div>  
</div>
<div className="m-4 text-dark d-flex justify-content-around"><h1>Villas</h1></div>
    <div className="m-5 text-dark d-flex justify-content-between"><h2>Why Rent with Us? </h2></div>
    <div className=" d-flex">
  <div>
  <ul className=" container">
  <div className="container">
    <h4>Our private transfers service is exclusive to your needs</h4>
    </div>
    </ul>
  </div>
  <div>
    <ul>
    <img src="./src/images/villa.webp" width="800" className="mb-4 shadow-lg rounded img-fluid" alt="..."/> 
    </ul>
  </div>
</div>

<div className="mt-5 shadow-lg rounded card text-center">
  <h5 className="shadow-lg card-header">The Exclusiest Services</h5>
  <div className="shadow-lg card-body">
    <h5 className="card-title">Check Out our Luxury Services</h5>
    <p className="card-text">Click below to see our wide range Services.</p>
    <a href="./Services" className="shadow-lg btn btn-warning">Woooow!</a>
  </div>
</div>

<div className="mt-5 shadow-lg card bg-dark text-white">
  <img src="./src/images/villa.webp" className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="shadow-lg rounded col-1 card-title">Ibiza</h5>
    <p className="shadow-lg rounded col-7 card-text">Click to view our Luxourious Villas in the amazing White Island.</p>
    <a href="./VillasCards" className="shadow-sm btn btn-warning">Ibiza Villas</a>
  </div>
</div>


<div className="mt-5 text-dark text-center d-flex justify-content-center">
    <h1>Click here <Link to="/Villas" className=" m-2 text-dark text-decoration-none"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/></Link> to see our wide range of <Link to="/Villas" className="text-dark text-decoration-none"><em>Luxury Villas</em></Link>.</h1>
</div>
   
    </div>
}
export default Villas;