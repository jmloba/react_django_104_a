import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from '../Button';
import { Link } from 'react-router-dom';


import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'

import Navbar2 from '../Navbar/Navbar2';


import Navbar3 from '../Navbar3Design/Navbar3'


import Navbar4 from '../Navbar4/Navbar4'

import NavbarOrig from '../Navbar/NavbarOrig';



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
    <div className="my-nav">
      
      <NavbarOrig/>
      <Navbar2 theme = {theme} setTheme={setTheme}/>
      {/* <Navbar3 /> */}
      {/* <Navbar4 /> */}
      

     
    </div>
    

   
   

    </>
    
  )
}

export default Header