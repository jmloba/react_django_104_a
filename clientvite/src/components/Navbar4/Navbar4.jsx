import React from 'react'
import {Navbar} from 'react-bootstrap'
import '../Navbar4/Navbar4.css'

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'


const Navbar4 = () => {
   
      // # get from AuthContext if loggedin
    const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  return (

    <>

    </>
    



  )
}

export default Navbar4