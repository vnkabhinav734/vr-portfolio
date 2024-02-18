import React from 'react'
import DalplexImage from '../../assets/dalplexfloor02.jpg'
import TriviaGameImage from '../../assets/trivia-game.webp'
import './Portfolio.css'

const Portfolio = () => {
  const projects=[
    {
      id: 1,
      title: 'Dalplex',
      cardimage: DalplexImage,
      demo: 'https://incomparable-cassata-28d849.netlify.app/',
      code: 'https://github.com/vnkabhinav734/Dalplex'
    },

    {
      id: 2,
      title: 'Trivia Games',
      cardimage: TriviaGameImage,
      demo: 'https://trivia-6dbcahpsya-uc.a.run.app/',
      code: 'https://github.com/vnkabhinav734/Trivia_Games'
    }
  ]
  return (
    <div className='portfolio'>
      <div className='pf'> 
        <div className='pb'>
          <p className='p-portfolio'>Portfolio</p>
          <p className='py-6'>Check out some of work right here!!</p>
        </div>


        {/* <div className='card'>
          <div className='dimension'>
            <img src={Dalplex} alt="" className='dalimage' />
            <p className='cardDescription'>Dalplex</p>
            <div className='Buttons'>
              <button className='button'>Demo</button>
              <button className='button'>Code</button>
            </div>
          </div>
        </div> */}

<div className='card-container'>
      {projects.map(project => (
        <div key={project.id} className='card'>
          <div className='dimension'>
            <img src={project.cardimage} alt="" className='cardimage' />
            <p className='cardDescription'>{project.title}</p>
            <div className='Buttons'>
              {/* Demo button */}
              <a href={project.demo} className='button' target="_blank" rel="noopener noreferrer">Demo</a>
              {/* Code button */}
              <a href={project.code} className='button' target="_blank" rel="noopener noreferrer">Code</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
}

export default Portfolio