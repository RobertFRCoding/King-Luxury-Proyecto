import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function Header () {
    return  <div className=" m-1 text-dark d-flex text-center justify-content-between"> 
        <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="./"><img src="/src/images/logos/kls-no-background.svg" alt="" width="105" height="80" className="d-inline-block align-text-top"/></a>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="d-flex text-center justify-content-center">
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className=" nav-item">
          <a className="nav-link active" aria-current="page" href="./"><h5>Home</h5></a>
        </li>
      <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Concierge"><h5>Concierge</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Services"><h5>Services</h5></a>
        </li>
        <li className=" nav-item">
          <a className="nav-link active" aria-current="page" href="./About"><h5>About</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Collaborate"><h5>Collaborate</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Enquires"><h5>Enquires</h5></a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="./Contact"><h5>Contact</h5></a>
        </li>
      </ul>
      </div>
    </div>
</nav>

<img src="/src/images/logos/metamask-icon.svg" alt="" width="50" height="34" className="mt-4 d-inline-block justify-content-around"/>
    </div>

}  
<Outlet/>

//barra search
// <nav className="navbar navbar-light">
//  <div className="container-fluid">
//    <form className="d-flex">
//      <input className="form-control me-1" type="search" placeholder="Search Me" aria-label="Search"/>
//      <button className="btn btn-outline-success" type="submit">Search</button>
//    </form>
//  </div>
// </nav>

