import React from "react";
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from "react-icons/fa"
import {FaUsers} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"


const About = () =>{
    return(
        <section id="about">
            <h5> Get To know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-imgs">
                        <img src={ME} alt="about imgs"/>
                    </div>
                </div>

                <div className="about-content">
                <div className="about-cards">
                    <article className="about-crad">
                        <FaAward className="about-icon"/>
                        <h5>Experience</h5>
                        <small>3+ Years Working</small>
                    </article>

                    <article className="about-crad">
                        <FaUsers className="about-icon"/>
                        <h5>Clients</h5>
                        <small>200+ Worldwide</small>
                    </article>

                    <article className="about-crad">
                        <VscFolderLibrary className="about-icon"/>
                        <h5>Projects</h5>
                        <small>80+ Folder </small>
                    </article>

                </div>

                    <p>
                        A paragraph is a series of supports one central, unified idea. Paragraphs add one idea at a time to your broader argument.related sentences developing a central idea, called the topic. Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a group of sentences that supports one central, unified idea
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>
            </div>
        </section>
    )
}
export default About