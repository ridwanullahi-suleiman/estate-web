import React, { useRef, useState } from 'react'
import './Header.css'
import logo  from '../../assets/logo (1).png'
const  Header = () =>{



    const menuRef =useRef()
    const showMenu = () =>{
    menuRef.current.style.right = '0'
    }
    const closeMenu =() =>{
        menuRef.current.style.right ='-270px'
    }
  return (
    <nav id='NavBar' className='NavBar'>
         <div className='NavContainer'>
            <div className='logo'>
              <img src ={logo}/>
            </div>
            <ul ref={menuRef} className='NavLinks'>
            <span onClick={closeMenu}>&times;</span>
              <li> <a href ='#home' >Residencies</a></li>
               <li><a href='#value'>Our Value</a></li>
              <li><a href='#contact'>Contact us</a></li>
              <li><a href='#start'>Get Started</a></li>
               <li><a href=''><button className='btn'>Get Started</button></a></li>
            </ul>
            <span onClick={showMenu}>&#9776;</span>
         </div>
     </nav>
  )
}

export default Header