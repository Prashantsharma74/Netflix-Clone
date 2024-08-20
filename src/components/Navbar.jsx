import React from 'react'
import logo from "../assets/logo.png"

function Navbar() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <div className='signin'>
                <select id="cars">
                    <option value="volvo" selected>English</option>
                    <option value="saab">Hindi</option>
                    <option value="vw">Chinese</option>
                    <option value="audi">Tamil</option>
                </select>
                <button>Sign In</button>
            </div>
        </nav>
    )
}

export default Navbar
