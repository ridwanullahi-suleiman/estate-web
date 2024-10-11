
import React, { useRef } from 'react'
import './Residwncies.css'
import user from '../assets/user2.jpg'
import play from '../assets/play-button.svg'
import r1 from '../assets/r1.png'
import r2 from '../assets/r2.png'
import r3 from '../assets/r3.png'
const Residwncies = () => {


   const slidebar = useRef();
   let tx = 0;


    const scrollForward = () =>{
   if(tx > -50){
        tx -=25;
   }
   slidebar.current.style.transform = `translateX(${tx}%)`
    }
const  scollBackward = () =>{
      if(tx < 0){
      tx +=25;
 }
 slidebar.current.style.transform = `translateX(${tx}%)`
}
   
  return (<>
    
    
       <div id='home' className='hero1'>
         <img src={play} className='backbtn ' onClick={scollBackward} />
         <img src={play} className='nextbtn'  onClick={scrollForward} />
         <div className='slidebar'>
            <ul ref={slidebar}>
              <li>
                 <div className='slide'>
                     <div className='user-info'>
                       <img src ={r1}/>
                       <div>
                          <h3><span style={{color:"orange"}}>$</span>47,000</h3>
                          <span>Aliva Priva Jardin</span>
                       </div>
                     </div>
                     <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                     home
                      </p>
                 </div>
              </li>
              <li>
                 <div className='slide'>
                     <div className='user-info'>
                       <img src ={r2}/>
                       <div>
                       <h3><span style={{color:"orange"}}>$</span>67,000</h3>
                       <span>Assatin Garden city</span>
                       </div>
                     </div>
                     <p> Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten</p>
                 </div>
              </li>
              <li>
                 <div className='slide'>
                     <div className='user-info'>
                       <img src ={r3}/>
                       <div>
                       <h3><span style={{color:"orange"}}>$</span>38,000</h3>
                       <span>Citrialan Puta</span>
                       </div>
                     </div>
                     <p>Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat

                      </p>
                 </div>
              </li>
              <li>
                 <div className='slide'>
                     <div className='user-info'>
                       <img src ={r1}/>
                       <div>
                       <h3><span style={{color:"orange"}}>$</span>27,000</h3>
                       <span>Assatin Garden city</span>
                       </div>
                     </div>
                      <p>Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta
                      home
                    
                      </p>
                 </div>
              </li>
             
             
            </ul>
         </div>
       </div> 
      
     </>
  )
}

export default Residwncies