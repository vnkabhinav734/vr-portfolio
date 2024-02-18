import React from 'react'
import MyImage from '../../assets/MyImage.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import './Home.css'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div className='home'>
        <div className='content'>
            <div className='data'>
            <div className='body'>
              <h2 className='head'>I am a Software Developer</h2>
                <p className='para'>Welcome to my website. I am a Software Developer with 
                2 years of experience. I enjoy developing applications 
                using React, Java, Spring boot and Node.js
                </p>
            <div className='button-container'>
              <Link to='portfolio' smooth duration={500} className='button hover-rotate'>Portfolio
                <span>
                   <MdKeyboardArrowRight/>
                </span>
              </Link>
            </div>

            </div>
            <div >
                <img src={MyImage} alt='my profile' className='image'/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home