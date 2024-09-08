import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { BsFillPersonLinesFill} from 'react-icons/bs';
import './SocialLinks.css'

const SocialLinks = () => {
      
  return (
    <div className="iconslist">
        <ul>
        <li className="orderedlist" > 
            <a href='https://www.linkedin.com/in/vinayak-abhinav-rupanagunta-3303b7188/' target='_blank'  rel="noreferrer" className='linkedinlink'>
            <span className="linkedintext">LinkedIn</span> 
            <FaLinkedin size={20} className='linkedinicon'/>
            </a>
        </li>
        <li className="orderedlist" > 
            <a href='https://github.com/vnkabhinav734' target='_blank'rel="noreferrer"className='githublink'>
            <span className="githubtext">Github</span> 
            <FaGithub size={20} className='githubicon'/>
            </a>
        </li>
        <li className="orderedlist" > 
            <a href='mailto:vinayakabhinav.r@gmail.com' className='emaillink'>
            <span className="emailtext">Email</span> 
            <HiOutlineMail size={20} className='emailicon'/>
            </a>
        </li>
        <li className="orderedlist" > 
            <a href='./resume.pdf' download className='resumelink'>
            <span className="resumetext">Resume</span> 
            <BsFillPersonLinesFill size={20} className='resumeicon'/>
            </a>
        </li>
        </ul>
    </div>
  )
}

export default SocialLinks