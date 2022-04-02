import React from 'react'
import './Header.css'

export default function Header() {
    return (
        <div className="navigation">
            <div className="logo">Carolina Nonato</div>

            <div className="menu">
                <ul className="menu-items">
                    <a href="" className="item">Home</a>
                    <a href="" className="item">About</a>
                    <a href="" className="item">Projects</a>
                    <a href="" className="item last">Contact</a>
                </ul>
            </div>

        </div>
    )
}
