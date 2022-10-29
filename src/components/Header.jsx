import { NavLink } from "react-router-dom"
import { useState } from "react"

export function Header () {
    return         <div className="m-1 text-dark d-flex justify-content-between"> 
        <img src="/src/images/ksl-no-background.svg" alt="" width="105" height="80" className="d-inline-block align-text-top"/>
        <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sobre Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Quien Somos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Services
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Cars</a></li>
            <li><a class="dropdown-item" href="#">Villas</a></li>
            <li><a class="dropdown-item" href="#">Yatchs</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        <img src="/src/images/metamask-icon.svg" alt="" width="50" height="34" className="d-inline-block align-text-top"/>
    </div>

}  


