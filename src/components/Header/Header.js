import React from 'react'
import './Header.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
    return (
        <section id="home">
            <div className="navigation">
                <div className="logo">CN</div>

                <div className="menu">
                    <ul className="menu-items">
                        <AnchorLink href='#home'>
                            <a href="" className="item">Home</a>
                        </AnchorLink>
                        <AnchorLink href='#about'>
                            <a href="" className="item">About</a>
                        </AnchorLink>
                        <AnchorLink href='#projects'>
                            <a href="" className="item">Projects</a>
                        </AnchorLink>
                        <AnchorLink href='#contact'>
                            <a href="" className="item last">Contact</a>
                        </AnchorLink>
                    </ul>
                </div>

            </div>
        </section>
    )
}
