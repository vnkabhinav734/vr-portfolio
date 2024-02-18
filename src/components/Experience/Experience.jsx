import React from 'react';
import ReactImage from '../../assets/react.png';
import AWSImage from '../../assets/aws.jpeg';
import JavaImage from '../../assets/java.png';
import HtmlImage from '../../assets/html.png';
import CSSImage from '../../assets/css.png';
import NodeImage from '../../assets/node.png';
import JavaScriptImage from '../../assets/javascript.png';
import SpringBootImage from '../../assets/spring-boot.jpeg'
import GoogleImage from '../../assets/gcp.png'
import './Experience.css'

const Experience = () => {

    const techs=[
        {
            id:1,
            src:HtmlImage,
            title:'HTML'
        },
        {
            id:2,
            src:CSSImage,
            title:'CSS'
        },
        {
            id:3,
            src: JavaScriptImage,
            title: 'JavaScript'
        },
        {
            id:4,
            src: JavaImage,
            title: 'Java'
        },
        {
            id:5,
            src: SpringBootImage,
            title: 'Spring Boot'
        },
        {
            id:6,
            src: ReactImage,
            title: 'React'
        },
        {
            id:7,
            src: AWSImage,
            title: 'AWS'
        },
        {
            id:8,
            src: NodeImage,
            title: 'Node'
        },
        {
            id:9,
            src: GoogleImage,
            title: 'Google Cloud'
        }
    ]
  return (
    <div className='experience'>
        <div className='experience-text'>
            <p className='p-experience'>Experience</p>
            <p className='py-6'>These are the technologies I've worked with</p>
        </div>

        <div className="techicons">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`tech-images`}>
              <img src={src} alt="" className="techicons" />
              <p className="tech-title">{title}</p>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Experience