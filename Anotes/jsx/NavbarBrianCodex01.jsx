
import React, { use, useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'
import Dropdown from '../forNav/Dropdown';
import ButtonNav from './ButtonNav';
import Button from '../Button';


import logo_light from  '../../assets/images/logo_light.jpg'
import logo_dark from  '../../assets/images/logo_dark.jpg'
import search_icon_dark from  '../../assets/images/search_dark.jpg'
import search_icon_light from  '../../assets/images/search_light.jpg'

import toggle_light from  '../../assets/images/moon_dark.jpg'
import toggle_dark from  '../../assets/images/sun_icon.jpg'

import '../Navbar/Navbar2.css'
import './NavbarBrianCodex.css'

const NavbarBrianCodex = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const [click,setClick] = useState(false)

  const [dropdown,setDropdown] = useState(false)  

 
  const toggle_mode = ()=>{
    // console.log('toggle icon clicked', theme)
    theme == 'light' ? 
        setTheme ('dark'):setTheme('light')
      console.log('theme is ', theme)
  }

  const closeMobileMenu = () =>     setClick(false)


  const onMouseEnter = ()=>{
    if (window.innerWidth <960) {
      setDropdown(false)
    } else{
      setDropdown(true)
    }

  }  
  const onMouseLeave = ()=>{
    if (window.innerWidth <960) {
      setDropdown(false)
    } else{
      setDropdown(false)
    }

  }

  const handleClick =()=>{
    setClick(!click)
    console.log('navbar click value', click)

  }
  const handleLogout =()=>{

    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedin(false)
    navigate('/login')
  
  }
  
  const navigate=useNavigate()
  return (
    <>
    <nav className={`navbar ${theme}`}>
         <Link to='/' className='navbar-logo'>Logo</Link>

         <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times': 'fas fa-bars' } />
         </div>

         <ul className={click?'nav-menu active':'nav-menu'}>
          {isLoggedin? (
            <>
              <li className='nav-item'>
              <Link to = '/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
              </li>

              <li className='nav-item'>
                <Link to = '/dashboard' className='nav-links' onClick={closeMobileMenu}>Dashboard</Link>
              </li>

          
    
              <li className='nav-item'       >

                <Link to = '/services' className='nav-links' onClick={closeMobileMenu}>Service<i className='fas fa-caret-down  '/>
                </Link>

                {dropdown && <Dropdown />}
              </li>              


              <li className='nav-item'>
                {/* <Link to = '/login' className='nav-links' onClick={closeMobileMenu}>Logout</Link> */}
                <button  text='Logout' className="btn btn-info" onClick={handleLogout} >Logout </button>   
              </li>              

              
            </>
          ):(
            <>
            <li>
              <Button text='Login' class="btn-outline-info" url='/login'/>
            </li>



            <li className='nav-item'>
              <Link to = '/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>    
            </>
          )
          }

          <li className='nav-item'>
            <Link to = '/contact-us' className='nav-links' onClick={closeMobileMenu}>Contact Us</Link>
          </li>
            {/* <li>
              <ButtonNav />
            </li> */}
          
          
         </ul>
         

         


          <div>  
             <img src={theme=='light'? toggle_light:toggle_dark} alt="toggle icon" className='img-toggle-icon' 
               onClick={()=>{toggle_mode()}}/>     
         </div>
    </nav>
    </>
  )
}

export default NavbarBrianCodex