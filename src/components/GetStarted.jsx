import React from 'react'

function GetStarted() {
    return (
        <div>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <span>
                <input type="text" />
                <button>Get Started &bnsp; ></button>
            </span>
            <div>
                <p>Questions? <p>Call 000-800-919-1694</p></p>
                <ul>
                    {
                        details.map((detail, index) => (
                            <li key={index}>{detail.text}</li>
                        ))
                    }
                </ul>
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
