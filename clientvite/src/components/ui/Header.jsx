import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from '../Button';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'
import NavLinksTutor1 from '../NavLinksTutor1';
import Navbar2 from '../Navbar/Navbar2';
import { useState } from 'react';



const Header = () => {
  // # get from AuthContext if loggedin

// const [theme,setTheme] = useState('light')
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
    <div className="">
    <nav  className='navbar  nav-bg'>
      <div className='myhomelink'>
        <Link to='/' className='navbar-brand navbartext ' >App Header</Link>
      </div>
      <div> 
        {isLoggedin  ?
          (
            <div > 
              <Button text='Dashboard' class="btn-outline-info" url='/dashboard' />
              <button  text='Logout' className="btn-info" onClick={handleLogout} >Logout </button>    
              

            </div>
            
          ):
          (
            <>
              <Button text='Login' class="btn-outline-info" url='/login' />
              &nbsp;
              <Button text='Register' class="btn-info" url='/register'   />

            </>
          ) 
        }
      </div>
    </nav>

    <Navbar2 theme = {theme} setTheme={setTheme}/>

    </div>
    

   
   

    </>
    
  )
}

export default Header