import React from 'react'
import './Contact.css'
import call from '../../assets/phone-call_11712751.png'
import heroo from '../../assets/hero-image.png'
const Contact =() => {
  return (
    <div id='contact' className='contact'>
    
       <div className='head'>
        <h1>Our Contact Us</h1>
        <p>Easy to contact us</p>
       </div>
 <div className='fex'>
   <div className='list'>
       <div className='conp' >
         <div className='contain'>
          <span><img src={call}/></span>
          <span>
           <h4>Call</h4>
           <p>091677777</p>
          </span>
          </div>
         <a href=''>Call now</a>
       </div>

       <div className='conp' >
       <div className='contain'>
        <span><img src={call}/></span>
        <span>
         <h4>Chat</h4>
         <p>091677777</p>
        </span>
        </div>
       <a href=''>Chat</a>
     </div>

     <div className='conp' >
     <div className='contain'>
      <span><img src={call}/></span>
      <span>
       <h4>Video Call</h4>
       <p>091677777</p>
      </span>
      </div>
     <a href=''>Video Call</a>
   </div>
   <div className='conp' >
   <div className='contain'>
    <span><img src={call}/></span>
    <span>
     <h4>Message</h4>
     <p>091677777</p>
    </span>
    </div>
   <a href=''>Message</a>
 </div>
       </div>

     <div className='rightt'>
     <img  src ={heroo}/>
     
     </div>
     </div>
    </div>
  )
}

export default Contact 

