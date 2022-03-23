import React from "react";
import './portfolio.css'
import IMG1 from "../assets/portfolio1.jpg"
import IMG2 from "../assets/portfolio2.jpg"
import IMG3 from "../assets/portfolio3.jpg"
import IMG4 from "../assets/portfolio4.jpg"
import IMG5 from "../assets/portfolio5.png"
import IMG6 from "../assets/portfolio6.jpg"

const data = [
    {
        id:1,
        image:IMG1,
        title:"Crypto Currency Deshborad & Financial Visualization",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    },
    {
        id:1,
        image:IMG2,
        title:"Charts templates & infographics in Figma",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    },
    {
        id:1,
        image:IMG3,
        title:"Figama tempates UI kit for data design web appsa",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    },
    {
        id:1,
        image:IMG4,
        title:"Maintaining taska and tracking progress",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    },
    {
        id:1,
        image:IMG5,
        title:"Charts templates & infographics in Figma",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    },{
        id:1,
        image:IMG6,
        title:"Crypto Currency Deshborad & Financial Visualization",
        facebook:"https://www.facebook.com/",
        demo:"https://www.youtube.com/"
    }

]

const Portfolio = () =>{
    return(
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio-container">
                {
                    data.map(({id, image, title, facebook, demo}) =>{
                        return(
                            <article key={id} className="portfolio-item">
                                <div className="portfolio-item-imge">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio-item-cta">
                                    <a href={facebook} className="btn" target="_blank">Facebook</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>

                        )
                    })
                }
            </div>
        </section>
    )
}
export default Portfolio