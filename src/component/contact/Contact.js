import React from "react";
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import   { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_j0pevfp', 'template_oqwic91', form.current, 'user_W3QoGr0kLeglTp5wuLGJJ')
        e.target.reset()
    };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <MdOutlineEmail className="contact-option-icon"/>
                        <h4>Email</h4>
                        <h5>shawon.cse.eub@gmail.com</h5>
                        <a href="shawon.cse.eub@gmail.com">Send a message</a>
                    </article>

                    <article className="contact-option">
                        <RiMessengerLine className="contact-option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Facebook </h5>
                        <a href="https://www.facebook.com/">Send a message</a>
                    </article>

                    <article className="contact-option">
                        <BsWhatsapp className="contact-option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+0131136707</h5>
                        <a href="https://www.facebook.com/">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Full Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact
