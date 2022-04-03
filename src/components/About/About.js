import React from 'react'
import './About.css'

export default function About() {
    return (
        <section id='about'>
            <div className="about">
                <div className="info">
                    <h1 className='about-me'>About me</h1>
                    <p className='about-info'>Hi, I’m Carolina! Or Carol, if you prefer.

                        I’m a creative web developer passionate about learning and building digital experiences. I’m currently focusing on the MERN stack, but still exploring other technologies and frameworks.</p>
                    <br></br>

                    <p className='about-info'>I have a Bachelor in Communications along with 10 years experience in Social Media, Data Analysis and Content Creation. Advocating for diversity in tech is something that's very important to me and if you're looking for a developer to add to your team, I'd love to hear from you!</p>

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

                                <i className="devicon-html5-plain skillicon"> <span class="htmltext">HTML5</span></i>


                                <i className="devicon-css3-plain skillicon css">
                                    <span class="htmltext">CSS3</span>
                                </i>
                                <i className="devicon-javascript-plain skillicon">
                                    <span class="htmltext">JavaScript</span>
                                </i>
                            </div>
                            <i className="devicon-typescript-plain skillicon"> <span class="htmltext">TypeScript</span></i>
                            <i className="devicon-react-original skillicon">      <span class="htmltext">React</span></i>
                            <i className="devicon-bootstrap-plain skillicon ">      <span class="htmltext">Bootstrap</span></i>
                        </div>
                        <div className="backend">
                            <h3 className='development'>Backend Development</h3>
                            <div className="set1">
                                <i className="devicon-nodejs-plain skillicon"> <span class="htmltext">Node.js</span></i>

                                <i className="devicon-mongodb-plain skillicon"> <span class="htmltext">MongoDB</span></i>

                                <i className="devicon-express-original skillicon"> <span class="htmltext">Express</span></i> <br></br>
                            </div>

                            <i className="devicon-python-plain  skillicon "> <span class="htmltext">Python</span></i>
                            <i className="devicon-mysql-plain skillicon"> <span class="htmltext">MySQL</span></i>
                            <i className="devicon-postgresql-plain skillicon"> <span class="htmltext">PostgreSQL</span></i>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}
