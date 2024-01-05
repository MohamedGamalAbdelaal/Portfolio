import React from 'react'
import CV from '../../assets/CV.pdf'
import { experience } from '../../data/data';
import Card from '../Card/Card';
import './About.css'
export default function About() {
  return (
    <section className='About'>
        <h2 className='text-center'>About Me</h2>
        <div className="container about-container">
          <div className="about-left">
            <h3>I`m Mohamed Gamal</h3>
            
            <p>
            Hi, My name is Mohamed Gamal , As a Frontend Developer, I specialize in crafting modern, clean, and responsive websites that offer the best user experience. Feel free to explore my portfolio to
             discover my latest projects and learn more about my skills and experience in the field.
            </p>
            
            
            <a href={CV} download className='btn'> Download CV
              <span><i class="fa fa-download" aria-hidden="true"></i></span>
            </a>
          </div>
          <div className="about-right">

            {
              experience.map(({id,no,title }) => {
                return (
                  <Card key={id} classname={'expernce-card'}>
                    <h2><span>{no}</span></h2>
                    <p>{title}</p>
                  </Card>
                )
              })}
          </div>
        </div>
      </section>
 
  )
}
