import { Link } from "react-router-dom";
import {  BsStars } from "react-icons/bs";
import {  GiGlassHeart } from "react-icons/gi";
import Contact from "./Contact";


export function Body () {
    return <div className="container">
<div id="carouselExampleControls" className="mt-5 carousel slide" data-bs-ride="carousel">
<div allow="autoplay" className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
  </div>
  <div className="mb-5 rounded shadow-lg carousel-inner">
    <div className="carousel-item active">
      <Link to="./Services">
      <img src="/src/images/breakfast-service.jpeg" className="d-block w-100 " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Exclusive Services</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="./Cars">
      <img src="/src/images/lambo-white .jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Luxury Cars</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="./Villas">
      <img src="/src/images/villa.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Villas</h5>
        <p>Some representative placeholder content for the second slide.</p>
        </div>
        </Link>
      </div>
      <div className="carousel-item">
        <Link to="./Yatchs">
        <img src="/src/images/yatch.jpeg" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h5>Yatchs</h5>
        <p>Some representative placeholder content for the second slide.</p>
        </div>
        </Link>
      </div>
    <div className="carousel-item">
      <Link to="./Transfers">
      <img src="/src/images/chauffeur.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Transfers</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
        </Link>
      </div>
    <div className="carousel-item">
      <Link to="./Jets">
      <img src="/src/images/Jet.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Private Jets</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="./Events">
      <img src="/src/images/events.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Exclusive Events</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="./Wellness">
      <img src="/src/images/wellness.jpeg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Wellness & Beauty Services</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>
    <div className="carousel-item">
      <Link to="./Activities">
      <img src="/src/images/activities.webp" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Exclusive Activities</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </Link>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  </div>    
<br/>
  <div className="mt-5 rounded text-dark text-center d-flex justify-content-center">
    <em><h1><BsStars/>Click in <Link to="./About" className="m-4 text-dark text-decoration-none"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/></Link> to know more <Link to="./About" className="text-dark text-decoration-none">About Us</Link><BsStars/></h1></em>
  </div>

<br/>

<div className="mt-5 shadow rounded card d-flex justify-content-center">
  <div className="card-header">
    Quote of the Day
  </div>
  <div className="mb-5 card-body">
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
<div className="m-5 mb-5 text-dark text-center d-flex justify-content-center">
        <h1>Click in <Link to="/Collaborate" className=" mb-5 text-dark text-decoration-none"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80"/></Link> if you'd like to know more about how to <Link to="/Collaborate" className="mb-5 text-dark text-decoration-none"><em>Collaborate</em></Link> with us.</h1>
    </div>

<Contact/>

</div>
}
