import React from "react";
import './footer.css'
import {FaFacebook} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"
import {IoLogoTwitter} from "react-icons/io"

const Footer = () =>{
    return(
        <footer>
            <a href="#" className="footer-logo">EGATOR</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Expeirience</a></li>
                <li><a href="#services">Service</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer-socials">
                <a href="#"><FaFacebook/></a>
                <a href="#"><FiInstagram/></a>
                <a href="#"><IoLogoTwitter/></a>
            </div>

            <div className="footer-copyright">
                <small>&copy;shiab uddin(SHAWON)</small>
            </div>
        </footer>
    )
}
export default Footer