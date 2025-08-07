
import React, { use, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'
import Button from '../Button';


const NavbarOrig = () => {
  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)
  const navigate=useNavigate()
  const handleLogout =()=>{
    
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedin(false)
    navigate('/login')
  
  }
  
  return (
    <>
        <nav  className='navbar  nav-bg'>
      <div className='myhomelink'>
        <Link to='/' className='navbar-brand navbartext ' >App Header</Link>
      </div>
      <div> 
        {isLoggedin  ?
          (
            <div > 
              <Button text='Dashboard' class="btn-outline-info" url='/dashboard' />
              
              <button  text='Logout' className="btn btn-info" onClick={handleLogout} >Logout </button>    
              

            </div>
            
          ):
          (
            <>
              <Button text='Login' class="btn-outline-info" url='/login' />
              &nbsp;
              <Button text='Register' class="btn btn-info" url='/register'   />

            </>
          ) 
        }
      </div>
    </nav>
    </>
    
  )
}

export default NavbarOrig