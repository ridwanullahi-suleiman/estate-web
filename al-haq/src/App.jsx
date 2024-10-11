import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import './App.css'
import Companies from './Companies/Companies'
import Value from './component/Value/Value'
import Contact from './component/Contact/Contact'
import Footer from './component/Footerr/Footerr'
import Residwncies from './Residwncies/Residwncies'



const App = ()  =>{

  return (
    <div className='App'>
    <div>
     <div className='white-gradient'>
      <Header />
      <Hero />     
     </div>
     </div>
     <Companies />
     <Residwncies/>
     <Value />
     <Contact />
     <Footer />
    </div>
    
  )
}

export default App
