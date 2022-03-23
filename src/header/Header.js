import React from "react";
import './header.css'
import CTA from "./CTA";
import ME from "../assets/me.png"
import HeaderSocials from "./HeaderSocials";


const Header = () =>{
    return(
        <header>
            <div className="container header-container">
                <h5>Hello  i'm</h5>
                <h1>Shiab Uddin</h1>
                 <div className="text-light">Fullstack Devloper</div>
                <CTA/>
                <HeaderSocials/>

                <div className="me">
                    <img src={ME} alt="me"/>
                </div>

                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    )
}
export default Header