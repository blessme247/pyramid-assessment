import React from 'react'
import "./registration.scss"
import PhonesMockup from "../../assets/Images/Imgs.png"
import sliderDots from "../../assets/Icons/slider-dots.svg"
import logo from "../../assets/Images/logo.png"
import Form from './Form'

const Registration = () => {
  return (
    <div className='wrapper'>
        <div className="left">
            <div className="top">Social media shared today, tomorrow or by location.</div>
            <div className="middle">
                
            <div className="imgContainer">
                    <img className='phoneImg' src={PhonesMockup} alt="phones" />
                </div>
            </div>



            <div className="bottom">
                <img src={sliderDots} alt="slider icons" />
            </div>
        </div>
        <div className="right">
            <div className="logoWrapper">
                <img src={logo} alt="logo" /> <span className='logoText'>Capzul</span>
            </div>

            <Form/>
        </div>
    </div>
  )
}

export default Registration