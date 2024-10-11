import React from 'react'
import './Companies.css'
import img1 from '../assets/prologis.png'
import img2 from '../assets/tower.png'
import img3 from '../assets/equinix.png'
import img4 from '../assets/realty.png'
import mm from '../assets/imagereader.webp'
const Companies = () => {
  return (
  <div id='company' className='companies'>

    <div className='reade'>
       <div className='rightread'>
          <h3>For those who seek an exceptional<br/> home and life, there is only Sotheby’s<br/> International Realty.</h3> 
          <p>
          Built on centuries of tradition and dedicated to innovating the luxury real estate industry, Sotheby's International Realty offers transformative experiences through a global network of exceptional agents.
          </p>
       </div>
       <div className='rightread'>
          <img src ={mm}/>
       </div>
    </div>
    <div className='companies-img'>
     <img src={img1}/>
     <img src={img2}/>
     <img src={img3}/>
     <img src={img4}/>
    </div>
  </div>
  )
}

export default Companies