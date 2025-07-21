import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Button from '../Button';
import { Link ,NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';
import {useNavigate } from 'react-router-dom'



const Header = () => {
  // # get from AuthContext if loggedin
const {isLoggedin, setIsLoggedin} = useContext(AuthContext)
const navigate=useNavigate()
const handleLogout =(e)=>{
  e.preventDefault()
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
              <Link to='/add_post' className='navbar-brand navbartext ' >Add Post</Link> 
              <Link to='/add_employee' className='navbar-brand navbartext ' >Add Employee</Link>  
              
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
    </>
    
  )
}

export default Header