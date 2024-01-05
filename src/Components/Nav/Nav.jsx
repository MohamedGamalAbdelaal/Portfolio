import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'
export default function Nav() {
  return <>
  <div className="container-fluid nav-container px-0 ">
  <nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid px-5 ">
  <Link className={'logo'} to={'/'}>Gemy</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto px-5 ">
        <li class="nav-item">
        <Link className='item item1'  to={'/'}>Home</Link>
        </li>
        <li class="nav-item">
        <Link className='item item2' to={'/about'}>About</Link>
        </li>
        <li class="nav-item">
        <Link className='item item3' to={'/skills'}>Skills</Link>
        </li>
        <li class="nav-item">
        <Link className='item item4' to={'/portfolio'}>Portfolio</Link>
        </li>
        <li class="nav-item">
        <Link className='item item5' to={'/contact'}>Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  </div>
 
    {/* <header>
      <div className='nav-bar'>
        <Link className={'logo'} to={'/'}>Gemy</Link>
        <div className="navigation">
         <div className="nav-items">
         <Link className='item item1'  to={'/'}>Home</Link>
         <Link className='item item2' to={'/about'}>About</Link>
         <Link className='item item3' to={'/skills'}>Skills</Link>
         <Link className='item item4' to={'/portfolio'}>Portfolio</Link>
         <Link className='item item5' to={'/contact'}>Contact</Link>
         </div>
        </div>

    </div>
    </header>
     */}
  </>


  
}
