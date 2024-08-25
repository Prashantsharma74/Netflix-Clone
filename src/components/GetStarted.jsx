import React from 'react'

function GetStarted() {
    return (
        <div className='footer'>
            <p className='ready'>Ready to watch? Enter your email to create or restart your membership.</p>
            <span className='end-section'>
                <input type="text" placeholder='Email address' />
                <button>Get Started &nbsp; ></button>
            </span>
            <div>
                <p className='que'>Questions? Call &nbsp;<p className="borderBottom"> 000-800-919-1694</p></p>
                <ul>
                    {
                        details.map((detail, index) => (
                            <li key={index}>{detail.text}</li>
                        ))
                    }
                </ul>
                <select name="" id="">
                    <option value="" selected>English</option>
                    <option value="">हिन्दी</option>
                </select>
                <p className='netflix'>Netflix India</p>
            </div>
        </div>
    )
}

const details = [
    {
        text: "FAQ"
    },
    {
        text: "Help Centre"
    },
    {
        text: "Account"
    },
    {
        text: "Media Centre"
    },
    {
        text: "Investor Relations"
    },
    {
        text: "Jobs"
    },
    {
        text: "Ways to Watch"
    },
    {
        text: "Terms of Use"
    },
    {
        text: "Privacy"
    },
    {
        text: "Cookie Preferences"
    },
    {
        text: "Corporate Information"
    },
    {
        text: "Contact Us"
    },
    {
        text: "Speed Test"
    },
    {
        text: "Legal Notices"
    },
    {
        text: "Only on Netflix"
    },
]

export default GetStarted
