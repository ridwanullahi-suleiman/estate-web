import React from 'react'
import './Footerr.css'
import logo2 from '../../assets/logo2.png'
const  Footerr =() =>{
  return (
    <div className='Footer'>
       <div className='cardd'>
          <div>
             <h1>Get started with Homyz</h1>
             <p>Subscribe and find super attractive price quotes from us.
             Find your residence soon</p>
             <button className='butt'>Get Started</button>
          </div>
       </div> 

       <div id='start' className='edge'>
           <div className='leftedge'>
               <img src ={logo2}/>
               <p>Our vision is to make all people<br/>
               the best place to live for them.</p>
           </div>


           <div className='rightedge'>
            <h2>Information</h2>
            <figcaption>145 New York, FL 5467, USA</figcaption>
            <span>
              <a href=''>Property</a>
              <a href=''>Services</a>
              <a href=''>Product</a>
              <a href=''>About Us</a>
            </span>
           
           </div>
       </div>
  </div>
  )
}

export default Footerr