import React from "react";
import { BsFillGeoFill } from "react-icons/bs";

export function VillasCards () {
    return (
<div className="container">
        
    <div className="m-4 text-dark d-flex justify-content-around">
            <h1><BsFillGeoFill/>Ibiza Island</h1>
    </div>
    <div className="m-5 text-dark d-flex justify-content-between">
        <h2>Our Amazing Villas located in Ibiza Island. </h2>
    </div>
    <div className="text container"></div>
    <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="shadow-lg rounded card">
      <img src="./src/images/villa-Anna.png" height="260" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Villa Anna</h5>
        <p className="card-text">Villa Anna Ibiza is a luxury 6 bedroom villa located in the prestigious area of Cap Martinet with amazing sea views.</p>
        <a href="./VillaAnna" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="shadow-lg rounded card">
      <img src="./src/images/villa-EsCubells.webp" height="260" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Es Cubells</h5>
        <p className="card-text">This Villa is a unique property with pure white colors, settled on the edge of a glorious cliff in the magnificent area of Es Cubells.</p>
        <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
    </div>
    </div>
  </div>
    <div className="col">
        <div className="shadow-lg rounded card">
            <img src="./src/images/villa.webp" height="260" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Villa Lampy</h5>
                <p className="card-text">Just 4km from Ibiza Town, Villa Lampy is close to the action while offering ultimate privacy, luxurious living and a stunning outside area.</p>
                <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
            </div>
        </div>
    </div>
  <div className="col">
    <div className="card shadow-lg rounded">
      <img src="./src/images/villa-Sejondal.webp" height="260" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Villa Senjondal</h5>
        <p className="card-text">Precious Ibiza Villa located 10 minutes drive from Ibiza town.</p>
        <br/>
        <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
    </div>
    </div>
  </div>
    <div className="col">
        <div className="shadow-lg rounded card">
            <img src="./src/images/villa-Abahana.webp" width="200" height="260" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Villa Abahana</h5>
                <p className="card-text">Just 4km from Ibiza Town, Villa Lampy is close to the action while offering ultimate privacy, luxurious living and a stunning outside area.</p>
                <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="shadow-lg rounded card">
            <img src="./src/images/villa-843.webp" height="260" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Villa 843</h5>
                <p className="card-text">Just 4km from Ibiza Town, Villa Lampy is close to the action while offering ultimate privacy, luxurious living and a stunning outside area.</p>
                <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
            </div>
        </div>
    </div>
    </div>
    <div className="mt-5 shadow-lg card bg-dark text-white">
        <img src="./src/images/villa.webp" className="card-img" alt="..."/>
        <div className="card-img-overlay">
<div className="row">

<div className="shadow-lg rounded m-5 col-md-9 mb-md-0 mb-5">
    <div className="m-3 text-white d-flex justify-content-end">
        <h2>Enter any special requests here. </h2>
    </div>
    <form id="contact-form" name="contact-form" action="mail.php" method="POST"/>

        <div className="row">
            <div className="col-md-5">
                <div className="md-form mb-0">
                <label for="name" className="mb-1">Name</label>
                    <input type="text" id="name" name="name" className="shadow-lg rounded form-control"/>
                </div>
            </div>
            <div className="col-md-5">
                <div className="md-form mb-0">
                <label for="email" className="mb-1">Surname</label>
                    <input type="text" id="email" name="email" className="shadow-lg rounded form-control"/>
                </div>
            </div>
        </div>
        
        <div className="mt-3 row">
            <div className="col-md-5">
                <div className="md-form mb-0">
                    <label for="subject" className="mb-1">Email</label>
                    <input type="text" id="subject" name="subject" className="shadow-lg rounded form-control"/>
                </div>
            </div>
            <div className="col-md-5">
                <div className="md-form mb-0">
                    <label for="subject" className="mb-1">Telephone Number</label>
                    <input type="text" id="subject" name="subject" className="shadow-lg rounded form-control"/>
                </div>
            </div>
        </div>

        <div className="mt-3 row">
            <div className="col-md-10">
                <div className="md-form">
                    <label for="message" className="mb-1">Your Request</label>
                    <textarea type="text" id="message" name="message" rows="2" className="shadow-lg rounded form-control md-textarea"></textarea>
                </div>
            </div>
        </div>

        <div className=" rounded text-md-center d-flex justify-content-between">
                <a href="./Enquires" className="mt-5 mb-3 col-5 shadow-sm btn text-dark btn-warning d-flex justify-content-center" onclick="document.getElementById('contact-form').submit();">
                    Send
                </a>
        </div>

        <div className="status"></div>
</div>        
        <div className="shadow-lg rounded m-5 mt-5 col-md-3 text-center d-flex justify-content-end">
            <img className="mt-4" src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/>

            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+34 665998510</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>kingluxuryservices.com</p>
                </li>
            </ul>
        </div>
    </div>

    </div>
</div>



</div>
)}
  
export default VillasCards;