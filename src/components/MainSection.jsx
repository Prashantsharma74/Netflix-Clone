import React from 'react'

function MainSection() {
    return (
        <div className='start'>
            <h3>Unlimited movies, TV shows and more</h3>
            <p className='starts'>Starts at 149. Cancel anytime.</p>
            <p className='ready'>Ready to watch? Enter your  email to create or restart your membership.</p>
            <span>
                <input type="text" placeholder='Email address' />
                <button>Get Started &nbsp; ></button>
            </span>
        </div>
    )
}

export default MainSection
