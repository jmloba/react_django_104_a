import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'

import '../../assets/css/generalcss.css'
import '../Navbar/Navbar2.css'



import logo_light from  '../../assets/images/logo_light.jpg'
import logo_dark from  '../../assets/images/logo_dark.jpg'
import search_icon_dark from  '../../assets/images/search_dark.jpg'
import search_icon_light from  '../../assets/images/search_light.jpg'
import toggle_light from  '../../assets/images/moon_dark.jpg'
import toggle_dark from  '../../assets/images/sun_icon.jpg'


const Navbar2 = () => {
 
    // # get from AuthContext if loggedin
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  const [click,setClick] = useState(false)
  const [dropdown,setDropdown] = useState(false)
  const closeMobileMenu = ()=>{
    setClick(false)
  }
  const handleClick =()=>{
    setClick(!click)
    console.log('navbar click value', click)

  }

  const toggle_mode = ()=>{
    // console.log('toggle icon clicked', theme)
    theme == 'light' ? 
        setTheme ('dark'):setTheme('light')
      console.log('theme is ', theme)
  }

  return (
    <>
    <div className={`navbar2 ${theme}`} >
      <img 
        src={ theme =='light'?logo_light:logo_dark } 
        alt="navbar logo" className='img-logo'/>

      <ul className='d-inline-flex '>

        <li className='header-text'>Home</li>
        <li className='header-text'>About</li>
        <li className='header-text'>Login</li>
        <li className='header-text'>Logout</li>
        <li className='header-text'>Register</li>
      </ul>
      <div  className={`search-box ${theme}`}>
        <input type='text' 
          placeholder='Search'  />
          <img className='img-search-box' 
          src={theme == 'light' ? search_icon_light:search_icon_dark} 
          alt="search icon" />

      </div>
      <img src={theme=='light'? toggle_light:toggle_dark} alt="toggle icon" className='img-toggle-icon' 
      onClick={()=>{toggle_mode()}}/>

    </div>




    </>
    
  )
}

export default Navbar2