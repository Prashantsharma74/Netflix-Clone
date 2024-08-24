import React from 'react'

function Questions() {
    return (
        <div className='questions'>
            <h1>Frequently Asked Questions</h1>
            <ul className='queul'>
                {
                    questions.map((question, index) => (
                        <li key={index}>
                            <p>{question.para}</p>
                            <h2 className='icones'>{question.icon()}</h2>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

const icons = () => {
    return (
        <i class="fa-solid fa-plus"></i>
    )
}

const questions = [
    {
        para: "What is Netflix?",
        icon: icons
    },
    {
        para: "How much does Netflix cost?",
        icon: icons
    },
    {
        para: "Where can I watch?",
        icon: icons
    },
    {
        para: "How do I cancel?",
        icon: icons
    },
    {
        para: "What can I watch on Netflix?",
        icon: icons
    },
    {
        para: "Is Netflix good for kids?",
        icon: icons
    }
]

export default Questions
