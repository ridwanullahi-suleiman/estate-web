import React from 'react'
import './Hero.css'
import locat from '../../assets/locatblue.png'
import logo from '../../assets/giphy.webp'
import hero from '../../assets/hero-image.png'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-container'>
      <div className='hero-flex'>
         <div className='leftSide'>
         <div className='con'></div>
             <h1>Discover <br/>
             Most Suitable <br/>
             Property</h1>
             <p>Find a variety of properties that suit you very easilty<br/>
             Forget all difficulties in finding a residence for you</p>
             <img  className='img' src ={logo}/>
             <div className='input-container'>
                 <img src={locat}/>
                 <input type='search'></input>
                 <button>Search</button>
             </div>
             <div className='user'>
                <span className='Count'>
                <CountUp className='CountUp' start={6000} end={93000} duration={4}/>
                <span>+</span>
                 <p>Premium Product</p>
                </span>
                <span className='Count'>
                <CountUp className='CountUp' start={700} end={2000}/>
                <span>+</span>
                <p>Happy Customer</p>
                
               </span>
               <span className='Count'>
               <CountUp className='CountUp' start={1} end={28}/>
               <span>+</span>
               <p>Awards Winning</p>
              </span>
             </div>
         </div>

        <div className='rightSide'>
        <iframe width="494" height="351" src="https://www.youtube.com/embed/nZtYw8kJbhQ" title="Tips For How To Show Houses As A Realtor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
         </div>
      </div>
      </div>
    </div>
  )
}

export default Hero