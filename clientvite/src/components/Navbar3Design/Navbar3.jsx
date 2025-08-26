//by  https://www.youtube.com/watch?v=b8XiPZm2qc4&t=1090s


import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'
import Button from '../Button'

// import '../Navbar/Navbar2.css'
import '../Navbar3Design/Navbar3.css'

import {menuItemsData} from './MenuItemsData'
import MenuItems from './MenuItems';

import logo_light from  '../../assets/images/logo_light.jpg'
import logo_dark from  '../../assets/images/logo_dark.jpg'
import search_icon_dark from  '../../assets/images/search_dark.jpg'
import search_icon_light from  '../../assets/images/search_light.jpg'
import toggle_light from  '../../assets/images/moon_dark.jpg'
import toggle_dark from  '../../assets/images/sun_icon.jpg'

const Navbar3 = () => {
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

    const toggle_mode = ()=>{
      theme == 'light' ? 
        setTheme ('dark'):setTheme('light');
        console.log('nav3 theme', theme)
    }

    const depthLevel = 0;
    const handleLogout =()=>{
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      setIsLoggedin(false)
      navigate('/login')
  }
  return (
    <>
    
      <div className={`navbar3 ${theme} `}>

        <a className='logo' href="/">Logo</a>
        {isLoggedin?(
          <>
          <ul className='menus'>
            {menuItemsData.map((menu, index) =>{
              return (
                  <MenuItems  items= {menu} key={index} depthLevel={depthLevel}/>
              )    })
            }
          </ul>
              <button  text='Logout' className="btn btn-info" onClick={handleLogout} >Logout </button>   
          </>
        ):(
          <>
            <div className="nav-header">
              <Button text='Login' class="btn-outline-info" url='/login' />
              &nbsp;
              <Button text='Register' class="btn btn-info" url='/register'   />

            </div>

          </>
        )}
      <img src={theme=='light'? toggle_light:toggle_dark} alt="toggle icon" className='img-toggle-icon' 
      onClick={()=>{toggle_mode()}}/>

      </div>
    
    </>
    
  )
}

export default Navbar3