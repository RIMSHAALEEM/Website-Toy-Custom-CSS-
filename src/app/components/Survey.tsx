import React from 'react'
import Image from 'next/image'
import survey from "@/public/survey.png"
import Footer from './Footer'
import Navbar from './Navbar'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
    

    <div className="container-about">
    <div className="grid-container">
        <div className="image-container">
            <Image className="survey-image" src={survey}alt="survey-image"/>
        </div>

        <div className="content-container">
            <h2 className="title">Who</h2>
            <h2 className="subtitle">We <span className="highlight">Are</span></h2>
            <p className="description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi quibusdam earum debitis, 
                dolores voluptatibus sequi mollitia ullam officia, totam, praesentium nisi culpa optio.
                Eos minus, sed dolore cumque nulla earum!
            </p>
        </div>
    </div>
</div>
<Footer/>
</div>

  )
}

export default AboutUs
