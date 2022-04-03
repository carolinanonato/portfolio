import React from 'react'
import './Projects.css'
import dogfood from "../../assets/img/dogfood.png";

export default function Projects() {
    return (
        <div className="project-section">
            <div className="project-main">
                <h1 className='project-title'>Projects</h1>
            </div>
            <div className="project-cards">
                <h3 className='project-name'>Dog Food Calculator</h3>
                <img className="project-image" src={dogfood} alt="doog food" />
                <p className='project-description'>Fresh food is the best thing for dogs! They became more cheerful, their fur shinier and they hardly get sick. In this project I created a simple app to calculate the servings of meat, vegetables and carbohydrates your dog needs daily.
                </p>
                <button><a href="https://carolinanonato.github.io/dog-fresh-food/" target="_blank">Live Demo</a></button>
                <button><a href="https://github.com/carolinanonato/dog-fresh-food" target="_blank">Code</a></button>
            </div>
        </div>
    )
}
