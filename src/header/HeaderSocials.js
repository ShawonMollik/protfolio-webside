import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FaDribbble} from "react-icons/fa"

const HeaderSocial = () =>{
    return(
        <div  className="headr-social">
            <a href="https://linkedin.com"><BsLinkedin/></a>
            <a href="https://github.com"><FaGithub/></a>
            <a href="https://dribbble.com"><FaDribbble/></a>
        </div>
    )
}
export default HeaderSocial