
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import axiosInstance from '../../axiosInstance'
import Button from '../Button';
import NavLinksTutor1 from '../NavLinksTutor1';
import { useContext } from 'react';
import { AuthContext} from '../AuthProvider';

import '../Navbar/Navbar2.css' 


const DashBoard = () => {

  const {isLoggedin, setIsLoggedin,theme,setTheme} = useContext(AuthContext)

  useEffect( ()=>{
    const fetchProtectedData= async ()=>{
      try{
        // const response = await axiosInstance.get('/books/')
        const response = await axiosInstance.get('/protected-view/')

        console.log('dashboard try response', response.data)
  
      }catch(error){
        console.error ('\n errpr (fetchProtectedData )fetching data',error.data)

      }
    }
    fetchProtectedData();
    },[])  
  


  return (

    <>
      <div className= {`main-body ${theme}`}>
        <h4>Dashboard</h4>

{/*         
        <Link to='/add_post' className='navbar-brand navbartext ' >Add Post</Link> 

        <Link to='/add_employee' className='navbar-brand navbartext ' >Add Employee</Link>  

        
*/}
        
        <div className='second-nav'>
          <NavLinksTutor1 />
          <Link to='/books' className='navbar-brand navbartext ' >Books</Link>   
          <Button text='Books' class="btn-outline-info" url='/books' />            


         </div>

         

      </div>

    </>
    
  )
}

export default DashBoard