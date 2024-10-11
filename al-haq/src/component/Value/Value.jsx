import React from 'react'
import './Value.css'
import hero from '../../assets/hero-image.png'

const  Value =() => {
  return (
    <div  id='value' className='value'>
       <div className='value-container'>
           <div className='leftvalue'>
            <img src={hero}/>
           </div>

           <div className='rightvalue'>
               <div>
                  <h3>
                  Our Value
                  </h3>
                   <h2>
                   Value We Give to You

                   </h2>
                   <p>We always ready to help by providijng the best services for you.
                   We beleive a good blace to live can make your life better
                   </p>
               </div>

                <div className='shade'>
                   <h4>Best interest rates on the market</h4>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
                </div>


                <div className='shade'>
                   <h4>Prevent unstable prices</h4>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim..</p>
                </div>



                <div className='shade'>
                   <h4>Best price on the market</h4>
                    <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim. consequat esse adipisicing eu reprehenderit enim.</p>
                </div>
           </div>
       
       </div>
    
    </div>
  )
}

export default Value