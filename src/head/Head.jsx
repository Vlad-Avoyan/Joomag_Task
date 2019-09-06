import React from 'react'
import './Head.css'

const NavBar = () => {
    return (
        <div>
            <div className='General'>
                <div className='abr'>
                    <div className="Info">
                        <h1>Pushing The Boundaries of </h1>
                        <h1>Customer Service</h1>
                        <span>Fast, reliable, and dependable</span>
                    </div>
                    <div className='Pic'>
                        <img className='im' src={require('./hero-image.png')} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar