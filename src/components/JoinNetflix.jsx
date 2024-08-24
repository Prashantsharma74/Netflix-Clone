import React from 'react'
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"

function JoinNetflix() {
    return (
        <div className='join'>
            <p className='reasons'>More reasons to join</p>
            <div className='collection'>
                {
                    data.map((item, index) => (
                        <div key={index} className='one'>
                            <h2>{item.heading}</h2>
                            <p>{item.para}</p>
                            <img src={item.img} alt="Image" />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

const data = [
    {
        heading: "Enjoy on your TV",
        para: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        img: `${one}`
    },
    {
        heading: "Download your shows to  watch offline",
        para: "Save your favourites easily and always have something to watch.",
        img: `${two}`
    },
    {
        heading: "Watch everywhere",
        para: "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
        img: `${three}`
    },
    {
        heading: "Create profiles for kids",
        para: "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
        img: `${four}`
    },
]

export default JoinNetflix
