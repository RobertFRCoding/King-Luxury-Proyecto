import { SlLocationPin } from "react-icons/sl";
import { BsFillGeoFill } from "react-icons/bs";


export function Location  () {
    return (
<div className="container">
    <div className="shadow-sm rounded mt-5 text-dark text-start d-flex justify-content-around">
        <h1>Around The World <BsFillGeoFill/></h1>
    </div>
    <div className="mt-4 d-flex">
        <div className="shadow-sm rounded mt-5 text-center justify-content-">
            <h1 className="mt=5"><SlLocationPin/></h1>
            <h4>We are a VIP concierge company working especialized in Ibiza Island and Europe expanding aswell all over the world.</h4>
        </div>
        <img src="/src/images/ibiza.webp" alt="" width="600" height="400" className="shadow-lg rounded end mt-5 d-inline-block d-flex justify-content-start"/>
    </div>

    

</div>
)}

export default Location;