import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id='about'>
            <div className="about">
                <div className="info">
                    <h1 className='about-me'>About me</h1>
                    <p className='about-info'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sint iste labore doloribus maxime, reiciendis veritatis odit, laborum culpa nobis a numquam perspiciatis quae aliquid ipsum eaque omnis voluptate aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi laboriosam ducimus officia ullam in. Aspernatur incidunt a laborum error, dolor aliquid atque voluptate voluptates. Et libero ducimus consectetur eveniet eaque?</p>
                    <div className="social-icons">
                        <a href="https://github.com/carolinanonato" target="_blank"><i className="devicon-github-original social"></i></a>
                        <a href="https://www.linkedin.com/in/carolina-nonato/" target="_blank"><i className="devicon-linkedin-plain social"></i></a>
                        <a href="https://twitter.com/Carolthedev" target="_blank"><i className="devicon-twitter-original"></i></a>
                    </div>
                </div>

                <div className="skills">
                    <h1 className='skills-title'> Skills</h1>
                    <div className="front-back">
                        <div className="frontend">
                            <h3 className='development'>Frontend Development</h3>
                            <div className="set1">
                                <i className="devicon-html5-plain social"></i>
                                <i className="devicon-css3-plain social"></i>
                                <i className="devicon-javascript-plain social"></i> <br></br>
                            </div>
                            <i className="devicon-typescript-plain social"></i>
                            <i className="devicon-react-original social"></i>
                            <i className="devicon-bootstrap-plain social"></i>
                        </div>
                        <div className="backend">
                            <h3 className='development'>Backend Development</h3>
                            <div className="set1">
                                <i className="devicon-nodejs-plain social"></i>

                                <i className="devicon-mongodb-plain social"></i>

                                <i className="devicon-express-original social"></i> <br></br>
                            </div>

                            <i className="devicon-python-plain social "></i>
                            <i className="devicon-mysql-plain social"></i>
                            <i className="devicon-postgresql-plain social"></i>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}
