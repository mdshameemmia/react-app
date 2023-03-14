import React from 'react'
import Logo from '../youtube_logo.png'
const YoutubeLogo = ({className}) => {
    return (
        <div className={`d-flex ${className}`}>
            <img src={Logo} style={{ "width": '30px', "height": "50px", "margin": "-8px 0 0 0" }} alt="My Website Logo" className="navbar-brand" />
            <h3>YouTube <sup style={{ "fontSize": '16px', "margin": "0", "fontWeight": "bold" }}>BD</sup></h3>
        </div>
    )
}

export default YoutubeLogo