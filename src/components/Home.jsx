import React from 'react'
import Navbar from './Navbar';
import MainSection from './MainSection';

function Home() {

    const divStyle = {
        backgroundImage:
            'linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), transparent),linear-gradient(to top left, rgba(0, 0, 0, 0.8), transparent),url(https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg)',
        height: '100vh',
        backgroundSize: 'zoom',
        backgroundPosition: 'center',
        backgroundSize: "1580px",
    };

    return (
        <div style={divStyle} className='main'>
            <Navbar />
            <MainSection />
        </div>
    )
}

export default Home
