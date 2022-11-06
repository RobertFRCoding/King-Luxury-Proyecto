import { FcLike } from "react-icons/fc";
import { SlSocialInstagram } from "react-icons/sl";
import { ImFacebook } from "react-icons/im";
import {  SiDiscord } from "react-icons/si";
import {  IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";


export function Footer () {
    return <div className="rounded container p-5 my-5 bg-light text-dark">
    <div className="rounded d-flex justify-content-between mt-4">
    <a href="./"><img src="/src/images/logos/kls-no-background.svg" alt="" width="155" height="125" className="d-inline-block align-text-top"/></a>
        <div className="mt-5 text-center fs-5"><h5><em>"Life is too short not to enjoy hard"<p>King Luxury Services</p></em></h5></div>
        <div className="text-center">
            <h5>Social</h5>
            <ul className="text-center nav flex-column">
                <li>
                    <Link to="./Location" className="text-decoration-none text-dark">Location</Link>
                </li>
                <li>
                    <Link to="./Newsletter" className="text-decoration-none text-dark">Newsletter</Link>
                </li>
                <li>
                    <Link to="./Contact" className="text-decoration-none text-dark">Contact Us</Link>
                </li>
                <li className="text-center rounded shadow-lg">
                    <SlSocialInstagram/> <IoLogoYoutube/><ImFacebook/><SiDiscord/>
                </li>
            </ul>
        </div>  
        <div className="mb-3 text-center">
            <h5>Support</h5>
            <ul className="nav flex-column">
            <li>
                <Link to="./FAQ" className="text-decoration-none text-dark">FAQ</Link>
            </li>
            <li>
                <FcLike/>Help
            </li>
            <li>
                <Link to="./Collaborate" className="text-decoration-none text-dark">Collaborate</Link></li>
            <li>
                <Link to="./TermsConditions" className="text-decoration-none text-dark">T&Conditions</Link>
            </li>
            </ul>
        </div>  
    </div>
    </div>
}  