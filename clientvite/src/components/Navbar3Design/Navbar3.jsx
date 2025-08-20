//by  https://www.youtube.com/watch?v=b8XiPZm2qc4&t=1090s


import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'

// import '../Navbar/Navbar2.css'
import '../Navbar3Design/Navbar3.css'

import {menuItemsData} from './MenuItemsData'
import MenuItems from './MenuItems';

const Navbar3 = () => {
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
    const depthLevel = 0;
  return (
    <>
    <header>
      <div className={`navbar3 ${theme} `}>

        <a className='logo' href="/">Logo</a>

        <ul className='menus'>
          {menuItemsData.map((menu, index) =>{
            return (
              <>
              <MenuItems  items= {menu} key={index} depthLevel={depthLevel}/>
              </>
            )

            }
            )
          }
        </ul>

      </div>
    </header>
    </>
    
  )
}

export default Navbar3