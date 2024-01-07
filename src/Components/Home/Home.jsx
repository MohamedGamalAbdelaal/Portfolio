import React from 'react'
import { Link } from 'react-router-dom'
import Image_Home from '../../assets/mhmd2.png'
import './Home.css'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Portfolio from '../Portfolio/Portfolio'
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'
export default function Home() {
  return <>
  <section className='home flex-center'>
       <div className="container home-container">
        <div className="social-icons">
            <Link className='s-icons' target='_blank' to={'https://www.facebook.com/profile.php?id=100009070500008'}> <i class="fab fa-facebook" ></i></Link>
            <Link className='s-icons' target='_blank' to={'https://github.com/MohamedGamalAbdelaal'}> <i class="fab fa-github" ></i></Link>
            <Link className='s-icons' target='_blank' to={'https://www.linkedin.com/in/mohamed-gamal-1a99a9207/'}> <i class="fab fa-linkedin" ></i></Link>
        </div>
        <div className="info">
            <h2> Hi I`m Mohammed</h2>
            <h3>Front-end Developer</h3>
            <p>Having an experience in web design, Building quality websites and applications with HTML, CSS,JavaScript and React.
            </p>
            <Link className='btn' to={'/contact'} >Contact Me <i class="fa-solid fa-location-arrow"></i></Link>
            </div>
            <div className="home-img">
                <img  src={Image_Home} alt="" />
            </div>
       </div>
       <Link className='scroll-down' to={'/about'}> <span className='text-dark'>Scroll Down</span> <i class="fa fa-arrow-down"></i></Link>
</section>
<About/>
<Skills/>
<Portfolio/>
<Contact/>
<Footer/>
  </>

  
}
