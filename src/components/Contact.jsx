import React from "react";


export function Contact  () {
    return   (  
<div className="m-5 container">
<div className="rounded col-9 m-5 text-center text-dark d-flex justify-content-around"><h1>We are here to help you.</h1></div>
          <div className="col-md-2">
    <label for="inputSalutation" className="form-label"></label>
    <select id="inputSalutation" className="shadow fs-6 form-select">
      <option selected>Salutation</option>
      <option>Mr.</option>
      <option>Mrs.</option>
      <option>Miss.</option>
      <option>Ms.</option>
    </select>
  </div>
<form className="row g-3">
  <div className="col-md-5">
    <label for="inputName" className="form-label"></label>
    <input type="name" className="shadow form-control" id="inputName" placeholder="Name*"/>
  </div>
  <div className="col-md-5">
    <label for="inputLastName" className="form-label"></label>
    <input type="name" className="shadow form-control" id="inputLastName" placeholder="Surname*"/>
  </div>
  <div className="col-10">
    <label for="inputEmail" className="form-label"></label>
    <input type="email" className="shadow form-control" id="inputEmail" placeholder="Email*"/>
  </div>
  <div className="col-10">
    <label for="inputTelephone" className="form-label"></label>
    <input type="text" className="shadow form-control" id="inputTelephone" placeholder="Telephone Number*"/>
  </div>
  <div className="col-10">
    <label for="inputCountry" className="form-label"></label>
    <select id="inputCountry" className="shadow form-select">
      <datalist id="datalistOptions"></datalist>
      <option selected>Country*</option>
      <option value>...</option>
    </select>
    <div className="mt-4 col-12">
    <label for="input" className="form-label"></label>
    <input type="text" className="shadow form-control" id="input" placeholder="How did you hear about us?"/>
  </div>
  <div className="container mt-4">
    <label for="exampleFormControlTextarea1" className="text-dark form-label">Request</label>
  </div>
  <textarea class="shadow form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="col-12">
    <div className="form-check">
      <input className="shadow form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      I confirm that I have read and agree with the Terms & Conditions and Privacy Policy*
      </label>
    </div>
  </div>
  <div className="col-12">
    <button type="submit" className="shadow btn btn-warning">Submit</button>
  </div>
  </form>

 <div className="container">
 <div className="m-5 text-dark text-end d-flex justify-content-center">
        <p><em>*For information regarding the manner in which King Luxury Services collects, stores and uses your personal data, please refer to the Privacy Policy.</em></p>
    </div>
  </div> 




</div>      
)}
export default Contact;