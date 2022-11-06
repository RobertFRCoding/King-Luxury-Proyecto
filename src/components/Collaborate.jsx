import { Contact } from "./Contact"

export function Collaborate  () {
    return <div className="container">
    <div className="shadow-sm rounded m-5 text-dark text-end d-flex justify-content-around"><h1>Collaborate</h1></div>
    <div className="m-5 text-dark d-flex justify-content-between"><h2>How to Collaborate with Us?</h2></div>
    <div className="d-flex">
  <div>
  <ul className=" container">
  Contact with us about our scheme comission when you bring 
    someone or when you put your Villa to rent.
    <form className="mt-2 row g-3">
  <div className="col-md-5">
    <label for="inputName" className="form-label"></label>
    <input type="name" className="shadow form-control" id="inputName" placeholder="Name*"/>
  </div>
  <div className="col-md-5">
    <label for="inputLastName" className="form-label"></label>
    <input type="name" className="shadow form-control" id="inputLastName" placeholder="Surname*"/>
  </div>
  <div className="col-10">
    <label for="inputTelephone" className="form-label"></label>
    <input type="text" className="shadow form-control" id="inputTelephone" placeholder="Telephone Number*"/>
  </div>
  <div className="col-10">
    <label for="inputEmail" className="form-label"></label>
    <input type="email" className="shadow form-control" id="inputEmail" placeholder="Email*"/>
  </div>
  <div className="col-10">
    <label for="inputCountry" className="form-label"></label>
    <select id="inputCountry" className="shadow form-select"/>
      <option selected>Country*</option>
      <option>Connect list</option>
<div className="mt-5 input-group mb-3">
  <input type="file" className="shadow form-control" id="inputGroupFile02"/>
  <label className="shadow input-group-text" for="inputGroupFile02">Upload</label>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Request</label>
  <textarea className="shadow form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
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
  </div> 
    </ul>
  </div>
  <div>
    <ul>
    <img src="./src/images/collaborate.webp" width="600" className="shadow-lg mt-5 rounded img-fluid" alt="..."/> 
    </ul>
  </div>
  </div>

    <div className="container text-dark text-end d-flex justify-content-between flex-end">
        <em><p>*For information regarding the manner in which King Luxury Services collects,</p>
        <p>stores and uses your personal data, please refer to the Privacy Policy.</p></em>
    </div>

</div>
}
export default Collaborate;
