import React from 'react'
import './Projects.css'
import dogfood from "../../assets/img/dogfood.png";
import superpizza from "../../assets/img/superpizza.png";
import peng from "../../assets/img/peng.png";
import headphone from "../../assets/img/headphone.png";
import vtubers from "../../assets/img/vtubers.png";
import tictactoe from "../../assets/img/tictactoe.png";

export default function Projects() {
    return (
        <section id="projects">
            <div className="project-section">
                <div className="project-main">
                    <h1 className='project-title'>Projects</h1>
                </div>
                <div className="project-cards">
                    <div className="card1">
                        <h3 className='project-name'>Super Pizza</h3>
                        <img className="project-image" src={superpizza} alt="doog food" />
                        <p className='project-description'>A Pizza Restaurant website made using React. Features: Carousel with new flavours, ordering system that automatically updates the shopping cart, contact form, Google Maps and a responsive layout.

                        </p>
                        <button className='project-btn'><a href="https://superpizza.netlify.app/" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/super-pizza" target="_blank">Code</a></button>
                    </div>
                    <div className="card2">
                        <h3 className='project-name'>Headphone Store</h3>
                        <img className="project-image" src={headphone} alt="headphone" />
                        <p className='project-description'>This is a product sales page (in this case, a headphone) that I made to study and use as many CSS elements as possible. Besides being fully responsive it also uses some JavaScript elements.
                        </p>
                        <button className='project-btn'><a href="https://carolinanonato.github.io/new-mobile-store/" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/new-mobile-store" target="_blank">Code</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <div className="card2">
                        <h3 className='project-name'>Peng</h3>
                        <img className="project-image" src={peng} alt="doog food" />
                        <p className='project-description'>Peng is a fake mug shop with pictures of penguins. The template can be used for any small business and has a presentation banner, product carousel and an information area.
                        </p>
                        <button className='project-btn'><a href="https://peng.netlify.app/" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/peng" target="_blank">Code</a></button>
                    </div>
                    <div className="card2">
                        <h3 className='project-name'>VTubers</h3>
                        <img className="project-image" src={vtubers} alt="doog food" />
                        <p className='project-description'>A small multi page website made using static generator Eleventy and Handlebars as a template. I'm currently obsessed with Vtubers so I use my hobbies to study the various ways to create a website.
                        </p>
                        <button className='project-btn'><a href="https://vtubersinfo.netlify.app/" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/vtubers_info" target="_blank">Code</a></button>
                    </div>
                </div>
                <div className="project-cards">
                    <div className="card2">
                        <h3 className='project-name'>Tic-tac-toe</h3>
                        <img className="project-image" src={tictactoe} alt="doog food" />
                        <p className='project-description'>In addition to websites, I've also created most of the web apps students make to learn Javascript and React: music player, todo list, memory game, exchange rate calculator… and the tic-tac-toe game, one of my favorites!
                        </p>
                        <button className='project-btn'><a href="https://musical-gecko-1c9d2a.netlify.app/#main" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/dog-fresh-food" target="_blank">Code</a></button>
                    </div>
                    <div className="card2">
                        <h3 className='project-name'>Dog Food Calculator</h3>
                        <img className="project-image" src={dogfood} alt="doog food" />
                        <p className='project-description'>Fresh food is the best thing for dogs! They became more cheerful, their fur shinier and they hardly get sick. In this project I created a simple app to calculate the servings of meat, vegetables and carbohydrates your dog needs daily.
                        </p>
                        <button className='project-btn'><a href="https://carolinanonato.github.io/dog-fresh-food/" target="_blank">Live Demo</a></button>
                        <button className='project-btn'><a href="https://github.com/carolinanonato/dog-fresh-food" target="_blank">Code</a></button>
                    </div>

                </div>
            </div >
        </section >
    )
}
