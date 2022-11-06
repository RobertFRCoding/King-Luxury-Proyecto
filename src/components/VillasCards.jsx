import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { BsFillGeoFill } from "react-icons/bs";

export function VillasCards () {
    return (
<div className="container">
        
    <div className="m-4 text-dark d-flex justify-content-around">
            <h1><BsFillGeoFill/>Ibiza</h1>
        </div>
    <div className="m-5 text-dark d-flex justify-content-between">
        <h2>Our Amazing Villas located in Ibiza. </h2>
    </div>

    <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
    <div className="shadow-lg rounded card">
      <img src="./src/images/villa-Anna.png" height="260" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Villa Anna</h5>
        <p className="card-text">Villa Anna Ibiza is a luxury 6 bedroom villa located in the prestigious area of Cap Martinet with amazing sea views.</p>
        <a href="./VillasCards" className="text-decoration-none shadow-sm btn-sm btn-warning">See Inside</a>
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
        <div class="row">

<div class="col-md-9 mb-md-0 mb-5">
    <form id="contact-form" name="contact-form" action="mail.php" method="POST"/>

        <div class="row">

            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control"/>
                    <label for="name" class="">Your name</label>
                </div>
            </div>

            <div class="col-md-6">
                <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control"/>
                    <label for="email" class="">Your email</label>
                </div>
            </div>

        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control"/>
                    <label for="subject" class="">Subject</label>
                </div>
            </div>
        </div>

        <div class="row">

            <div class="col-md-12">

                <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                </div>
                <a href="./Enquires" className="shadow-sm btn btn-warning">Submit Form</a>
            </div>
        </div>

        </div>
        </div>
    </div>
    </div>
</div>
)}
  
export default VillasCards;