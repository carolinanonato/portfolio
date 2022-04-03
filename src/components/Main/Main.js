import React from 'react'
import './Main.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Main() {
    return (

        <div className='main'>
            <h1 className='main-title'>Carolina Nonato</h1>
            <p className='sub-heading'>Web Design & Development</p>
            <AnchorLink href='#contact'><button className='first-btn'>Contact</button></AnchorLink>

        </div>
    )
}
