import React from 'react'
import './Contact.css'
import '../../data/data'
export default function Contact() {
  return (
    <section className='contact-section'>
      <div className="container contact-container">
        <div className="text">Contact me</div>
        <div className="text2">Get in touch </div>
      <div className="form-contact">
      <div className="left-form">
            <div className="call-me">
              <div className="call-icon">
              <span><i class="fa fa-phone-alt"></i></span>
                <h4>Call Me</h4>
              <a href={"tel:number" }  >01093863840</a>
              </div>
              <div className="email-icon">
              <span><i class="fa fa-envelope"></i></span>
                <h4> Email Me</h4>
              <a href={'https://www.mohamed.gamal227422@gmail.com'} >Mohamed.Gamal227422@gmail.com</a>
              </div>
              <div className="Location-icon">
              <span><i class="fa fa-map-marker-alt"></i></span>
                 <h4>Location</h4>
              <a href={'#'}  >Cairo-Egypt</a>
              </div>
            </div>
            <div className="email-me"></div>
            <div className="location"></div>
          </div>
          <div className="right-form">
            <form action="#">
              <input type="text" placeholder='Name :' />
              <input type="text" placeholder='Phone :' />
              <input type="text" placeholder='Email :' />
              <textarea name="" id="" cols="35" rows="5" placeholder='Message'></textarea>
              <button style={{marginTop:'0'}} className='btn2'>Submit</button>
            </form>
          </div>
      </div>
   
        
      </div>
    </section>
  )
}
